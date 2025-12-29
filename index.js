// Scroll reveal animation (Intersection Observer)
const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach(el => observer.observe(el));

// Appointment form demo handler
const form = document.getElementById("appointmentForm");
const status = document.getElementById("status");

form.addEventListener("submit", e => {
  e.preventDefault();
  status.textContent =
    "Thank you! Your appointment request has been received (demo).";
});
