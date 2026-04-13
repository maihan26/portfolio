const projectData = {
  pageTitle: "Interactive Transit Accessibility Map | Han Nguyen",
  pageDescription: "Interactive Folium map visualizing transit access and nearby grocery stores in Calgary.",

  title: "Interactive Transit Accessibility Map",
  subtitle: "A web map built with Folium to explore transit access and nearby grocery stores within 500m distance.",

  tags: ["GIS", "Folium", "Python", "Web Mapping", "Accessibility"],

  heroImage: {
    src: "images/Calgary_Transit_Grocery_map.png",
    alt: "Interactive Folium map preview"
  },

  intro:
    "This project presents an interactive web map built with Folium to visualize spatial relationships between transit stops and nearby grocery stores within 500m distance. The goal is to make location-based patterns easier to explore.",

  approach:
    "The map was developed in Python using Folium and combines multiple spatial layers into a single interactive view. It supports exploration of transit-related features and nearby points of interest, helping users better understand accessibility and spatial distribution patterns.<br><br><strong>Role:</strong> Individual project<br><strong>Timeframe:</strong> 2026<br><strong>Tools:</strong> Python, Folium, GeoPandas, HTML/CSS",

  results: [
    "Built an interactive Folium map for exploring transit accessibility",
    "Integrated multiple geospatial layers into a web-friendly interface",
    "Improved usability with interactive popups, layer controls, and map navigation"
  ],

  embed: {
    enabled: true,
    title: "Interactive map",
    description: "Explore the interactive Folium map directly on this page.",
    src: "project-5/calgary_grocery_transit_500m_map.html"
  },

  materials: [
    {
      title: "Live Map",
      desc: "Open the interactive map in a new tab for a larger view.",
      link: "project-5/calgary_grocery_transit_500m_map.html"
    },
    {
      title: "GitHub Code",
      desc: "View the Python workflow and source code used to generate the interactive Folium map.",
      link: "#"
    }
  ],

  backLink: "index.html#portfolio"
};