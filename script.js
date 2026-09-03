const events = [
  {
    date: "10 OTTOBRE 2026",
    place: "RICCIONE",
    title: "Creator Summit",
    text: "Un appuntamento dedicato a creator, marketing, tecnologia e community.",
    link: "#contatti",
    cta: "Richiedi informazioni"
  },
  {
    date: "COMING SOON",
    place: "DA DEFINIRE",
    title: "Prossimo evento",
    text: "Questa scheda è pronta per essere aggiornata con il prossimo appuntamento.",
    link: "#contatti",
    cta: "Resta aggiornato"
  }
];

const eventsGrid = document.getElementById("eventsGrid");
if (eventsGrid) {
  eventsGrid.innerHTML = events.map(event => `
    <article class="event-card reveal">
      <span class="event-date">${event.date} · ${event.place}</span>
      <h3>${event.title}</h3>
      <p>${event.text}</p>
      <a href="${event.link}">${event.cta} →</a>
    </article>
  `).join("");
}

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
});
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const progress = document.getElementById("progress");
window.addEventListener("scroll", () => {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${h > 0 ? (window.scrollY / h) * 100 : 0}%`;
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: .08});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
form?.addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(form);
  const nome = data.get("nome") || "";
  const cognome = data.get("cognome") || "";
  const email = data.get("email") || "";
  const telefono = data.get("telefono") || "";
  const messaggio = data.get("messaggio") || "";
  const text =
`Ciao Altin, sono ${nome} ${cognome}.
Email: ${email}
Telefono: ${telefono}
Messaggio: ${messaggio}

Ho letto la Privacy Policy e acconsento al trattamento dei dati per essere ricontattato in relazione alla mia richiesta.`;
  window.open(`https://wa.me/3518112387?text=${encodeURIComponent(text)}`, "_blank", "noopener");
});
