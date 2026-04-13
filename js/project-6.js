const projectData = {
  pageTitle: "Urban Trace: Watching Calgary Change from Space | Han Nguyen",
  pageDescription: "A StoryMap-based geospatial analysis of urban expansion in Calgary from 2000 to 2025 using Landsat imagery and Google Earth Engine.",

  title: "Urban Trace: Watching Calgary Change from Space",
  subtitle: "A StoryMap exploring Calgary’s urban expansion from 2000 to 2025 through Landsat imagery, Google Earth Engine, and geospatial storytelling.",

  tags: ["Google Earth Engine", "Remote Sensing", "StoryMap", "Urban Change"],

  heroImage: {
    src: "images/Calgary_Urban_Expansion.png",
    alt: "Urban expansion in Calgary visualized through satellite imagery and StoryMap"
  },

  intro:
    "This individual project examines how Calgary expanded between 2000 and 2025 using multi-temporal Landsat imagery and a StoryMap format. The analysis focuses on visible urban growth patterns, especially the emergence and completion of the Calgary Ring Road, and translates satellite-based observations into an accessible spatial narrative. The goal was not only to process imagery, but also to communicate urban change clearly through interactive storytelling.",

  approach:
    "The workflow began with acquiring Calgary’s city boundary from Open Calgary and using it as the area of interest in Google Earth Engine. Landsat 5, 7, and 8 surface reflectance collections were selected for 2000, 2005, 2010, 2015, 2020, and 2025, then filtered by date and cloud cover, scaled, masked for clouds/shadows/snow, clipped to the study area, and composited into annual summer images. The visual analysis compared imagery across years and linked observed expansion patterns to known infrastructure milestones, especially the progressive development of Highway 201 / Stoney Trail. The outputs were then organized into a StoryMap to combine maps, interpretation, and narrative in one artifact.",

  results: [
    "Built a multi-year Landsat workflow in Google Earth Engine for Calgary between 2000 and 2025",
    "Documented visible urban and infrastructure expansion through image comparison and interpretation",
    "Tracked the staged emergence of Calgary Ring Road across different quadrants of the city",
    "Connected remotely sensed change with real-world development timelines and urban growth context",
    "Translated the analysis into an interactive StoryMap for broader communication"
  ],

  embed: {
  enabled: true,
  title: "Interactive StoryMap",
  description: "Explore the StoryMap directly on this page.",
  src: "https://storymaps.arcgis.com/stories/ae43a56bb30845938d5a21689d9d311a"
},

  materials: [
    {
      title: "Open full StoryMap",
      desc: "View the full interactive StoryMap with maps, narrative, and supporting visuals.",
      link: "https://arcg.is/11Kmjj0"
    },
    {
      title: "Google Earth Engine script",
      desc: "JavaScript workflow used to acquire, filter, process, and visualize Landsat imagery for Calgary in Google Earth Engine.",
      link: "project-6/Calgary_Urban_Dev_GEE script.js"
    }
  ],

  backLink: "index.html#portfolio"
};