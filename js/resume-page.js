// =========================================================
// RESUME PAGE RENDERER
// ---------------------------------------------------------
// Reads resumeData from resume.js and builds the resume page.
// =========================================================

// Return a linked label if a URL exists. Otherwise return plain text.
function maybeLink(label, url) {
  if (!label) return '';
  if (!url) return label;
  return `<a href="${url}" class="title-link" target="_blank" rel="noopener noreferrer">${label}</a>`;
}

// Build one resume section card with multiple items inside.
function renderResumeSection(section) {
  return `
    <section class="resume-block">
      <h4>${section.sectionTitle}</h4>
      ${section.items.map(item => `
        <article class="resume-item">
          <div class="resume-role">${item.title || ''}</div>

          ${(item.org || item.orgUrl || item.year)
            ? `<div class="resume-org">${maybeLink(item.org || '', item.orgUrl || '')}${item.year ? ` (${item.year})` : ''}</div>`
            : ''}

          ${item.period ? `<div class="resume-meta">${item.period}</div>` : ''}
          ${item.location ? `<div class="resume-meta">${item.location}</div>` : ''}
          ${item.text ? `<p>${item.text}</p>` : ''}
          ${item.note ? `<p class="resume-note">${item.note}</p>` : ''}
          ${item.image ? `<img src="${item.image}" class="resume-image" alt="${item.title}">` : ""}
        </article>
      `).join('')}
    </section>
  `;
}

// Render the page header and both columns.
function renderResumePage() {
  document.title = resumeData.site.title;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', resumeData.site.description);
  }

  const subtitle = document.getElementById('resume-subtitle');
  const title = document.getElementById('resume-title');
  const summary = document.getElementById('resume-summary');
  const leftColumn = document.getElementById('resume-left-column');
  const rightColumn = document.getElementById('resume-right-column');

  if (!subtitle || !title || !summary || !leftColumn || !rightColumn) return;

  subtitle.textContent = resumeData.header.subtitle;
  title.textContent = resumeData.header.title;
  summary.textContent = resumeData.header.summary;

  leftColumn.innerHTML = resumeData.leftColumn.map(renderResumeSection).join('');
  rightColumn.innerHTML = resumeData.rightColumn.map(renderResumeSection).join('');
}

document.addEventListener('DOMContentLoaded', renderResumePage);
