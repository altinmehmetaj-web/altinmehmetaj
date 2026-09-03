# Altin Mehmetaj — sito personale

Versione definitiva in italiano, pronta per GitHub Pages.

## Struttura

- `index.html` — pagina principale
- `style.css` — stile
- `script.js` — animazioni, eventi e modulo contatti
- `assets/hero-altin.jpg` — foto Hero
- `assets/story-altin-bw.jpg` — foto storia in bianco e nero
- `assets/logo-am.svg` — logo AM
- `assets/favicon.svg` — favicon
- `privacy.html` — Privacy Policy
- `cookie.html` — Cookie Policy
- `note-legali.html` — Note legali
- `.nojekyll` — configurazione GitHub Pages

## Pubblicazione su GitHub Pages

1. Apri il repository GitHub.
2. Carica **tutti** i file e la cartella `assets` mantenendo la struttura.
3. Vai in **Settings → Pages**.
4. In “Build and deployment” scegli **Deploy from a branch**.
5. Seleziona il branch principale (di solito `main`) e la cartella `/root`.
6. Salva e attendi la pubblicazione.

## Dominio personalizzato

Il dominio non è stato inserito nel pacchetto perché non è stato indicato il nome esatto del dominio.

Quando hai il dominio:
1. GitHub → Settings → Pages → Custom domain.
2. Inserisci il dominio esatto.
3. Nel pannello DNS del tuo registrar configura i record richiesti da GitHub Pages.
4. Attiva HTTPS quando GitHub lo rende disponibile.

## Eventi

Apri `script.js` e modifica solamente l'array `events` all'inizio del file.

## Contatti / GDPR

Questa versione usa un modulo che, dopo il consenso, apre WhatsApp con il messaggio precompilato. GitHub Pages è hosting statico e non salva autonomamente i dati in un database.

Prima della pubblicazione definitiva:
- sostituisci i campi `[NOME...]`, `[INDIRIZZO]`, `[EMAIL PRIVACY]`, ecc. nelle pagine legali;
- verifica il titolare effettivo del trattamento;
- verifica i servizi di terze parti realmente utilizzati;
- se vuoi una vera raccolta lead in un database/CRM, integra un servizio di form con relativo accordo e informativa GDPR;
- fai verificare la documentazione da un professionista privacy/legale.

## Nota importante

Le cifre e le informazioni professionali presenti nel sito devono essere pubblicate solo se accurate e verificabili.
