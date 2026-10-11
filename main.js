/* ===== FAQ accordéon ===== */
function initFaq() {
  const items = document.querySelectorAll(".faq-item");

  items.forEach((item) => {
    const button = item.querySelector("button");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".material-symbols-outlined");

    button.addEventListener("click", () => {
      const wasOpen = !answer.classList.contains("hidden");

      // On referme tout, puis on ouvre l'élément cliqué s'il était fermé
      items.forEach((other) => {
        other.querySelector(".faq-answer").classList.add("hidden");
        other.querySelector(".material-symbols-outlined").classList.remove("rotate-180");
      });

      if (!wasOpen) {
        answer.classList.remove("hidden");
        icon.classList.add("rotate-180");
      }
    });
  });
}

/* ===== Formulaire de contact ===== */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const banner = document.getElementById("confirmation-banner");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // TODO : envoyer les données à ton backend / service d'e-mail ici
    form.reset();
    banner.classList.remove("hidden");
    banner.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

/* ===== Galerie : on duplique les cartes pour un défilement infini ===== */
function initGallery() {
  const track = document.querySelector(".marquee-track");
  if (!track) return;

  [...track.children].forEach((card) => {
    const clone = card.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    track.appendChild(clone);
  });
}

/* ===== Menu mobile ===== */
function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const icon = toggle.querySelector(".material-symbols-outlined");

  function setOpen(open) {
    menu.classList.toggle("hidden", !open);
    toggle.setAttribute("aria-expanded", String(open));
    icon.textContent = open ? "close" : "menu";
  }

  toggle.addEventListener("click", () => setOpen(menu.classList.contains("hidden")));

  // On referme le menu si l'écran passe en taille tablette/ordinateur (768 px = breakpoint md)
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (e.matches) setOpen(false);
  });

  // On referme le menu après un clic sur un lien
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setOpen(false)));
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initFaq();
  initContactForm();
  initGallery();
});