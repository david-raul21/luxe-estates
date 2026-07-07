// Navigation: heller Hintergrund nach dem Scrollen über den Hero-Anfang
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Mobiles Menü
const toggle = document.getElementById("nav-toggle");
toggle.addEventListener("click", () => {
  const open = document.body.classList.toggle("nav-open");
  toggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll("#nav-links a").forEach((link) =>
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Sanftes Einblenden beim Scrollen
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Kontaktformular: ohne Backend, zeigt eine Bestätigung
const form = document.getElementById("contact-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.querySelectorAll("label, button").forEach((el) => (el.hidden = true));
  form.querySelector(".form-success").hidden = false;
});
