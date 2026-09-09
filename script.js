const events = [
  {
    date: "10 OTTOBRE 2026",
    place: "RICCIONE",
    title: "Creator Summit",
    text: "Un appuntamento dedicato a creator, marketing, tecnologia e community.",
    link: "#contact",
    cta: "Richiedi informazioni"
  },
  {
    date: "COMING SOON",
    place: "DA DEFINIRE",
    title: "Prossimo evento",
    text: "Questa scheda è pronta per essere aggiornata con il prossimo appuntamento.",
    link: "#contact",
    cta: "Resta aggiornato"
  }
];


/* ==========================================
   EVENTI
   ========================================== */

const eventsContainer = document.getElementById("eventsContainer");

if (eventsContainer) {
  eventsContainer.innerHTML = events.map(event => `
    <article class="event-card reveal">
      <span class="event-date">${event.date} · ${event.place}</span>
      <h3>${event.title}</h3>
      <p>${event.text}</p>
      <a href="${event.link}">${event.cta} →</a>
    </article>
  `).join("");
}


/* ==========================================
   MENU MOBILE
   ========================================== */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Chiudi menu" : "Apri menu"
    );

  });


  /* Chiude il menu quando clicchi una voce */

  mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        "Apri menu"
      );

    });

  });

}


/* ==========================================
   BARRA PROGRESSO
   ========================================== */

const progressBar = document.getElementById("progressBar");

if (progressBar) {

  window.addEventListener("scroll", () => {

    const height =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress =
      height > 0
        ? (window.scrollY / height) * 100
        : 0;

    progressBar.style.width = `${progress}%`;

  });

}


/* ==========================================
   ANIMAZIONI
   ========================================== */

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.08
  }
);

document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);
});


/* ==========================================
   ANNO AUTOMATICO
   ========================================== */

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


