// ── 1. Map Setup ─────────────────────────────────────────
// Initialize the Leaflet map centered on Calgary.
// DEFAULT_CENTER and DEFAULT_ZOOM are saved so the Reset View
// button can always return to the same starting position.
const DEFAULT_CENTER = [51.0447, -114.0719];
const DEFAULT_ZOOM = 11;

const map = L.map("map").setView(DEFAULT_CENTER, DEFAULT_ZOOM);

// Add OpenStreetMap as the background basemap tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

// Reset View — listens for a click on the button in index.html
// and snaps the map back to the default Calgary center and zoom
document.getElementById("resetBtn").addEventListener("click", () => {
  map.setView(DEFAULT_CENTER, DEFAULT_ZOOM);
});

// ── 2. Layer Group & State ────────────────────────────────
// A Leaflet layerGroup acts as a container for all our data layers.
// layerByName stores each loaded layer by name so the checkboxes
// can add or remove them from the map without reloading the data.
const group = L.layerGroup().addTo(map);
const layerByName = {};

// ── 3. Data URLs ──────────────────────────────────────────
// GeoJSON is fetched directly from Calgary's Open Data API (Socrata).
// Using a live API means we do not need to store data in GeoServer,
// PostgreSQL, or as local GeoJSON files — the browser fetches it at load time.
// $limit=500 restricts the response to 500 features to keep load time reasonable.
const PARKS_URL = "https://data.calgary.ca/resource/kami-qbfh.geojson?$limit=500";
const TREES_URL = "https://data.calgary.ca/resource/tfs4-3wwa.geojson?$limit=500";

// ── 4. Popup Builder ──────────────────────────────────────
// Builds an HTML table of attributes to show when a feature is clicked.
// It tries to display the specified fields first. If none of those fields
// exist in the data, it falls back to showing the first 5 available properties.
function buildPopup(title, props, fields) {
  let rows = "";
  for (const f of fields) {
    if (props[f] !== undefined && props[f] !== null && props[f] !== "") {
      rows += `<tr><th>${f}</th><td>${props[f]}</td></tr>`;
    }
  }
  // Fallback: if none of the desired fields matched, show first 5 available
  if (!rows) {
    Object.keys(props).slice(0, 5).forEach(k => {
      rows += `<tr><th>${k}</th><td>${props[k]}</td></tr>`;
    });
  }
  return `<div class="popup-title">${title}</div>
          <table class="popup-table">${rows}</table>`;
}

// ── 5. Load Parks ─────────────────────────────────────────
// Fetches park polygon data from the API and draws it on the map.
// style() applies a green semi-transparent fill to polygon features.
// onEachFeature binds a popup to every park so clicking shows its attributes.
async function loadParks() {
  const res = await fetch(PARKS_URL);
  const gj  = await res.json();

  const lyr = L.geoJSON(gj, {
    // Style park polygons as green filled areas
    style: () => ({
      color: "green",
      weight: 1,
      fillColor: "green",
      fillOpacity: 0.25
    }),
    // Bind a popup to each park feature showing key attributes
    onEachFeature: (feature, layer) => {
      const html = buildPopup(
        "Park",
        feature.properties,
        ["name", "park_type", "area_ha", "community_name", "ward"]
      );
      layer.bindPopup(html, { maxWidth: 280 });
    }
  });

  lyr.addTo(group);
  layerByName["parks"] = lyr;
}

// ── 6. Load Trees ─────────────────────────────────────────
// Fetches tree point data from the API and draws it on the map.
// pointToLayer overrides the default marker with a small brown circle,
// which is more appropriate for displaying many point features at once.
// onEachFeature binds a popup to every tree showing its species and condition.
async function loadTrees() {
  const res = await fetch(TREES_URL);
  const gj  = await res.json();

  const lyr = L.geoJSON(gj, {
    // Render each tree as a small brown circle marker instead of default pin
    pointToLayer: (feature, latlng) => {
      return L.circleMarker(latlng, {
        radius: 4,
        color: "#8B4513",
        fillColor: "#8B4513",
        fillOpacity: 0.7,
        weight: 1
      });
    },
    // Bind a popup to each tree feature showing species and condition info
    onEachFeature: (feature, layer) => {
      const html = buildPopup(
        "Tree",
        feature.properties,
        ["common_name", "genus", "species", "cultivar", "dbh_cm", "rating", "location_detail", "comm_code"]
      );
      layer.bindPopup(html, { maxWidth: 280 });
    }
  });

  lyr.addTo(group);
  layerByName["trees"] = lyr;

  // Count and return the number of tree features loaded
  let count = 0;
  lyr.eachLayer(() => count++);
  return count;
}

// ── 7. Layer Toggle Checkboxes ────────────────────────────
// Each checkbox in index.html controls one layer.
// When unchecked, the layer is removed from the group (hidden).
// When checked again, it is added back — no data re-fetch needed
// because the layer object is still stored in layerByName.
document.getElementById("cb-parks").addEventListener("change", (e) => {
  const lyr = layerByName["parks"];
  if (!lyr) return;
  if (e.target.checked) lyr.addTo(group);
  else group.removeLayer(lyr);
});

document.getElementById("cb-trees").addEventListener("change", (e) => {
  const lyr = layerByName["trees"];
  if (!lyr) return;
  if (e.target.checked) lyr.addTo(group);
  else group.removeLayer(lyr);
});

// ── 8. Initialize — Load All Layers on Page Start ─────────
// Runs immediately when the page loads. Loads parks first, then trees.
// Updates the status bar in the panel to show loading progress.
// If anything fails (e.g. API is unreachable), logs the error and
// shows a message prompting the user to check the browser console.
(async function () {
  const statusEl = document.getElementById("status");
  try {
    statusEl.textContent = "Loading parks…";
    await loadParks();

    statusEl.textContent = "Loading trees…";
    const treeCount = await loadTrees();

    statusEl.textContent = `Loaded parks + ${treeCount} trees. Click any feature!`;
  } catch (err) {
    console.error(err);
    statusEl.textContent = "Error loading data. Check console (F12).";
  }
})();
