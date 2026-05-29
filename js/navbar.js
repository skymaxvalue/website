document.addEventListener("DOMContentLoaded", () => {

  loadComponent("navbar.html", "navbar-container", () => {
    setActiveNav();
  });

  loadComponent("footer.html", "footer-container");

});

function loadComponent(file, containerId, callback) {

  const container = document.getElementById(containerId);

  if (!container) return;

  fetch(file)
    .then(res => res.text())
    .then(data => {

      container.innerHTML = data;

      if (callback) callback();

    })
    .catch(err => console.error(err));
}

function setActiveNav() {

  const currentPage = window.location.pathname.split("/").pop();

  const navLinks = document.querySelectorAll(".sky-nav .nav-link");

  navLinks.forEach(link => {

    const href = link.getAttribute("href");

    if (
      href === currentPage ||
      (currentPage === "" && href === "index.html")
    ) {
      link.classList.add("active");
    }

  });

}