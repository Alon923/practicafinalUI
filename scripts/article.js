function escapeHtml(value) {
  const element = document.createElement("div");
  element.textContent = value;
  return element.innerHTML;
}

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const article = articles.find((item) => item.id === id);

const articleContent = document.querySelector("#article-content");
const pageTitle = document.querySelector("#article-title");
const notFound = document.querySelector("#article-not-found");

if (!article) {
  if (articleContent) articleContent.hidden = true;
  if (notFound) notFound.hidden = false;
  document.title = "Artículo no encontrado · the netgame";
} else {
  document.title = `${article.title} · the netgame`;

  const title = document.querySelector("#article-page-title");
  const category = document.querySelector("#article-category");
  const summary = document.querySelector("#article-summary");
  const author = document.querySelector("#article-author");
  const readingTime = document.querySelector("#article-reading-time");
  const date = document.querySelector("#article-date");
  const image = document.querySelector("#article-image");
  const body = document.querySelector("#article-body");
  const related = document.querySelector("#related-articles");

  if (title) title.textContent = article.title;
  if (pageTitle) pageTitle.textContent = article.title;
  if (category) category.textContent = article.category;
  if (summary) summary.textContent = article.summary;
  if (author) author.textContent = `Por ${article.author}`;
  if (readingTime) readingTime.textContent = `${article.readingTime} de lectura`;
  if (date) date.textContent = article.date;
  if (image) {
    image.src = article.image;
    image.alt = article.imageAlt;
  }

  if (body) {
    body.innerHTML = article.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
  }

  if (related) {
    related.innerHTML = articles
      .filter((item) => item.id !== article.id)
      .slice(0, 3)
      .map((item) => `
        <article class="game-card">
          <a class="image-link" href="noticias.html?id=${encodeURIComponent(item.id)}">
            <div class="card-image image-frame">
              <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.imageAlt)}" />
            </div>
          </a>
          <p class="section-label">${escapeHtml(item.category)}</p>
          <h3><a href="noticias.html?id=${encodeURIComponent(item.id)}">${escapeHtml(item.title)}</a></h3>
        </article>
      `).join("");
  }
}
