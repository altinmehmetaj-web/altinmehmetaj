# Altin Mehmetaj — sito personale definitivo

## Contenuto
- `index.html` — sito principale
- `style.css` — stile completo
- `script.js` — animazioni, menu, eventi e modulo contatti
- `privacy.html` — informativa privacy (DA COMPLETARE/VERIFICARE)
- `cookie.html` — cookie policy
- `note-legali.html` — note legali (DA COMPLETARE)
- `legal.css` — stile pagine legali
- `assets/hero-altin-nyc.jpg` — immagine Hero approvata
- `assets/story-altin-bw.jpg` — immagine Story approvata
- `assets/favicon.svg`

## GitHub Pages
Carica tutti i file nella root del repository, mantenendo la cartella `assets/`.
Poi: Settings → Pages → Deploy from branch → `main` → `/ (root)`.

## Eventi
Apri `script.js` e modifica l'array `events` all'inizio. Non inserire eventi non confermati.

## GDPR / Privacy
Questa versione usa un modulo statico che NON salva i dati in un database: al submit apre WhatsApp con i dati inseriti.
Prima della pubblicazione:
1. Completa i dati del titolare in `privacy.html` e `note-legali.html`.
2. Verifica chi riceve/conserva i dati (WhatsApp, email, eventuale CRM).
3. Definisci tempi di conservazione e basi giuridiche reali.
4. Se aggiungi analytics, pixel, YouTube embed, mappe, newsletter o altri tracker, aggiorna Cookie/Privacy e implementa il consenso quando richiesto.
5. Fai verificare i testi da un professionista privacy/legale.

Il sito non include analytics o cookie di profilazione nella configurazione fornita.
