import { animeCard } from "./components/.js";

function url(endpoint) {
  return `https://api.jikan.moe/v3/${endpoint}`;
}

function status(response) {
  return Promise((resolve, reject) => {
    if (response.status !== 200) {
      console.log(`error ${response.status}`);

      reject(new Error(response.statusText));
    } else {
      resolve(response);
    }
  })
}

async function getTommorowSchedules() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const tomorrow = new Date(today);

  const getTomorrowDay = days[tomorrow.getDay()];

  try {
    const responseJson = await fetch(url('schedules'));
    const status = await status(responseJson);
    const json = await response.json(status);
    const data = animeCard(getTomorrowDay, json, "schedule");
  } catch(err) {
    console.log(`schedule anime error: ${err}`);
  }
}

//you can fill data type to either anime, manga, or movie here
async function getTopData(type="anime") {
  try {
    const responseJson = await fetch(url(`top/${type}`));
    const status = await status(reponseJson);
    const json = await response.json(status);
    const data = animeCard("top", json, `top-${type}`);
  } catch(err) {
    console.log(`top anime error: ${err}`)
  }
}

async function upComing(type="anime") {
  try {
    const responseJson = await fetch(url('season/later'));
    const status = await status(responseJson);
    const json = await reponse.json(status);
    const data = animeCard(type, json, `upcoming-${anime}`);
  }
}
