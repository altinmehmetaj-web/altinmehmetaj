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
/* ============================================================
   CAROSELLO TESTIMONIANZE
   ============================================================ */

const testimonialCards = document.querySelectorAll(".testimonial-card");
const testimonialDots = document.querySelectorAll(".testimonial-dot");
const testimonialPrev = document.querySelector(".testimonial-prev");
const testimonialNext = document.querySelector(".testimonial-next");
const testimonialCurrent = document.querySelector(".testimonial-current");

let testimonialIndex = 0;
let testimonialTimer;


/* MOSTRA TESTIMONIANZA */

function showTestimonial(index) {

  if (!testimonialCards.length) return;

  if (index < 0) {
    index = testimonialCards.length - 1;
  }

  if (index >= testimonialCards.length) {
    index = 0;
  }

  testimonialIndex = index;


  testimonialCards.forEach((card, i) => {
    card.classList.toggle("active", i === testimonialIndex);
  });


  testimonialDots.forEach((dot, i) => {
    dot.classList.toggle("active", i === testimonialIndex);
  });


  if (testimonialCurrent) {
    testimonialCurrent.textContent =
      String(testimonialIndex + 1).padStart(2, "0");
  }
}


/* SUCCESSIVA */

function nextTestimonial() {
  showTestimonial(testimonialIndex + 1);
  restartTestimonialTimer();
}


/* PRECEDENTE */

function prevTestimonial() {
  showTestimonial(testimonialIndex - 1);
  restartTestimonialTimer();
}


/* TIMER AUTOMATICO */

function startTestimonialTimer() {

  testimonialTimer = setInterval(() => {
    showTestimonial(testimonialIndex + 1);
  }, 6000);

}


function restartTestimonialTimer() {

  clearInterval(testimonialTimer);
  startTestimonialTimer();

}


/* FRECCE */

testimonialNext?.addEventListener("click", nextTestimonial);
testimonialPrev?.addEventListener("click", prevTestimonial);


/* PALLINI */

testimonialDots.forEach((dot, index) => {

  dot.addEventListener("click", () => {

    showTestimonial(index);
    restartTestimonialTimer();

  });

});


/* AVVIO */

if (testimonialCards.length) {

  showTestimonial(0);
  startTestimonialTimer();

}
/* ============================================================
   GESTIONE COOKIE
   ============================================================ */

(function () {

  const COOKIE_KEY = "altin_cookie_preferences";

  const banner = document.getElementById("cookieBanner");
  const modal = document.getElementById("cookieModal");

  const accept = document.getElementById("cookieAccept");
  const reject = document.getElementById("cookieReject");
  const settings = document.getElementById("cookieSettings");

  const close = document.getElementById("cookieClose");
  const modalClose = document.getElementById("cookieModalClose");

  const save = document.getElementById("cookieSave");
  const external = document.getElementById("cookieExternal");

  const preferencesButton =
    document.getElementById("cookiePreferences");


  /* Se il banner non esiste in una pagina,
     non facciamo nulla */

  if (!banner) return;


  function getPreferences() {

    try {

      const saved =
        localStorage.getItem(COOKIE_KEY);

      return saved
        ? JSON.parse(saved)
        : null;

    } catch (error) {

      return null;

    }

  }


  function savePreferences(preferences) {

    localStorage.setItem(
      COOKIE_KEY,
      JSON.stringify(preferences)
    );

    applyPreferences(preferences);

    banner.classList.remove("show");
    modal.classList.remove("show");

    modal.setAttribute("aria-hidden", "true");

  }


  function applyPreferences(preferences) {

    if (!preferences) return;


    /*
     * CONTENUTI ESTERNI
     * YouTube viene caricato solo se autorizzato.
     */

    if (preferences.external === true) {

      document
        .querySelectorAll("[data-cookie-youtube]")
        .forEach(function (element) {

          const src =
            element.getAttribute("data-cookie-youtube");

          if (!element.querySelector("iframe")) {

            const iframe =
              document.createElement("iframe");

            iframe.src = src;
            iframe.title =
              element.getAttribute("data-title") ||
              "Video YouTube";

            iframe.allow =
              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

            iframe.allowFullscreen = true;

            element.innerHTML = "";
            element.appendChild(iframe);

          }

        });

    }

  }


  function showBanner() {

    banner.classList.add("show");

  }


  function openSettings() {

    const preferences = getPreferences();

    if (preferences) {

      external.checked =
        preferences.external === true;

    } else {

      external.checked = false;

    }

    modal.classList.add("show");

    modal.setAttribute("aria-hidden", "false");

  }


  function closeSettings() {

    modal.classList.remove("show");

    modal.setAttribute("aria-hidden", "true");

  }


  /* ACCETTA TUTTI */

  accept?.addEventListener("click", function () {

    savePreferences({

      necessary: true,
      external: true

    });

  });


  /* RIFIUTA */

  reject?.addEventListener("click", function () {

    savePreferences({

      necessary: true,
      external: false

    });

  });


  /* X = nessun consenso */

  close?.addEventListener("click", function () {

    savePreferences({

      necessary: true,
      external: false

    });

  });


  /* PERSONALIZZA */

  settings?.addEventListener(
    "click",
    openSettings
  );


  /* CHIUDI MODALE */

  modalClose?.addEventListener(
    "click",
    closeSettings
  );


  /* SALVA PREFERENZE */

  save?.addEventListener("click", function () {

    savePreferences({

      necessary: true,
      external: external.checked

    });

  });


  /* PULSANTE COOKIE FISSO */

  preferencesButton?.addEventListener(
    "click",
    openSettings
  );


  /* CLICK FUORI DAL MODALE */

  modal?.addEventListener("click", function (event) {

    if (event.target === modal) {

      closeSettings();

    }

  });


  /* ESC */

  document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

      closeSettings();

    }

  });


  /* AVVIO */

  const savedPreferences = getPreferences();

  if (savedPreferences) {

    applyPreferences(savedPreferences);

  } else {

    setTimeout(function () {

      showBanner();

    }, 500);

  }

})();

