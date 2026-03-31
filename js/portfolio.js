function renderPortfolioProjects(projectList) {
  const container = document.getElementById("portfolio-list");
  if (!container) return;

  container.innerHTML = projectList.map(project => `
    <li>
      <a href="project.html?slug=${project.slug}">
        <img src="${project.thumbnail}" alt="${project.title}">
      </a>

      <div class="portfolio-card-content">
        <p class="subtitle">${project.category} • ${project.year}</p>
        <h5>${project.title}</h5>
        <p>${project.subtitle}</p>
        <div class="button-wrap">
          <a href="project.html?slug=${project.slug}" class="button-1">Project Page</a>
        </div>
      </div>
    </li>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderPortfolioProjects(projects);
});