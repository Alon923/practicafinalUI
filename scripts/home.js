function escapeHtml(value) {
  const element = document.createElement("div");
  element.textContent = value;
  return element.innerHTML;
}

function articleUrl(article) {
  return `noticias.html?id=${encodeURIComponent(article.id)}`;
}

const featured = articles.find((article) => article.featured) || articles[0];
const remaining = articles.filter((article) => article.id !== featured.id);

const tickerTitle = document.querySelector("#ticker-title");
if (tickerTitle) {
  tickerTitle.textContent = featured.title;
}

const featuredStory = document.querySelector("#featured-story");
if (featuredStory) {
  featuredStory.innerHTML = `
    <p class="section-label">PORTADA DE JUEGOS</p>
    <a class="image-link" href="${articleUrl(featured)}">
      <div class="hero-image image-frame">
        <img src="${escapeHtml(featured.image)}" alt="${escapeHtml(featured.imageAlt)}" />
        <span class="image-tag">RESEÑA DE JUEGO</span>
      </div>
    </a>
    <p class="section-label">${escapeHtml(featured.kicker)}</p>
    <h1>${escapeHtml(featured.title)}</h1>
    <p class="summary">${escapeHtml(featured.summary)}</p>
    <p class="byline">Por ${escapeHtml(featured.author)} · ${escapeHtml(featured.readingTime)} de lectura <span>♧</span></p>
  `;
}

const rail = document.querySelector("#news-rail");
if (rail) {
  rail.innerHTML = remaining.slice(0, 3).map((article) => `
    <article class="rail-story">
      <a href="${articleUrl(article)}">
        <p class="metadata">${escapeHtml(article.minutesAgo)} <b>${escapeHtml(article.category)}</b></p>
        <h3>${escapeHtml(article.title)}</h3>
      </a>
    </article>
  `).join("");
}

const articleGrid = document.querySelector("#article-grid");
if (articleGrid) {
  articleGrid.innerHTML = articles.map((article) => `
    <article class="game-card">
      <a class="image-link" href="${articleUrl(article)}">
        <div class="card-image image-frame">
          <img src="${escapeHtml(article.image)}" alt="${escapeHtml(article.imageAlt)}" />
        </div>
      </a>
      <p class="section-label">${escapeHtml(article.category)}</p>
      <h3><a href="${articleUrl(article)}">${escapeHtml(article.title)}</a></h3>
      <p>${escapeHtml(article.summary)}</p>
      <span class="byline">${escapeHtml(article.author)} · ${escapeHtml(article.readingTime)} de lectura ♧</span>
    </article>
  `).join("");
}

const weekend = articles.find((article) => article.weekend) || remaining[0];
const weekendFeature = document.querySelector("#weekend-feature");
if (weekendFeature) {
  weekendFeature.innerHTML = `
    <div class="split-copy">
      <p class="section-label">LA JUGADA DEL FIN DE SEMANA</p>
      <h2>${escapeHtml(weekend.title)}</h2>
      <p>${escapeHtml(weekend.summary)}</p>
      <span class="byline">Por ${escapeHtml(weekend.author)} · ${escapeHtml(weekend.readingTime)} de lectura</span>
      <a class="more-link" href="${articleUrl(weekend)}">Leer la historia&nbsp; →</a>
    </div>
    <div class="split-image image-frame">
      <img src="${escapeHtml(weekend.image)}" alt="${escapeHtml(weekend.imageAlt)}" />
    </div>
  `;
}
