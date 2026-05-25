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

  revealTargets.forEach((target) => {
    revealObserver.observe(target);
  });

});