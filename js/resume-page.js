function renderBullets(items = []) {
  if (!items.length) return "";
  return `
    <ul>
      ${items.map(item => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function renderHighlights(items = []) {
  if (!items.length) return "";

  return `
    <div class="resume-highlights-grid">
      ${items.map(item => `
        <div class="resume-highlight-card">
          <h5>${item.title || ""}</h5>
          ${item.period ? `<div class="resume-meta">${item.period}</div>` : ""}
          <p>${item.text || ""}</p>
        </div>
      `).join("")}
    </div>
  `;
}

function renderEducation(items = []) {
  if (!items.length) return "<p>No education added yet.</p>";

  return items.map(item => `
    <div class="resume-item">
      <div class="resume-role-line">${item.degree || ""}</div>
      <div class="resume-org-line">${item.school || ""}${item.location ? ` • ${item.location}` : ""}</div>
      <div class="resume-meta">${item.period || ""}</div>
      <p>${item.details || ""}</p>
    </div>
  `).join("");
}

function renderExperience(items = []) {
  if (!items.length) return "<p>No experience added yet.</p>";

  return items.map(item => `
    <div class="resume-item">
      <div class="resume-role-line">${item.role || ""}</div>
      <div class="resume-org-line">${item.company || ""}${item.location ? ` • ${item.location}` : ""}</div>
      <div class="resume-meta">${item.period || ""}</div>
      ${Array.isArray(item.details) ? renderBullets(item.details) : `<p>${item.details || ""}</p>`}
    </div>
  `).join("");
}

function renderTextBlocks(items = []) {
  if (!items.length) return ""; 

  return items.map(item => `
    <div class="resume-item">
      <div class="resume-role-line">${item.title || ""}</div>
      ${item.period ? `<div class="resume-meta">${item.period}</div>` : ""}
      <p>${item.text || ""}</p>
    </div>
  `).join("");
}

function renderResumePage(data) {
  const root = document.getElementById("resume-page");
  if (!root || !data) return;

 root.innerHTML = `
    <div class="resume-stack">
<section class="text-section">
  <div class="wrapper">
    <div class="resume-intro-card">
      <p class="subtitle">${data.subtitle}</p>
            ${
              data.download
                ? `<div class="buttons">
                    <a href="${data.download.href}" class="button-1">${data.download.label}</a>
                   </div>`
                : ""
            }
          </div>
        </div>
      </section>

      <section class="text-section">
        <div class="wrapper">
          <div class="resume-section-card">


        </div>
      </section>

      <section class="text-section">
        <div class="wrapper">
          <div class="resume-section-card">

            <h4>Education</h4>
            ${renderEducation(data.education)}
          </div>
        </div>
      </section>

      <section class="text-section">
        <div class="wrapper">
          <div class="resume-section-card">

            <h4>Experience</h4>
            ${renderExperience(data.experience)}
          </div>
        </div>
      </section>

      <section class="text-section">
        <div class="wrapper">
          <div class="resume-section-card">

        </div>
      </section>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderResumePage(resumeData);
});