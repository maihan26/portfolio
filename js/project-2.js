const projectData = {
  pageTitle: "GIS Suitability Analysis for a Hypothetical Solar Energy Farm | Han Nguyen",
  pageDescription: "A multi-step GIS suitability analysis to identify potential solar farm sites in Saddle Lake, Alberta.",

  title: "GIS Suitability Analysis for a Hypothetical Solar Energy Farm",
  subtitle: "A multi-analysis workflow using ArcGIS Pro to narrow land from broad feasibility criteria to four potential solar farm sites.",

  tags: ["GIS", "Suitability Analysis", "ArcGIS Pro", "Raster Analysis", "Vector Analysis"],

  heroImage: {
    src: "images/SaddleLake.jpg",
    alt: "Potential solar farm sites identified through GIS suitability analysis"
  },

  intro:
    "This project applies a step-by-step GIS suitability analysis to identify potential sites for a hypothetical solar energy farm in Saddle Lake, Alberta. The workflow combines technical constraints, legal accessibility, and relative economic viability to reduce the study area from broad candidate land to a small set of potential development parcels. The project builds a decision framework across five linked analyses.",

  approach:
    "The analysis was completed in ArcGIS Pro through a combination of preprocessing, terrain analysis, georeferencing, cost-distance modeling, overlay analysis, and parcel evaluation. First, core datasets such as the reserve boundary, roads, lakes, streams, and wildlife habitat sensitivity zones were projected and clipped to the study area. Then terrain and slope constraints were derived from a DEM, road and transmission access costs were modeled, legally and economically feasible land was intersected, and technically infeasible land was removed. In the final step, candidate parcels were digitized and compared using area, estimated capacity, annual generation, and cost per generation.<br><br><strong>Role:</strong> Individual academic project<br><strong>Timeframe:</strong> 2025<br><strong>Tools:</strong> ArcGIS Pro, raster analysis, vector analysis, georeferencing, overlay analysis, cost-distance analysis",

  results: [
    "Built a five-part suitability workflow linking technical, legal, and economic criteria",
    "Derived slope-based terrain constraints from DEM data and excluded land steeper than 10 degrees",
    "Modeled access costs for roads and transmission lines using distance accumulation rasters",
    "Identified truly possible land by combining feasible wildlife, cost, and engineering criteria",
    "Evaluated four candidate parcels using area, estimated capacity, annual generation, and cost per generation"
  ],

  embed: {
    enabled: false
  },

  materials: [
    {
      title: "Analysis 1 — Study Area and Constraint Preparation",
      desc: "This map introduces Saddle Lake and prepares the main vector layers used later in the workflow: reserve boundary, roads, lakes, streams, and wildlife habitat sensitivity zones. It shows the study area context and the legal or physical features that must be considered before siting a solar farm.",
      image: "images/project-2-a1.jpg",
      link: "images/project-2-a1.jpg",
      type: "lightbox"
    },
    {
      title: "Analysis 2 — Terrain and Slope Constraints",
      desc: "Using DEM-derived terrain products, this analysis identifies steep land that would be difficult or unsuitable for solar farm construction. The map highlights slopes greater than 10 degrees, which were later removed from consideration as technically infeasible land.",
      image: "images/project-2-a2.jpg",
      link: "images/project-2-a2.jpg",
      type: "lightbox"
    },
    {
      title: "Analysis 3 — Road and Transmission Access Costs",
      desc: "This map represents the relative cost of extending roads and transmission lines across the reserve. Areas closer to existing infrastructure are more economical, while remote areas show higher access costs. This step adds an economic lens to the suitability workflow.",
      image: "images/project-2-a3.jpg",
      link: "images/project-2-a3.jpg",
      type: "lightbox"
    },
    {
      title: "Analysis 4 — Truly Possible Land",
      desc: "This map shows the land that remains after combining legal, economic, and technical filters. Low-to-moderate wildlife sensitivity areas and lower-cost areas were retained, then roads, water features, setbacks, and steep slopes were removed to reveal land that is more realistically developable.",
      image: "images/project-2-a4.jpg",
      link: "images/project-2-a4.jpg",
      type: "lightbox"
    },
    {
      title: "Analysis 5 — Potential Sites",
      desc: "The final analysis identifies four candidate parcels for further exploration. Each parcel was evaluated using area, estimated generating capacity, annual generation, access cost, and cost per generation. This map shifts from suitability screening to site comparison and decision support.",
      image: "images/project-2-a5.jpg",
      link: "images/project-2-a5.jpg",
      type: "lightbox"
    },
    {
      title: "Suitability framework",
      desc: "Overview of the suitability framework, including theoretical, technical, legal, and economic dimensions used to narrow land toward potential sites.",
      link: "project-2/1_SiteAnalysisOverview_GIS.pdf"
    }
  ],

  backLink: "index.html#portfolio"
};