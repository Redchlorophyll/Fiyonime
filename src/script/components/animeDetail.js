export function animeDetailPage(json) {
  const objectKeys = Object.keys(json);
  console.log(objectKeys)
  for (let key of objectKeys) {
    if (document.getElementById(key)) {
      if (key == "image_url") {
        let a = document.getElementById("image_url").src = json[key];
        console.log("gambar")
      } else if (key == "studios") {
        document.getElementById("studios").innerText = json[key][0].name;
        console.log("studio")
      } else {
        if (json[key]) {
          document.getElementById(key).innerText = json[key];
        } else {
          document.getElementById(key).innerText = "N/A";
        }
      }
    }
  }
}

export function detailContent(json) {
  const synonims = json.title_synonyms;
  const genres = json.genres;
  const licensors = json.licensors;
  const producers = json.producers;
  const studios = json.studios;
  const adaptations = json.adaptations;
  let genresDetails = "";
  let synonimDetails = "";
  let licensorDetails = "";
  let producerDetails = "";
  let studioDetails = "";
  let openingDetails = "";
  let endingDetails = "";

  for (let n in adaptations) {
    if(n != adaptations.length -1) {
      adaptationDetails += `${adaptations[n]}, `;
    } else {
      adaptationDetails += `${adaptations[n]}.`;
    }
  }

  for (let n in synonims) {
    if(n != synonims.length -1) {
      synonimDetails += `${synonims[n]}, `;
    } else {
      synonimDetails += `${synonims[n]}.`;
    }
  }

  for (let n in genres) {
    if(n != genres.length -1) {
      genresDetails += `${genres[n].name}, `;
    } else {
      genresDetails += `${genres[n].name}.`;
    }
  }

  for (let song of json.opening_themes) {
    openingDetails += `<li>${song}</li>`
  }

  for (let song of json.ending_themes) {
    endingDetails += `<li>${song}</li>`
  }

  for (let n in licensors) {
    if(n != licensors.length -1) {
      licensorDetails += `${licensors[n].name}, `;
    } else {
      licensorDetails += `${licensors[n].name}.`;
    }
  }

  for (let n in producers) {
    if(n != producers.length -1) {
      producerDetails += `${producers[n].name}, `;
    } else {
      producerDetails += `${producers[n].name}.`;
    }
  }

  for (let n in studios) {
    if(n != studios.length -1) {
      studioDetails += `${studios[n].name}, `;
    } else {
      studioDetails += `${studios[n].name}.`;
    }
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
              ${openingDetails}
            </ul>
          </div>
        </div>
        <div class="info">
          <div class="info-title">
            <span>Ending</span>
          </div>
          <div class="info-content">
            <ul>
              ${endingDetails}
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
            <span>${new Date(json.aired.from).toLocaleDateString("en-US")}</span>
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
            <span>${json.broadcasts}</span>
          </div>
        </div>
        <div class="info more">
          <div class="info-title">
            <span>producers</span>
          </div>
          <div class="info-content">
            <span>${producerDetails}</span>
          </div>
        </div>
        <div class="info more">
          <div class="info-title">
            <span>licensor</span>
          </div>
          <div class="info-content">
            <span>${licensorDetails}</span>
          </div>
        </div>
        <div class="info more">
          <div class="info-title">
            <span>studios</span>
          </div>
          <div class="info-content">
            <span>${studioDetails}</span>
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
            <span>${genresDetails}</span>
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
