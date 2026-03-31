const siteData = {
  site: {
    name: "Mai Han Nguyen",
    title: "Mai Han Nguyen | Data Portfolio",
    tagline: "Geospatial data for good",
    description:
      "One-page portfolio for Mai Han Nguyen, focused on geospatial analysis, sustainability, and data storytelling.",
  },

  navigation: [
    { label: "Home", href: "index.html#banner" },
    { label: "About", href: "index.html#about" },
    { label: "Services", href: "index.html#services" },
    { label: "Portfolio", href: "portfolio.html", isCta: false },
    { label: "Resume", href: "resume.html", isCta: true },
  ],

  hero: { 
  title: "Han Nguyen",
  subtitle: "Geospatial Data for Good.<br>Remote Sensing and GIS for Social Impact.",
  buttons: [
    { label: "View Portfolio", href: "portfolio.html", className: "button-1" },
    { label: "Learn More", href: "#about", className: "button-2" },
  ],
},

  about: {
    subtitle: "About Han",
    title: "Geospatial Data For Good",
    image: "images/about-portrait.jpg",
    imageAlt: "About Han",
    text:
      "A grateful Earth Citizen. <br>Highly analytical and motivated professional with a background in data analytics, social impact consulting and recently acquired skills in Geospatial Data. <br> I care about using Remote Sensing and GIS to contribute to nature resource conservation and climate action.",
    highlights: [
      "Geospatial data analytics, and visualization",
      "Sustainability and Social Impact Consulting",
      "Work experience in Vietnam, Sweden, and Maldives",
      "Servant leadership practitioner and long-term volunteer",
    ],
    readMoreLabel: "Read More",
    readMoreHref: "about.html",
    resumeLabel: "View Resume",
    resumeHref: "resume.html",
  },

  services: {
    subtitle: "Skills",
    title: "What I Do",
    items: [
      {
        icon: "images/icon-camera.png",
        title: "Geospatial & Sustainability",
        text:
          "Use ArcGIS Pro, Google Earth Engine, Python, and sustainability-focused research to turn spatial data into practical insights.",
        linkLabel: "See Projects",
        linkHref: "portfolio.html",
      },
      {
        icon: "images/icon-dashboard.png",
        title: "Data Analysis",
        text:
          "Analyze, clean, and interpret data using Python Data Science libraries and SQL (MySQL and SQL Server).",
        linkLabel: "See Projects",
        linkHref: "portfolio.html",
      },
      {
        icon: "images/icon-pencil.png",
        title: "Data Visualization",
        text:
          "Create clear visuals and dashboards with Tableau, Power BI, PowerPoint, Plotly, Seaborn for story telling and reporting.",
        linkLabel: "See Projects",
        linkHref: "portfolio.html",
      },
    ],
  },

  portfolio: {
    subtitle: "Portfolio",
    title: "Latest Work",
    items: [
      {
        thumb: "images/elk-creek-restoration.jpg",
        full: "images/elk-creek-restoration.jpg",
        alt: "Quantifying Restoration Outcomes at Elk Creek",
        title: "Quantifying Restoration Outcomes at Elk Creek",
        text:
           "Community Service Learning project. Quantified stream restoration outcomes at Elk Creek using GIS and remote sensing",
        meta: "Jan 2026 - on-going",
        links: [
          {
            label: "Project Page",
            href: "https://canva.link/qfkxjexe5xiwgvx",
          },
        ],
      },
            {
        thumb: "images/winter-olympics-analysis.jpg",
        full: "images/winter-olympics-analysis.jpg",
        alt: "Winter Olympics Medal Strategy Analysis",
        title: "Gold Diggers:How to Win More Medals at the Winter Olympics",
        text:
           "Explored factors influencing Olympic medal success",
        meta: "Mar 2026 - Mar 2026",
        links: [
          {
            label: "Project Page",
            href: "https://www.canva.com/design/DAHC7QTNNk0/MaUNFZzcupEjqZTMORtmVg/edit",
          },
        ],
      },
      {
        thumb: "images/bee-project.webp",
        full: "images/bee-project.webp",
        alt: "Enhancing bee pollination of canola fields in Southern Alberta",
        title: "Enhancing Bee Pollination of Canola Fields in Southern Alberta",
        text:
          "Capstone project using Excel, Python, and Tableau to support client recommendations for bee pollination in canola fields.",
        meta: "Jan 2025 - Apr 2025",
        links: [
          {
            label: "Project Page",
            href: "https://www.datascienceportfol.io/maihan/projects/0",
          },
        ],
      },
      {
        thumb: "images/call-volume-analysis.webp",
        full: "images/call-volume-analysis.webp",
        alt: "Service gap analysis and call volume forecasting for Distress Centre Calgary",
        title: "Service Gap Analysis & Call Volume Forecasting for Distress Centre Calgary",
        text:
          "Volunteer analytics project using time-series analysis and forecasting to identify service gaps and support operations planning.",
        meta: "Apr 2025 - May 2025",
        links: [
          {
            label: "Project Page",
            href: "https://www.datascienceportfol.io/maihan/projects/1",
            primary: true,
          },
        ],
      },
      {
        thumb: "images/obesity-mngt.webp",
        full: "images/obesity-mngt.webp",
        alt: "Obesity management data mining project",
        title: "Obesity Management Data Mining",
        text:
          "Course project applying clustering, classification, and visualization to predict obesity risk and identify high-risk population groups.",
        meta: "Mar 2025 - Apr 2025",
        links: [
          {
            label: "Project Page",
            href: "https://www.datascienceportfol.io/maihan/projects/2",
            primary: true,
          },
        ],
      },
      {
        thumb: "images/hr-attrition.png",
        full: "images/hr-attrition.png",
        alt: "High employee turnover analysis dashboard project",
        title: "High Employee Turnover Analysis",
        text:
          "Tableau-based analysis and dashboard exploring drivers of attrition and recommendations for senior management.",
        meta: "Apr 2025",
        links: [
          {
            label: "Project Page",
            href: "https://www.datascienceportfol.io/maihan/projects/3",
            primary: true,
          },
        ],
      },
      {
        thumb: "images/Sales-inventory-analysis.webp",
        full: "images/Sales-inventory-analysis.webp",
        alt: "Sales and inventory integration using SQL",
        title: "Sales and Inventory Integration Using SQL",
        text:
          "SQL project integrating sales and inventory databases to answer business questions and support decision-making.",
        meta: "Dec 2024",
        links: [
          {
            label: "Project Page",
            href: "https://www.datascienceportfol.io/maihan/projects/5",
            primary: true,
          },
        ],
      },
      {
        thumb: "images/spiritual-religion.webp",
        full: "images/spiritual-religion.webp",
        alt: "Religion and spirituality in East Asian societies analysis",
        title: "Religion and Spirituality in East Asian Societies",
        text:
          "Python-based survey analysis testing hypotheses and drawing conclusions from Pew Research Center data across five East Asian societies.",
        meta: "Mar 2025",
        links: [
          {
            label: "Project Page",
            href: "https://www.datascienceportfol.io/maihan/projects/4",
            primary: true,
          },
        ],
      },
    ],
  },

footer: {
  name: "Mai Han Nguyen",
  tagline: "Geospatial Data for Good. Making the invisible visible through data.",
  links: [

    // 👇 ADD THIS
    { 
      label: "Connect on LinkedIn", 
      href: "https://www.linkedin.com/in/maihannguyen/", 
      icon: "linkedin" 
    },
  ],
}
};
