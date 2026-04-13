const projectData = {
  pageTitle: "Winter Olympics Medal Strategy Analysis | Han Nguyen",
  pageDescription: "A data-driven analysis exploring factors influencing medal success at the Winter Olympics.",

  title: "Gold Diggers: How to Win More Medals at the Winter Olympics",
  subtitle: "A data-driven analysis of sport opportunities, national factors, and athlete characteristics shaping Olympic medal success.",

  tags: ["Python", "Web Scraping", "Data Analysis", "Research", "Storytelling"],

  heroImage: {
    src: "images/winter-olympics-analysis.jpg",
    alt: "Winter Olympics medal strategy poster"
  },

  intro:
    "This project investigates what drives medal success at the Winter Olympics, using a combination of web-scraped athlete data, country-level indicators, and historical performance trends. Motivated by Canada's relatively low medal efficiency compared to top-performing countries like Norway, the analysis explores how strategic focus across sports, national wealth, and athlete characteristics can influence medal outcomes.",

  approach:
    "We collected and integrated data from multiple sources using Python, including athlete-level data from Olympedia and country-level economic indicators from Worldometer. The dataset spans five Winter Olympic Games (2010–2026) and includes over 1,100 medal records. The workflow involved web scraping, data cleaning, database integration, and exploratory data analysis through visualizations to examine three key dimensions: sport opportunities, national factors, and athlete characteristics.<br><br><strong>Role:</strong> Data analysis, report writing (Sections 4 & 5), key contributor to poster content and narrative synthesis<br><strong>Timeframe:</strong> 2026<br><strong>Tools:</strong> Python (BeautifulSoup, pandas, matplotlib, seaborn), SQLite",

  results: [
    "Identified that over 80% of medals come from two sport groups: skiing (56%) and skating (26%)",
    "Found GDP per capita strongly correlates with medal efficiency (r ≈ 0.74), but not total medal count",
    "Showed that smaller countries (e.g., Norway) outperform through focused sport specialization",
    "Revealed that athlete success profiles vary by sport, with age and weight more influential than height",
    "Highlighted strategic opportunities for countries to optimize medal outcomes through targeted investment"
  ],

  embed: {
    enabled: false
  },

  materials: [
    {
      title: "Project Poster",
      desc: "Research poster synthesizing key findings, visualizations, and strategic insights derived from the analysis.",
      image: "images/project-3-poster.png",
      link: "images/project-3-poster.png",
      type: "lightbox"
    },
    {
      title: "IEEE Academic Report",
      desc: "Formal IEEE-style research paper documenting the full workflow—from web scraping and data integration to statistical analysis and insights.",
      link: "project-3/IEEE-Paper-Winter-Olympics.pdf"
    }
  ],

  backLink: "index.html#portfolio"
};