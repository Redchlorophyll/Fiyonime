import {getTomorrowSchedules, getTopData, upComing, animeDetail} from "./api.js";

function getPagebyUrl() {
  const link = document.querySelectorAll(".nav-url");

  link.forEach(tag => {
    tag.addEventListener("click", () => {
      let page = tag.getAttribute("href").substr(1);
      loadPage(page);
    })
  });
}

function loadPage(page) {
  const content = document.querySelector("#main");

  fetch(`./pages/${page}.html`)
    .then((response) => {
      if (!response.ok) {
        return "404 not found";
      }
      //when page loaded convert it to text
      return response.text();
    })
    .then((html) => {
      content.innerHTML = html;

      if (page === "home") {
        getTomorrowSchedules();
        upComing();
        getTopData();
        getTopData("anime", "movie");
        getTopData("manga");
      }
    })
    .then((htmlcontent) => {
      window.setTimeout(() => {
        const container = document.querySelector(".content-container");
        container.classList.toggle("fade-in");
      }, 0);
    })
    .catch((err) => {
      console.log(err);
      content.innerHTML = "failed to fetch data, please try again";
    });
}

function loadDetailPage() {
  const pageName = window.location.href.split('?')[0].split("/")[3];

  if (pageName === "detail.html") {
    const urlParams = new URLSearchParams(window.location.search);
    const getMalId = urlParams.get("mal_id");
    animeDetail("anime", getMalId);
  }
}


document.addEventListener("DOMContentLoaded", () => {
  //load page content

  if(window.location.pathname.split("/").pop() == "") {
    let page = window.location.hash.substr(1); //get url last name
    if (page == '') page = "home";
    loadPage(page);
    getPagebyUrl();
  } else {
    window.setTimeout(() => {
      const container = document.querySelector(".content-container");
      container.classList.toggle("fade-in");
      loadDetailPage()
    }, 0);
  }



})
