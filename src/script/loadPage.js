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
    })
    .catch((err) => {
      console.log(err);
      content.innerHTML = "failed to fetch data, please try again";
    });
}


document.addEventListener("DOMContentLoaded", () => {
  //load page content
  let page = window.location.hash.substr(1); //get url last name
  if (page == '') page = "home";
  loadPage(page);
  getPagebyUrl();

})