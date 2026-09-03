const events = [
  // Aggiungi qui SOLO eventi reali:
  // {date:"10 OTTOBRE 2026", city:"RICCIONE", title:"Creator Summit", description:"Descrizione...", link:"#contact", button:"INFO"}
];

const eventList = document.getElementById("eventsList");
const eventEmpty = document.getElementById("eventsEmpty");
if (eventList) {
  if (events.length) {
    eventEmpty.style.display = "none";
    eventList.innerHTML = events.map(e => `
      <article class="event-card reveal visible">
        <div class="event-date"><small>${e.city}</small>${e.date}</div>
        <div class="event-info"><h3>${e.title}</h3><p>${e.description}</p></div>
        <a class="btn btn-blue event-link" href="${e.link}">${e.button || "INFO"} <b>→</b></a>
      </article>`).join("");
  }
}

const nav = document.getElementById("siteNav");
const progress = document.querySelector(".progress");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 25);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${Math.min(100, (window.scrollY / Math.max(max,1)) * 100)}%`;
}, {passive:true});

const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, {threshold:.12});
  reveals.forEach(el => observer.observe(el));
} else {
  reveals.forEach(el => el.classList.add("visible"));
}

const menuBtn = document.querySelector(".menu-btn");
const desktopNav = document.querySelector(".desktop-nav");
if (menuBtn && desktopNav) {
  menuBtn.addEventListener("click", () => {
    const open = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!open));
    if (!open) {
      desktopNav.style.display = "flex";
      desktopNav.style.position = "absolute";
      desktopNav.style.top = "72px";
      desktopNav.style.left = "0";
      desktopNav.style.right = "0";
      desktopNav.style.padding = "25px 6vw";
      desktopNav.style.flexDirection = "column";
      desktopNav.style.background = "rgba(5,14,28,.98)";
      desktopNav.style.backdropFilter = "blur(14px)";
    } else {
      desktopNav.style.display = "";
    }
  });
}

document.querySelectorAll(".desktop-nav a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 700) {
      desktopNav.style.display = "";
      menuBtn.setAttribute("aria-expanded","false");
    }
  });
});

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    if (!form.querySelector('input[name="privacy"]').checked) {
      status.textContent = "Per inviare la richiesta devi accettare l'Informativa Privacy.";
      return;
    }
    const data = new FormData(form);
    const text =
      `Ciao Altin, sono ${data.get("nome")} ${data.get("cognome")}.%0A` +
      `Email: ${data.get("email")}%0A` +
      `Telefono: ${data.get("telefono") || "-"}%0A%0A` +
      `${data.get("messaggio")}`;
    status.textContent = "Apertura di WhatsApp...";
    window.open(`https://wa.me/3518112387?text=${text}`, "_blank", "noopener");
  });
}
