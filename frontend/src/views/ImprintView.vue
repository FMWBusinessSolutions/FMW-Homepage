<template>
  <main class="app-container" aria-label="Impressum und Datenschutzerklärung">
    <div class="content">
      <div class="card">
        <section aria-labelledby="impressum-heading">
          <h1 id="impressum-heading"><u>Impressum & Datenschutz</u></h1>

          <h2>Gewerbeberechtigte Person & Inhaber</h2>
          <address>
            <p>Florian Mitter</p>
            <p>Hausleiten 58</p>
            <p>A-4730 Waizenkirchen, Österreich</p>
            <p>
              E-Mail:
              <a href="mailto:office@fmw-solutions.at"
                >office@fmw-solutions.at</a
              >
            </p>
          </address>
        </section>

        <section class="privacy-section" aria-labelledby="zweck-heading">
          <h2 id="zweck-heading">Zweck der Datenverarbeitung</h2>
          <p>
            Personenbezogene Daten (z. B. Name, E-Mail-Adresse) werden
            ausschließlich zur Bearbeitung Ihrer Anfrage gespeichert und
            verarbeitet. Eine Weitergabe an Dritte erfolgt nicht.
          </p>
          <p>
            Die Verarbeitung erfolgt im Einklang mit der
            <a
              href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001597"
              target="_blank"
              rel="noopener"
              >Datenschutz-Grundverordnung (DSGVO)</a
            >
            sowie dem
            <a
              href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=bundesnormen&Gesetzesnummer=20011678"
              target="_blank"
              rel="noopener"
              >Telekommunikationsgesetz 2021 (TKG 2021)</a
            >.
          </p>
        </section>

        <section
          class="privacy-section"
          aria-labelledby="rechtsgrundlage-heading"
        >
          <h2 id="rechtsgrundlage-heading">Rechtsgrundlage</h2>
          <p>
            Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
            (Vertragserfüllung) und/oder Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse).
          </p>
        </section>

        <section class="privacy-section" aria-labelledby="rechte-heading">
          <h2 id="rechte-heading">Ihre Rechte gemäß DSGVO</h2>
          <ul>
            <li>Auskunft über gespeicherte Daten</li>
            <li>Berichtigung oder Löschung Ihrer Daten</li>
            <li>Einschränkung der Verarbeitung</li>
            <li>Datenübertragbarkeit</li>
            <li>Widerspruch gegen die Verarbeitung</li>
          </ul>
          <p>
            Bei Fragen oder Beschwerden wenden Sie sich bitte an
            <a href="mailto:office@fmw-solutions.at">office@fmw-solutions.at</a>
            oder an die österreichische Datenschutzbehörde.
          </p>
        </section>

        <p class="footer-note">Stand: März 2025 • Änderungen vorbehalten</p>
        <p><small>© Florian Mitter – Alle Rechte vorbehalten.</small></p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useHead } from "@vueuse/head";

useHead({
  title: "Impressum | FMW – Business Solutions",
  meta: [{ name: "robots", content: "noindex, follow" }],
  link: [{ rel: "canonical", href: "https://fmw-solutions.at/imprint" }],
});
</script>

<style scoped>
.app-container {
  padding-top: 3px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card {
  margin-top: 0.3em;
  background-color: white;
  border-radius: 30px;
  padding: 2em;
  max-width: 700px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  text-align: left;
}

.card a {
  color: #007bff;
  text-decoration: none;
}
.card a:hover {
  text-decoration: underline;
}

.card h1,
.card h2 {
  margin-top: 0.1rem;
  font-size: 1.2rem;
}

.card ul {
  margin-left: 1.2rem;
  padding-left: 0.5rem;
  list-style-type: disc;
}

.card p,
.card h1,
.card h2,
.card small {
  line-height: 1.5;
}

.privacy-section {
  font-size: 0.95rem;
  color: #333;
  margin-top: 1.2rem;
}

.privacy-section h2 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.footer-note {
  font-size: 0.9rem;
  margin-top: 3rem;
  color: #777;
}
</style>
