document.addEventListener("DOMContentLoaded", function(){
  fetch("/solo-cup/includes/header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header-placeholder").innerHTML = data;

    // titel uit body hallen
    const title = document.body.dataset.title;
    const titleElement = document.getElementById("page-title");
    if (title && titleElement) {
      titleElement.textContent = title;
    }

    // logo uit body halen
    const logoSrc = document.body.dataset.logo;
    const logoElement = document.getElementById("site-logo");
    if (logoSrc && logoElement) {
      logoElement.src = logoSrc;
    }
  });
});
