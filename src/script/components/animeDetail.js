export function animeDetailPage(json) {
  //update image cover
  document.getElementById("image-cover").src = json.image_url;


  //update detail title
  document.getElementById("title").innerText = json.title;
  document.getElementById("title-en").innerText = json.title_english;

  //update leaderboard
  document.getElementById("score").innerText = json.score;
  document.getElementById("user-score").innerText = `${json.scored_by} user`;
  document.getElementById("rank").innerText = `#${json.rank}`;
  document.getElementById("popularity").innerText = `#${json.popularity}`;

  //info card
  document.getElementById("type").innerText = json.type;
  document.getElementById("studio").innerText = json.studios[0].name;

  let status
  if (json.status == "Currently Airing") {
    status = "Ongoing";
  } else {
    status = "Finished";
  }

  document.getElementById("status").innerText = status;
  document.getElementById("total-eps").innerText = json.episodes;
}

export function detailContent(json) {
  const synonims = json.title_synonyms;
  const genres = json.genres;
  let synonimDetails = "";


  for (let n in synonims) {
    if(n != synonims.length -1) {
      synonimDetails += `${synonims[n]}, `;
    } else {
      synonimDetails += `${synonims[n]}.`;
    }
  }

  for (let n in genres) {

  }

  const detail = `
    <div class="info-wrapper">
      <div class="video-container">
        <iframe src="${json.trailer_url}"></iframe>
      </div>
      <div class="info-container">
        <h2>Synopsis:</h2>
        <p>${json.synopsis}</p>
        <h2>Background:</h2>
        <p>${json.background}</p>
      </div>
      <div class="eps-container">
        <div class="title-container">
          <h2>Epsiodes:</h2>
          <p>watch on MyAnimeList</p>
        </div>
        <div class="epsiode-wrapper">
          <div class="episodes">
            <div class="eps-card">
              <div class="grid-wrapper">
                <div class="eps-number">
                  <span>#1</span>
                </div>
                <div class="eps-title">
                  <span>Mugen train Mugen train Mugen train Mugen train</span>
                </div>
              </div>
            </div>
            <div class="eps-card">
              <div class="grid-wrapper">
                <div class="eps-number">
                  <span>#2</span>
                </div>
                <div class="eps-title">
                  <span>Assassins Bullet</span>
                </div>
              </div>
            </div>
            <div class="eps-card">
              <div class="grid-wrapper">
                <div class="eps-number">
                  <span>#3</span>
                </div>
                <div class="eps-title">
                  <span>Mugen train</span>
                </div>
              </div>
            </div>
            <div class="eps-card">
              <div class="grid-wrapper">
                <div class="eps-number">
                  <span>#4</span>
                </div>
                <div class="eps-title">
                  <span>Mugen train</span>
                </div>
              </div>
            </div>
            <div class="eps-card">
              <div class="grid-wrapper">
                <div class="eps-number">
                  <span>#5</span>
                </div>
                <div class="eps-title">
                  <span>Mugen train</span>
                </div>
              </div>
            </div>
            <div class="see-more">
              <div class="grid-wrapper">
                <span>SEE MORE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="info-container">
        <h2>Related Anime:</h2>
        <div class="info">
          <div class="info-title">
            <span>Adaptation</span>
          </div>
          <div class="info-content">
            <a href="#">Shingeki no Kyojin</a>,
            <a href="#">Shingeki no Kyojin</a>,
            <a href="#">Shingeki no Kyojin</a>,
          </div>
        </div>
        <div class="info">
          <div class="info-title">
            <span>Prequel</span>
          </div>
          <div class="info-content">
            <a href="#">Shingeki no Kyojin</a>,
            <a href="#">Shingeki no Kyojin</a>,
            <a href="#">Shingeki no Kyojin</a>,
          </div>
        </div>
        <h2>Soundtrack</h2>
        <div class="info">
          <div class="info-title">
            <span>Opening</span>
          </div>
          <div class="info-content">
            <ul>
              <li>opening1</li>
              <li>opening1</li>
              <li>opening1</li>
              <li>opening1</li>

            </ul>
          </div>
        </div>
        <div class="info">
          <div class="info-title">
            <span>Ending</span>
          </div>
          <div class="info-content">
            <ul>
              <li>opening1</li>
              <li>opening1</li>
              <li>opening1</li>
              <li>opening1</li>
              <li>opening1</li>
            </ul>
          </div>
        </div>
        <h2>More</h2>
        <div class="info more">
          <div class="info-title">
            <span>Title (English)</span>
          </div>
          <div class="info-content">
            <span>${json.title_english}</span>
          </div>
        </div>
        <div class="info more">
          <div class="info-title">
            <span>Title (japan)</span>
          </div>
          <div class="info-content">
            <span>${json.title_japanese}</span>
          </div>
        </div>
        <div class="info more">
          <div class="info-title">
            <span>Synonim</span>
          </div>
          <div class="info-content">
            <span>${synonimDetails}</span>
          </div>
        </div>
        <div class="info more">
          <div class="info-title">
            <span>Type</span>
          </div>
          <div class="info-content">
            <span>${json.type}</span>
          </div>
        </div>
        <div class="info more">
          <div class="info-title">
            <span>episodes</span>
          </div>
          <div class="info-content">
            <span>${json.episodes}</span>
          </div>
        </div>
        <div class="info more">
          <div class="info-title">
            <span>status</span>
          </div>
          <div class="info-content">
            <span>${json.status}</span>
          </div>
        </div>
        <div class="info more">
          <div class="info-title">
            <span>aired</span>
          </div>
          <div class="info-content">
            <span>agnaw</span>
          </div>
        </div>
        <div class="info more">
          <div class="info-title">
            <span>premiered</span>
          </div>
          <div class="info-content">
            <span>${json.premiered}</span>
          </div>
        </div>
        <div class="info more">
          <div class="info-title">
            <span>broadcast</span>
          </div>
          <div class="info-content">
            <span>agnaw</span>
          </div>
        </div>
        <div class="info more">
          <div class="info-title">
            <span>producers</span>
          </div>
          <div class="info-content">
            <span>agnaw</span>
          </div>
        </div>
        <div class="info more">
          <div class="info-title">
            <span>licensor</span>
          </div>
          <div class="info-content">
            <span>agnaw</span>
          </div>
        </div>
        <div class="info more">
          <div class="info-title">
            <span>studios</span>
          </div>
          <div class="info-content">
            <span>agnaw</span>
          </div>
        </div>
        <div class="info more">
          <div class="info-title">
            <span>source</span>
          </div>
          <div class="info-content">
            <span>${json.source}</span>
          </div>
        </div>
        <div class="info more">
          <div class="info-title">
            <span>genres</span>
          </div>
          <div class="info-content">
            <span>agnaw</span>
          </div>
        </div>
        <div class="info more">
          <div class="info-title">
            <span>duration</span>
          </div>
          <div class="info-content">
            <span>${json.duration}</span>
          </div>
        </div>
        <div class="info more">
          <div class="info-title">
            <span>rating</span>
          </div>
          <div class="info-content">
            <span>${json.rating}</span>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById("container").innerHTML = detail;
}
