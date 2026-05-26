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











// Services page scripts


/* =========================
OPTIONAL ADDITIONS
APPEND INTO script.js
========================= */

document.querySelectorAll(".service-glass-card").forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `
      radial-gradient(circle at ${x}px ${y}px,
      rgba(0,119,255,.12),
      rgba(4,14,28,.98) 45%)
    `;

  });

  card.addEventListener("mouseleave", () => {

    card.style.background = `
      linear-gradient(180deg,
      rgba(4,14,28,.96),
      rgba(5,12,24,.98))
    `;

  });

});