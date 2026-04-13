// =========================================================
// HOMEPAGE CONTENT
// ---------------------------------------------------------
// Edit this file to update the homepage content
// =========================================================
const siteData = {
  site: {
    title: "Han Nguyen | Geospatial Data for Good",
    description: "Data portfolio for Han Nguyen, focused on geospatial analysis, sustainability, and data storytelling."
  },

  // Main homepage navigation
  navigation: [
    { label: "Home", href: "index.html#banner" },
    { label: "About", href: "index.html#about" },
    { label: "Portfolio", href: "index.html#portfolio" },
    { label: "Resume", href: "resume.html" }
  ],

  // Hero content. Keep line breaks in subtitle with <br>.
  hero: {
    title: "Welcome! I'm Han Nguyen",
    subtitle: "I turn geospatial data into measurable insights for good.",
    buttons: [
      { label: "View portfolio", href: "#portfolio", className: "button-1" },
      { label: "Read more", href: "#about", className: "button-2" }
    ]
  },

  // About section content
  about: {
    subtitle: "About",
    title: "Remote sensing and GIS for social impact",
    image: "images/about-portrait.jpg",
    imageAlt: "Han Nguyen portfolio image",
    text: "I work at the intersection of geospatial analysis, sustainability, and storytelling. My goal is to turn spatial data into insight that supports conservation, climate action, and better decisions.",
    highlights: [
      "GIS, remote sensing, and data visualization",
      "Research with social and environmental purpose",
      "Experience across consulting, development, and analytics",
      "Clear communication for technical and non-technical audiences"
    ],
    readMoreLabel: "Read more",
    readMoreHref: "about.html",
    resumeLabel: "View resume",
    resumeHref: "resume.html"
  },

  // Portfolio section.
  // 'filters' creates the top filter row.
  // 'tags' are also shown as small labels on each project card.
  portfolio: {
    subtitle: "Portfolio",
    title: "Selected projects",
    filters: ["All", "Remote Sensing", "GIS", "Web mapping", "Research", "Cartography", "Machine Learning", "Deep Learning", "ArcGIS Pro", "ArcGIS Online", "StoryMap", "Field Maps", "Survey123", "Google Earth Engine", "Tableau", "Python", "SQL", "JavaScript", "HTML/CSS", "Leaflet", "Folium", "API"],
    items: [
      {
        thumb: "images/elk-creek-restoration.jpg",
        alt: "Elk Creek restoration project",
        title: "Quantifying restoration outcomes at Elk Creek",
        text: "A community service learning project for Freshwater Conservation Canada.",
        href: "project-1.html",
        tags: ["Remote Sensing", "GIS", "ArcGIS Online", "Python", "ArcGIS Pro", "Machine Learning", "Deep Learning", "Research", "StoryMap"]
      },
      {
        thumb: "images/SaddleLake.jpg",
        alt: "GIS suitability analysis for solar farm siting",
        title: "GIS Suitability Analysis for Solar Farm Siting",
        text: "Integrated technical, legal, and economic constraints in a GIS workflow to identify potential sites for solar farm development in Saddle Lake.",
        href: "project-2.html",
        tags: ["GIS","Research", "Cartography", "ArcGIS Pro"]
      },
      {
        thumb: "images/winter-olympics-analysis.jpg",
        alt: "Winter Olympics strategy analysis",
        title: "Gold Diggers: How to Win More Medals at the Winter Olympics",
        text: "Explored national, sport, and athlete factors that correlate medal success at Winter Olympics.",
        href: "project-3.html",
        tags: ["Python", "Web Scraping", "Research"]
      },
            {
        thumb: "images/Calgary_green_map.png",
        alt: "Calgary Map",
        title: "Calgary Parks & Trees Interactive Map",
        text: "Exploring Calgary’s urban green infrastructure through an interactive web map.",
        href: "project-4.html",
        tags: ["GIS", "Web mapping", "Leaflet", "HTML/CSS", "JavaScript", "API"]
      },
      {
        thumb: "images/Calgary_Transit_Grocery_map.png",
        alt: "Interactive Transit Accessibility Map",
        title: "Calgary Grocery Store Accessibility Interactive Map ",
        text: "Interactive map visualizing transit access and nearby grocery stores in Calgary.",
        href: "project-5.html",
        tags: ["GIS", "Folium", "Python", "Web Mapping", "Accessibility"]
      },
      {
        thumb: "images/Calgary_Urban_Expansion.png",
        alt: "Urban expansion in Calgary from satellite imagery",
        title: "Urban Trace: Calgary Expansion StoryMap",
        text: "Combined Landsat imagery and Google Earth Engine analysis into a StoryMap to reveal 25 years of urban growth in Calgary.",
        href: "project-6.html",
        tags: ["Remote Sensing", "Google Earth Engine", "StoryMap"]
      },
      {
        thumb: "images/Remote_Sensing_4Good.png",
        alt: "Remote Sensing for Good StoryMap",
        title: "Remote Sensing for Good",
        text: "A StoryMap project using narrative structure, visual curation, and design choices to communicate remote sensing in an accessible way.",
        href: "project-7.html",
        tags: ["StoryMap", "Remote Sensing", "Design", "Geospatial Storytelling"]
      },
      {
        thumb: "images/call-volume-analysis.webp",
        alt: "Call volume forecasting",
        title: "Service gap analysis and call volume forecasting",
        text: "Analytics report for planning, forecasting, and service insight. Dedicated to National Mental Health Datathon.",
        href: "https://www.datascienceportfol.io/maihan/projects/1",
        tags: ["Python", "Machine Learning"]
      },
            {
        thumb: "images/bee-project.webp",
        alt: "Bee pollination analysis",
        title: "Bee pollination analysis for canola fields",
        text: "Quantitative and desk research analysis to support client in improving bee health and productivity in Southern Alberta.",
        href: "https://www.datascienceportfol.io/maihan/projects/0",
        tags: ["Python", "Tableau", "Research"]
      },
      {
        thumb: "images/Sales-inventory-analysis.webp",
        alt: "Sales and inventory SQL project",
        title: "Sales and inventory integration using SQL",
        text: "Database integration project to answer business questions with clean schema design and SQL queries.",
        href: "https://www.datascienceportfol.io/maihan/projects/5",
        tags: ["SQL"]
      }
    ]
  },

  // Footer content
  footer: {
    tagline: "Geospatial data for good. Making the invisible visible through location-based insight.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/maihannguyen/"}
    ]
  }
};
