document.addEventListener("DOMContentLoaded", () => {

  loadComponent("navbar.html", "navbar-container");
  loadComponent("footer.html", "footer-container");

});

function loadComponent(file, containerId) {

  const container = document.getElementById(containerId);

  if (!container) return;

  fetch(file)
    .then(res => res.text())
    .then(data => {
      container.innerHTML = data;
    })
    .catch(err => console.error(err));
}