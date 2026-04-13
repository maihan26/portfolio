// =========================================================
// SHARED HOMEPAGE SCRIPT
// ---------------------------------------------------------
// This file renders navigation, hero, about, portfolio,
// and footer content from data.js.
// =========================================================

// Update the browser tab title and page description
function setSiteMeta() {
  document.title = siteData.site.title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', siteData.site.description);
  }
}

// Check whether a link is external
function isHttpLink(href) {
  return /^https?:/i.test(href);
}

// Add target and rel attributes only for external links
function getLinkAttrs(href) {
  return isHttpLink(href) ? ' target="_blank" rel="noopener noreferrer"' : '';
}

// Build the top navigation from data.js
function createNav() {
  const navList = document.getElementById('nav-list');
  if (!navList) return;

  navList.innerHTML = siteData.navigation.map(item => `
    <li><a href="${item.href}">${item.label}</a></li>
  `).join('');
}

// Render the hero text and action links
function renderHero() {
  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');
  const heroButtons = document.getElementById('hero-buttons');
  if (!heroTitle || !heroSubtitle || !heroButtons) return;

  heroTitle.textContent = siteData.hero.title;
  heroSubtitle.innerHTML = siteData.hero.subtitle;

  heroButtons.innerHTML = siteData.hero.buttons.map(button => `
    <a href="${button.href}" class="${button.className}"${getLinkAttrs(button.href)}>${button.label}</a>
  `).join('');
}

// Render the About section
function renderAbout() {
  const aboutImage = document.getElementById('about-image');
  const aboutContent = document.getElementById('about-content');
  if (!aboutImage || !aboutContent) return;

  const about = siteData.about;
  aboutImage.src = about.image;
  aboutImage.alt = about.imageAlt;

  aboutContent.innerHTML = `
    <p class="subtitle">${about.subtitle}</p>
    <h3>${about.title}</h3>
    <p class="about-copy">${about.text}</p>
    <ul class="list-checkmarks">
      ${about.highlights.map(item => `<li>${item}</li>`).join('')}
    </ul>
    <div class="about-actions">
      <a href="${about.readMoreHref}" class="button-1">${about.readMoreLabel}</a>
      <a href="${about.resumeHref}" class="button-2">${about.resumeLabel}</a>
    </div>
  `;
}

// Render the filter row and project cards
function renderPortfolio() {
  const section = siteData.portfolio;
  const subtitle = document.getElementById('portfolio-subtitle');
  const title = document.getElementById('portfolio-title');
  const filters = document.getElementById('portfolio-filters');
  const list = document.getElementById('portfolio-list');
  if (!subtitle || !title || !filters || !list) return;

  subtitle.textContent = section.subtitle;
  title.textContent = section.title;

  let activeFilter = 'All';

  function renderFilters() {
    filters.innerHTML = section.filters.map(filter => `
      <button class="filter-chip ${filter === activeFilter ? 'is-active' : ''}" data-filter="${filter}">${filter}</button>
    `).join('');

    filters.querySelectorAll('.filter-chip').forEach(button => {
      button.addEventListener('click', () => {
        activeFilter = button.dataset.filter;
        renderFilters();
        renderCards();
      });
    });
  }

  function renderCards() {
    const items = activeFilter === 'All'
      ? section.items
      : section.items.filter(item => item.tags.includes(activeFilter));

    list.innerHTML = items.map(item => `
      <li class="portfolio-card">
        <a class="portfolio-thumb" href="${item.href}"${getLinkAttrs(item.href)}>
          <img src="${item.thumb}" alt="${item.alt}" />
          <span class="portfolio-overlay"><span class="more-link">More</span></span>
        </a>
        <div class="portfolio-card-body">
          <h6 class="portfolio-card-title">
            <a href="${item.href}" class="title-link"${getLinkAttrs(item.href)}>${item.title}</a>
          </h6>
          <p class="portfolio-card-text">${item.text}</p>
          <div class="project-tags">
            ${item.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
          </div>
        </div>
      </li>
    `).join('');
  }

  renderFilters();
  renderCards();
}

// Render footer text and links
function renderFooter() {
  const footerTagline = document.getElementById('footer-tagline');
  const footerLinks = document.getElementById('footer-links');
  if (!footerTagline || !footerLinks) return;

  footerTagline.textContent = siteData.footer.tagline;
  footerLinks.innerHTML = siteData.footer.links.map(link => `
    <a href="${link.href}" class="footer-link"${getLinkAttrs(link.href)}>${link.label}</a>
  `).join('');
}

// Initialize everything on page load
function initSite() {
  setSiteMeta();
  createNav();
  renderHero();
  renderAbout();
  renderPortfolio();
  renderFooter();
}

document.addEventListener('DOMContentLoaded', initSite);
