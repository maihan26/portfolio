const projectData = {
  pageTitle: "Calgary Parks & Trees Map | Han Nguyen",
  pageDescription: "Interactive map of Calgary parks and public trees using open data.",

  title: "Calgary Parks & Trees Interactive Map",
  subtitle: "Exploring Calgary’s urban green infrastructure through an interactive web map.",

  tags: ["GIS", "Leaflet", "Web Mapping", "Open Data"],

  heroImage: {
    src: "images/project-4-thumb.webp",
    alt: "Calgary parks and trees map preview"
  },

  intro:
    "This project visualizes public trees and park sites across Calgary using an interactive web map. It makes urban green infrastructure easier to explore through a simple, user-friendly interface.",

  approach:
    "Built using Leaflet and GeoJSON, the map loads live data from the Calgary Open Data Portal and displays it as interactive layers. Users can toggle parks and trees, reset the map view, and click features to view attribute details in popups.<br><br><strong>Role:</strong> Individual project<br><strong>Timeframe:</strong> 2026<br><strong>Tools:</strong> JavaScript, Leaflet, GeoJSON, API",

  results: [
    "Built an interactive map with layer toggling and reset view",
    "Integrated live open data for parks and public trees in Calgary",
    "Improved usability with popups for feature-level exploration"
  ],

  embed: {
    enabled: true,
    title: "Interactive map",
    description: "Explore Calgary parks and public trees directly on the map.",
    src: "project-4/calgary_parks_map.html"
  },

  materials: [
  {
    title: "Live Map",
    desc: "Open the interactive map in a new tab for a larger view.",
    link: "project-4/calgary_parks_map.html"
  },
  {
    title: "Code",
    desc: "HTML, CSS, and JavaScript scripts used to load data, style layers, and support interaction.",
    link: "#"
  }
],

  backLink: "index.html#portfolio"
};

function setProjectMeta() {
  document.title = projectData.pageTitle || "Project | Han Nguyen";
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && projectData.pageDescription) {
    metaDescription.setAttribute("content", projectData.pageDescription);
  }
}

function renderMaterialAction(item) {
  if (item.type === "lightbox") {
    return `<button class="text-link project-lightbox-trigger" data-image="${item.link}" data-title="${item.title}">View</button>`;
  }

  return `<a href="${item.link}" class="text-link" target="_blank" rel="noopener noreferrer">View</a>`;
}

function renderEmbedSection() {
  if (!projectData.embed || !projectData.embed.enabled) return "";

  return `
    <section class="project-embed-section">
      <div class="project-materials-header">
        <p class="subtitle">Interactive</p>
        <h4>${projectData.embed.title}</h4>
      </div>

      <div class="project-embed-card">
        <iframe src="${projectData.embed.src}" title="${projectData.embed.title}" loading="lazy"></iframe>
        <div class="project-embed-body">
          <p>${projectData.embed.description || ""}</p>
        </div>
      </div>
    </section>
  `;
}

function renderProject() {
  const container = document.getElementById("project-page");
  if (!container) return;

  setProjectMeta();

  container.innerHTML = `
    <article class="project-entry">
      <div class="project-heading">
        <p class="subtitle">Project</p>
        <h2>${projectData.title}</h2>
        <p class="project-subtitle">${projectData.subtitle}</p>
        <div class="project-tags">
          ${projectData.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("")}
        </div>
      </div>

      <section class="project-story-grid">
        <div class="project-story-media">
          <div class="project-thumb-card">
            <img src="${projectData.heroImage.src}" alt="${projectData.heroImage.alt}">
          </div>
        </div>

        <div class="project-story-copy">
          <section class="project-copy-block">
            <h4>Introduction</h4>
            <p>${projectData.intro}</p>
          </section>

          <section class="project-copy-block">
            <h4>Approach</h4>
            <p>${projectData.approach}</p>
          </section>

          <section class="project-copy-block">
            <h4>Results</h4>
            <ul class="project-result-list">
              ${projectData.results.map(item => `<li>${item}</li>`).join("")}
            </ul>
          </section>
        </div>
      </section>

      ${renderEmbedSection()}

      <section class="project-materials-section">
        <div class="project-materials-header">
          <p class="subtitle">Further reading</p>
          <h4>Project materials</h4>
        </div>

        <div class="project-materials-grid">
${projectData.materials.map(item => {
  const hasImage = item.image && item.image.trim() !== "";

  // 👉 TEXT-ONLY (no image)
  if (!hasImage) {
    return `
      <div class="project-copy-block">
        <h6>${item.title}</h6>
        <p>${item.desc}</p>
        <p>
          <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="text-link">
            ${item.title} →
          </a>
        </p>
      </div>
    `;
  }

  // 👉 CARD (with image)
  return `
    <article class="project-material-card">
      <div class="project-material-image">
        <img src="${item.image}" alt="${item.title}">
      </div>
      <div class="project-material-body">
        <h6>${item.title}</h6>
        <p>${item.desc}</p>
        ${renderMaterialAction(item)}
      </div>
    </article>
  `;
}).join("")}
        </div>
      </section>

      <div class="project-back-row">
        <a href="${projectData.backLink}" class="button-2">Back to Portfolio</a>
      </div>
    </article>

    <div class="project-lightbox" id="project-lightbox" aria-hidden="true">
      <div class="project-lightbox-backdrop"></div>
      <div class="project-lightbox-dialog" role="dialog" aria-modal="true" aria-label="Image preview">
        <button class="project-lightbox-close" id="project-lightbox-close" aria-label="Close preview">×</button>
        <img id="project-lightbox-image" src="" alt="">
      </div>
    </div>
  `;

  setupLightbox();
}

function setupLightbox() {
  const triggers = document.querySelectorAll(".project-lightbox-trigger");
  const lightbox = document.getElementById("project-lightbox");
  const lightboxImage = document.getElementById("project-lightbox-image");
  const closeButton = document.getElementById("project-lightbox-close");
  const backdrop = lightbox?.querySelector(".project-lightbox-backdrop");

  if (!lightbox || !lightboxImage || !closeButton || !backdrop) return;

  function openLightbox(src, title) {
    lightboxImage.src = src;
    lightboxImage.alt = title || "Preview image";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.src = "";
    document.body.classList.remove("lightbox-open");
  }

  triggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      openLightbox(trigger.dataset.image, trigger.dataset.title);
    });
  });

  closeButton.addEventListener("click", closeLightbox);
  backdrop.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}

document.addEventListener("DOMContentLoaded", renderProject);