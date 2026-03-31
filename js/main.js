function setSiteMeta() {
  document.title = siteData.site.title;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && siteData.site.description) {
    metaDescription.setAttribute("content", siteData.site.description);
  }
}

function isHttpLink(href) {
  return /^https?:/i.test(href);
}

function getLinkAttrs(href) {
  return isHttpLink(href) ? ' target="_blank" rel="noopener noreferrer"' : "";
}

function createNav() {
  const navList = document.getElementById("nav-list");
  if (!navList) return;

  navList.innerHTML = siteData.navigation
    .map(
      (item) => `
        <li>
          <a href="${item.href}" ${item.isCta ? 'class="nav-cta"' : ""}${getLinkAttrs(item.href)}>${item.label}</a>
        </li>
      `
    )
    .join("");
}

function renderHero() {
  document.getElementById("hero-title").textContent = siteData.hero.title;
  document.getElementById("hero-subtitle").innerHTML = siteData.hero.subtitle;

  document.getElementById("hero-buttons").innerHTML = siteData.hero.buttons
    .map((button) => {
      const targetAttrs = /^https?:/i.test(button.href) ? ' target="_blank" rel="noopener noreferrer"' : "";
      return `<a href="${button.href}" class="${button.className}"${targetAttrs}>${button.label}</a>`;
    })
    .join("");
}

function renderAbout() {
  const aboutImage = document.getElementById("about-image");
  const aboutContent = document.getElementById("about-content");
  if (!aboutImage || !aboutContent) return;

  const about = siteData.about;
  aboutImage.src = about.image;
  aboutImage.alt = about.imageAlt;

  aboutContent.innerHTML = `
    <p class="subtitle">${about.subtitle}</p>
    <h3>${about.title}</h3>
    <p>${about.text}</p>
    <ul class="list-checkmarks">
      ${about.highlights.map((item) => `<li>${item}</li>`).join("")}
    </ul>
    <div class="about-actions">
      <a href="${about.readMoreHref}" class="button-1">${about.readMoreLabel}</a>
      <a href="${about.resumeHref}" class="button-2">${about.resumeLabel}</a>
    </div>
  `;
}

function renderServices() {
  const section = siteData.services;
  const subtitle = document.getElementById("services-subtitle");
  const title = document.getElementById("services-title");
  const list = document.getElementById("services-list");
  if (!subtitle || !title || !list) return;

  subtitle.textContent = section.subtitle;
  title.textContent = section.title;

  list.innerHTML = section.items
    .map(
      (item) => `
        <li>
          <div class="image-container">
            <img src="${item.icon}" alt="${item.title} icon" />
          </div>
          <h5>${item.title}</h5>
          <p>${item.text}</p>
          <a href="${item.linkHref}"${getLinkAttrs(item.linkHref)}>${item.linkLabel}</a>
        </li>
      `
    )
    .join("");
}

function renderPortfolio() {
  const section = siteData.portfolio;
  const subtitle = document.getElementById("portfolio-subtitle");
  const title = document.getElementById("portfolio-title");
  const list = document.getElementById("portfolio-list");
  if (!subtitle || !title || !list) return;

  subtitle.textContent = section.subtitle;
  title.textContent = section.title;

  list.innerHTML = section.items
    .map((item) => {
      const primaryLink = item.links?.find((link) => link.primary) || item.links?.[0] || { href: item.full, label: "View" };
      const linkButtons = (item.links || [])
        .map(
          (link, index) =>
            `<a href="${link.href}" class="${index === 0 ? "button-1" : "button-2"}"${getLinkAttrs(link.href)}>${link.label}</a>`
        )
        .join("");

      return `
        <li>
          <a href="${primaryLink.href}"${getLinkAttrs(primaryLink.href)}>
            <img src="${item.thumb}" alt="${item.alt}" />
          </a>
          <h6 class="portfolio-card-title"><a href="${primaryLink.href}"${getLinkAttrs(primaryLink.href)}>${item.title}</a></h6>
          ${item.meta ? `<p class="portfolio-card-text"><strong>${item.meta}</strong></p>` : ""}
          <p class="portfolio-card-text">${item.text}</p>
          <div class="portfolio-card-actions">${linkButtons}</div>
        </li>
      `;
    })
    .join("");
}

function renderFooter() {
  const footerName = document.getElementById("footer-name");
  const footerTagline = document.getElementById("footer-tagline");
  const footerLinks = document.getElementById("footer-links");
  if (!footerName || !footerTagline || !footerLinks) return;

  footerName.textContent = siteData.footer.name;
  footerTagline.textContent = siteData.footer.tagline;

  footerLinks.innerHTML = siteData.footer.links
  .map((link) => `
    <p>
      <a href="${link.href}"${getLinkAttrs(link.href)}>
        ${link.icon === "linkedin" 
          ? `<img src="images/linkedin.png" class="linkedin-icon">` 
          : ""} 
        ${link.label}
      </a>
    </p>
  `)
  .join("");
}

function initSite() {
  setSiteMeta();
  createNav();
  renderHero();
  renderAbout();
  renderServices();
  renderPortfolio();
  renderFooter();
}

document.addEventListener("DOMContentLoaded", initSite);
