// const projectData = {
//   pageTitle: "Project | Han Nguyen",
//   pageDescription: "Project page for Han Nguyen",

//   title: "Project title",
//   subtitle: "Short summary of the project and why it matters.",

//   tags: ["GIS", "Remote Sensing"],

//   heroImage: {
//     src: "images/project-1-thumb.jpg",
//     alt: "Project thumbnail"
//   },

//   intro:
//     "Brief context. What is the project about, and why does it matter?",

//   approach:
//     "Brief method. Keep it short and scan-friendly.<br><br><strong>Role:</strong> Your role<br><strong>Timeframe:</strong> 2025<br><strong>Tools:</strong> Python, ArcGIS Pro, Folium",

//   results: [
//     "Key result one.",
//     "Key result two.",
//     "Key result three."
//   ],
// //Full project set embed.enabled: false - use materials like poster, storymap, workflow, code 
// // Projects with interactive map, enabled: true and change src: to ext link
//   embed: {
//     enabled: false,
//     title: "Interactive map",
//     description: "Explore the live map directly on this page.",
//     src: "maps/project-map.html"
//   },
// // Static map only: no embed
// // use a card with type: "lightbox"
// // ext map/tableau/github code use type: "external"
//   materials: [
//     {
//       title: "Poster",
//       desc: "Visual summary of the project question, methods, and findings.",
//       image: "images/project-1.jpg",
//       link: "images/project-1.jpg",
//       type: "lightbox"
//     },
//     {
//       title: "StoryMap",
//       desc: "Narrative version with maps, visuals, and interpretation.",
//       image: "images/project-1-thumb.jpg",
//       link: "#",
//       type: "external"
//     },
//     {
//       title: "Workflow",
//       desc: "Step-by-step analysis workflow.",
//       image: "images/project-1-thumb.jpg",
//       link: "#",
//       type: "lightbox"
//     },
//     {
//       title: "Code",
//       desc: "Scripts and processing logic used for the analysis.",
//       image: "images/project-1-thumb.jpg",
//       link: "#",
//       type: "external"
//     }
//   ],

//   backLink: "index.html#portfolio"
// };

// function setProjectMeta() {
//   document.title = projectData.pageTitle || "Project | Han Nguyen";
//   const metaDescription = document.querySelector('meta[name="description"]');
//   if (metaDescription && projectData.pageDescription) {
//     metaDescription.setAttribute("content", projectData.pageDescription);
//   }
// }

// function renderMaterialAction(item) {
//   if (item.type === "lightbox") {
//     return `<button class="text-link project-lightbox-trigger" data-image="${item.link}" data-title="${item.title}">View</button>`;
//   }

//   return `<a href="${item.link}" class="text-link" target="_blank" rel="noopener noreferrer">View</a>`;
// }

// function renderEmbedSection() {
//   if (!projectData.embed || !projectData.embed.enabled) return "";

//   return `
//     <section class="project-embed-section">
//       <div class="project-materials-header">
//         <p class="subtitle">Interactive</p>
//         <h4>${projectData.embed.title}</h4>
//       </div>

//       <div class="project-embed-card">
//         <iframe src="${projectData.embed.src}" title="${projectData.embed.title}" loading="lazy"></iframe>
//         <div class="project-embed-body">
//           <p>${projectData.embed.description || ""}</p>
//         </div>
//       </div>
//     </section>
//   `;
// }

// function renderProject() {
//   const container = document.getElementById("project-page");
//   if (!container) return;

//   setProjectMeta();

//   container.innerHTML = `
//     <article class="project-entry">
//       <div class="project-heading">
//         <p class="subtitle">Project</p>
//         <h2>${projectData.title}</h2>
//         <p class="project-subtitle">${projectData.subtitle}</p>
//         <div class="project-tags">
//           ${projectData.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("")}
//         </div>
//       </div>

//       <section class="project-story-grid">
//         <div class="project-story-media">
//           <div class="project-thumb-card">
//             <img src="${projectData.heroImage.src}" alt="${projectData.heroImage.alt}">
//           </div>
//         </div>

