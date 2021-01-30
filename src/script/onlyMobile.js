function onlyMobile(page, minSize=768) {
  const url = window.location.hash.substr(1);

  if(url == page) {
    if(!(window.screen.width <= minSize)) {
      window.location="./"
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  onlyMobile("search");

})
