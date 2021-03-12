import { animeCard } from "./components/animeCard.js";
import { animeDetailPage } from "./components/animeDetail.js";

function url(endpoint) {
  return `https://api.jikan.moe/v3/${endpoint}`;
}

function status(response) {
  return new Promise((resolve, reject) => {
    if (response.status !== 200) {
      console.log(`error ${response.status}`);

      reject(new Error(response.statusText));
    } else {
      resolve(response);
    }
  })
}

async function getTomorrowSchedules() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const tomorrow = new Date(today);

  const getTomorrowDay = days[tomorrow.getDay()];

  try {
    const responseJson = await fetch(url('schedule'));
    const response = await status(responseJson);
    const json = await response.json();

    animeCard(getTomorrowDay, json, "schedule");
  } catch(err) {
    console.error(`schedule anime error: ${err}`);
  }
}

//you can fill data type to either anime, manga, or movie here
async function getTopData(type="anime", subtype=false) {
  try {
    let responseJson;
    if(subtype==false) {
      responseJson = await fetch(url(`top/${type}`));
      const response = await status(responseJson);
      const json = await response.json();
      animeCard("top", json, `top-${type}`);
    } else {
      responseJson = await fetch(url(`top/${type}/1/${subtype}`));
      const response = await status(responseJson);
      const json = await response.json();
      animeCard("top", json, `top-${subtype}`);
    }

  } catch(err) {
    console.log(`top anime error: ${err}`)
  }
}

async function upComing(type="anime") {
  try {
    const responseJson = await fetch(url('season/later'));
    const response = await status(responseJson);
    const json = await response.json();
    animeCard(type, json, `upcoming-${type}`);
  } catch(err) {
    console.log(err);
  }
}

async function animeDetail(type="anime",id) {
  try {
    const responseJson = await fetch(url(`${type}/${id}`));
    const response = await status(responseJson);
    const json = await response.json();
    animeDetailPage(json);
  } catch(err) {
    console.log(err);
  }
}

export {getTomorrowSchedules, getTopData, upComing, animeDetail};