//         <div class="project-story-copy">
//           <section class="project-copy-block">
//             <h4>Introduction</h4>
//             <p>${projectData.intro}</p>
//           </section>

//           <section class="project-copy-block">
//             <h4>Approach</h4>
//             <p>${projectData.approach}</p>
//           </section>

//           <section class="project-copy-block">
//             <h4>Results</h4>
//             <ul class="project-result-list">
//               ${projectData.results.map(item => `<li>${item}</li>`).join("")}
//             </ul>
//           </section>
//         </div>
//       </section>

//       ${renderEmbedSection()}

//       <section class="project-materials-section">
//         <div class="project-materials-header">
//           <p class="subtitle">Further reading</p>
//           <h4>Project materials</h4>
//         </div>

//         <div class="project-materials-grid">
//           ${projectData.materials.map(item => `
//             <article class="project-material-card">
//               <div class="project-material-image">
//                 <img src="${item.image}" alt="${item.title}">
//               </div>
//               <div class="project-material-body">
//                 <h6>${item.title}</h6>
//                 <p>${item.desc}</p>
//                 ${renderMaterialAction(item)}
//               </div>
//             </article>
//           `).join("")}
//         </div>
//       </section>

//       <div class="project-back-row">
//         <a href="${projectData.backLink}" class="button-2">Back to Portfolio</a>
//       </div>
//     </article>

//     <div class="project-lightbox" id="project-lightbox" aria-hidden="true">
//       <div class="project-lightbox-backdrop"></div>
//       <div class="project-lightbox-dialog" role="dialog" aria-modal="true" aria-label="Image preview">
//         <button class="project-lightbox-close" id="project-lightbox-close" aria-label="Close preview">×</button>
//         <img id="project-lightbox-image" src="" alt="">
//       </div>
//     </div>
//   `;

//   setupLightbox();
// }

// function setupLightbox() {
//   const triggers = document.querySelectorAll(".project-lightbox-trigger");
//   const lightbox = document.getElementById("project-lightbox");
//   const lightboxImage = document.getElementById("project-lightbox-image");
//   const closeButton = document.getElementById("project-lightbox-close");
//   const backdrop = lightbox?.querySelector(".project-lightbox-backdrop");

//   if (!lightbox || !lightboxImage || !closeButton || !backdrop) return;

//   function openLightbox(src, title) {
//     lightboxImage.src = src;
//     lightboxImage.alt = title || "Preview image";
//     lightbox.classList.add("is-open");
//     lightbox.setAttribute("aria-hidden", "false");
//     document.body.classList.add("lightbox-open");
//   }

//   function closeLightbox() {
//     lightbox.classList.remove("is-open");
//     lightbox.setAttribute("aria-hidden", "true");
//     lightboxImage.src = "";
//     document.body.classList.remove("lightbox-open");
//   }

//   triggers.forEach(trigger => {
//     trigger.addEventListener("click", () => {
//       openLightbox(trigger.dataset.image, trigger.dataset.title);
//     });
//   });

//   closeButton.addEventListener("click", closeLightbox);
//   backdrop.addEventListener("click", closeLightbox);

//   document.addEventListener("keydown", (event) => {
//     if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
//       closeLightbox();
//     }
//   });
// }

// document.addEventListener("DOMContentLoaded", renderProject);

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

function renderMaterials() {
  if (!projectData.materials || !projectData.materials.length) return "";

  return `
    <section class="project-materials-section">
      <div class="project-materials-header">
        <p class="subtitle">Further reading</p>
        <h4>Project materials</h4>
      </div>

      <div class="project-materials-grid">
        ${projectData.materials.map(item => {
          const hasImage = item.image && item.image.trim() !== "";

          if (!hasImage) {
            return `
              <article class="project-material-textonly">
                <h6>${item.title}</h6>
                <p>${item.desc}</p>
                <a href="${item.link}" class="text-link" target="_blank" rel="noopener noreferrer">
                  ${item.title} →
                </a>
              </article>
            `;
          }

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
  `;
}

function renderProject() {
  const container = document.getElementById("project-page");
  if (!container || typeof projectData === "undefined") return;

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
      ${renderMaterials()}

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