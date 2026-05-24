document.addEventListener("DOMContentLoaded", () => {
  const carouselElement = document.getElementById("heroCarousel");

  if (carouselElement && window.bootstrap) {
    new bootstrap.Carousel(carouselElement, {
      interval: 6500,
      ride: "carousel",
      pause: false,
      touch: true,
      wrap: true,
    });
  }

  const revealTargets = document.querySelectorAll(".reveal");
  const navLinks = Array.from(document.querySelectorAll(".sky-nav__list .nav-link"));
  const navSections = ["home", "clients", "services", "products", "about", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const setActiveLink = (hash) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === hash;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  revealTargets.forEach((target) => revealObserver.observe(target));

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length > 0) {
        setActiveLink(`#${visible[0].target.id}`);
      }
    },
    {
      threshold: [0.2, 0.35, 0.55],
      rootMargin: "-18% 0px -58% 0px",
    }
  );

  navSections.forEach((section) => sectionObserver.observe(section));

  const nav = document.querySelector("#primaryNav");
  const navToggler = document.querySelector(".sky-toggler");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (nav && nav.classList.contains("show") && window.bootstrap) {
        const collapseInstance = bootstrap.Collapse.getOrCreateInstance(nav, { toggle: false });
        collapseInstance.hide();
        navToggler?.setAttribute("aria-expanded", "false");
      }
    });
  });

  setActiveLink("#home");
});
