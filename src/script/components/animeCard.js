export function animeCard(arrayName, data, parent) {
  let animeCardHtml = ``;
  // console.log(`arrayName: ${arrayName}, parent:${parent}`);

  for (let [index, anime] of data[arrayName.toLowerCase()].entries()) {
    if(index < 11) {
      animeCardHtml += `
        <a class="anime-link" href="detail.html?mal_id=${anime.mal_id}&detail=content">
          <div class="anime">
            <div class="wrapper">
              <img src="${anime.image_url}" alt="">
              <div class="anime-title">
                <span> ${anime.title} </span>
              </div>
            </div>
          </div>
        </a>`;
    } else {
        animeCardHtml += `
        <div class="show-more">
          <span>
            <h1>SHOW MORE</h1>
          </span>
        </div>`;

        break;
    }
  }

  document.getElementById(parent).innerHTML = animeCardHtml;
}


// export default animeCard() {}
