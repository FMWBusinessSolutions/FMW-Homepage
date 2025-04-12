<template>
  <main class="app-container" aria-label="Impressum und Datenschutz">
    <div class="content">
      <div class="card">
        <section>
          <h1>Gewerbeberechtigte Person & Inhaber</h1>
          <address>
            <p>Florian Mitter</p>
            <p>Hausleiten 58</p>
            <p>A-4730 Waizenkirchen</p>
          </address>
        </section>

        <div class="privacy-section">
          <section>
            <h2>Zweck der Datenverarbeitung</h2>
            <p>
              Personenbezogene Daten (z. B. Name, E-Mail-Adresse) werden
              ausschließlich zur Bearbeitung Ihrer Anfrage gespeichert und
              verarbeitet. Es erfolgt keine Weitergabe an Dritte.
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

          <section>
            <h2>Rechtsgrundlage</h2>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
              (Vertragserfüllung) und/oder Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse).
            </p>
          </section>

          <section>
            <h2>Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung, Datenübertragbarkeit und Widerspruch. Bei
              Beschwerden können Sie sich an
              <a href="mailto:office@fmw-solutions.at"
                >office@fmw-solutions.at</a
              >
              oder die Datenschutzbehörde wenden.
            </p>
          </section>

          <p class="footer-note">Stand: März 2025 • Änderungen vorbehalten</p>
        </div>

        <br />
        <p><small>© Florian Mitter – Alle Rechte vorbehalten.</small></p>
      </div>
    </div>
  </main>
</template>

<script setup>
// SEO metadata
import { useHead } from "@vueuse/head";

useHead({
  title: "Datenschutz & Impressum | FMW – Florian Mitter",
  meta: [
    {
      name: "description",
      content:
        "Rechtliche Hinweise, Datenschutzinformationen und Impressum der Website fmw-solutions.at. Angaben gemäß ECG & DSGVO.",
    },
    {
      name: "keywords",
      content:
        "Impressum, DSGVO, Datenschutz, Florian Mitter, FMW, Waizenkirchen, Gewerbe, Einzelunternehmer, Legal, Rechte, Österreich",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "author",
      content: "Florian Mitter",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://fmw-solutions.at/impressum",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LegalService",
        name: "FMW – Business Solutions",
        url: "https://fmw-solutions.at/",
        email: "office@fmw-solutions.at",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Hausleiten 58",
          addressLocality: "Waizenkirchen",
          postalCode: "4730",
          addressCountry: "AT",
        },
        founder: {
          "@type": "Person",
          name: "Florian Mitter",
        },
        areaServed: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressRegion: "Oberösterreich",
            addressCountry: "AT",
          },
        },
        sameAs: ["https://linkedin.com/company/fmw-businesssolutions/"],
        description:
          "Impressum & Datenschutzinformation für FMW – Business Solutions, Einzelunternehmen von Florian Mitter mit Sitz in Waizenkirchen (AT).",
      }),
    },
  ],
});
</script>

<style scoped>
/* === Page Container === */
.app-container {
  padding-top: 3px;
}

/* === Centered Content Box === */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* === Card Box === */
.card {
  margin-top: 0.3em;
  background-color: white;
  border-radius: 30px;
  padding: 2em;
  max-width: 600px;
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

.card p,
.card h1,
.card h2,
.card small {
  line-height: 1.2;
}

/* === Privacy Sections === */
.privacy-section {
  font-size: 0.95rem;
  color: #333;
}

.privacy-section h2 {
  font-size: 1.1rem;
  margin-top: 1.5rem;
}

/* === Footer Note === */
.footer-note {
  font-size: 0.9rem;
  margin-top: 3rem;
  color: #777;
}
</style>
