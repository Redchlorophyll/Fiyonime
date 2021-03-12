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
