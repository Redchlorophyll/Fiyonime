function animeCard(arrayName, data, parent) {
  let animeCardHtml = ``;
  data[arrayName].forEach(data => {
    animecardHtml += `
      <a class="anime-link" href="detail.html?mal_id=${data.id}">
        <div class="anime">
          <div class="wrapper">
            <img src="${data.image_url}" alt="">
            <div class="anime-title">
              <span> ${data.title} </span>
            </div>
          </div>
        </div>
      </a>
    `;
  });

  document.getElementById(parent).innerHtml = animeCardHtml;
}

export default animeCard;
