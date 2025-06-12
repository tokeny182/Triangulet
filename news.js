function createNewsContainer(articles) {
    const newsContainer = document.createElement('div');
    newsContainer.className = "styles__container___3LSgB-camelCase";
    newsContainer.style.transform = "translateX(0%)";
    newsContainer.style.opacity = "1";
    newsContainer.style.transition = "transform 0.3s ease-in-out";

    const header = document.createElement('div');
    header.className = "styles__header___2O21B-camelCase";
    header.style.color = "white";

    header.innerHTML = `
      <i class="far fa-newspaper styles__newsIcon___1Gixg-camelCase" aria-hidden="true"></i>
      <div class="styles__headerText___1RCjc-camelCase" style="color: white;">Triangulet</div>
      <div class="styles__newsText___14273-camelCase" style="color: white;">News</div>
      <i class="fas fa-times styles__closeIcon___16coI-camelCase" role="button" tabindex="0" aria-hidden="true"></i>
    `;

    const postsContainer = document.createElement('div');
    postsContainer.className = "styles__postsContainer___39_IQ-camelCase";

    articles.forEach(article => {
      const cardContainer = document.createElement('div');
      cardContainer.className = "styles__cardContainer___NGmjp-camelCase";

      let contentHTML = `
        <div class="styles__header___kLT5x-camelCase" style="color: white;">${article.title}</div>
      `;

      if (article.video) {
        contentHTML += `<embed width="330" height="190" src="${article.video}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="">`;
      }

      if (article.imageURL) {
        contentHTML += `<img loading="lazy" src="${article.imageURL}" onerror="this.remove()" style="border-radius:5px;max-width:100%;max-height:100%;" class="styles__image___2uoLV-camelCase" draggable="false">`;
      }

      let textContent = `<div class="styles__text___1L6DW-camelCase">`;
      const paragraphs = article.text.split('\n');

      paragraphs.forEach(para => {
          let processedPara = para;
          if (article.link && para.includes(article.link)) {
              processedPara = para.replace(article.link, `<a href="${article.link}">${article.link}</a>`);
          } else if (article.link && para.trim() === "") {
              processedPara = `<a href="${article.link}">${article.link}</a>`;
          }
          if (article.discordLink && para.includes("Discord Server")) {
              processedPara = para.replace("Discord Server", `<a href="${article.discordLink}" style="color: white;">Discord Server</a>`);
          }
          textContent += `<div style="color: white !important;">${processedPara}</div>`;
      });

      if (article.link && !article.text.includes(article.link)) {
          textContent += `<a href="${article.link}" style="color: white !important; display: block; margin: 5px 0;">${article.link}</a>`;
      }

      textContent += `</div>`;
      contentHTML += textContent;

      contentHTML += `
        <div class="styles__dateRow___1jkQT-camelCase" style="color: white;">
          <i class="far fa-calendar-alt" style="margin-right: 0.365vw;" aria-hidden="true"></i>
          ${new Date(article.date).toLocaleDateString("en-US",{
            year: "numeric",
            month: "long",
            day: "numeric",})}
        </div>
      `;

      cardContainer.innerHTML = contentHTML;
      postsContainer.appendChild(cardContainer);
    });

    newsContainer.appendChild(header);
    newsContainer.appendChild(postsContainer);

    return newsContainer;
}

async function getNewsArticles() {
  const res = await fetch("/news.json");
  const data = await res.json();
  return data.news;
}

document.addEventListener("DOMContentLoaded", startNews);

function startNews() {
  const newsElem = document.createElement("div");
  document.body.appendChild(newsElem);
  getNewsArticles().then(articles => {
    newsElem.appendChild(createNewsContainer(articles));

    const initialNewsContainer = document.querySelector('.styles__container___3LSgB-camelCase');
    if (initialNewsContainer) {
      initialNewsContainer.style.transform = "translateX(0%)";
    }

    document.addEventListener('click', function(event) {
      if (event.target.classList.contains('styles__closeIcon___16coI-camelCase')) {
        const parentContainer = event.target.closest('.styles__container___3LSgB-camelCase');
        if (parentContainer) {
          parentContainer.style.transform = "translateX(100%)";
        }
      }
    });

    document.addEventListener('click', function(event) {
      const newsButton = document.getElementById('newsbutton');
      if (newsButton && (event.target === newsButton || newsButton.contains(event.target))) {
        const newsContainer = document.querySelector('.styles__container___3LSgB-camelCase');
        if (newsContainer) {
          if (newsContainer.style.transform === "translateX(0%)") {
            newsContainer.style.transform = "translateX(-100%)";
          } else {
            newsContainer.style.transform = "translateX(0%)";
          }
        }
      }
    });
  });
}
