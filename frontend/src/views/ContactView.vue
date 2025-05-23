<template>
  <main
    class="contact-container"
    aria-label="Kontaktseite – IT-Service in Waizenkirchen"
  >
    <section class="contact-card">
      <header class="contact-header">
        <h1 class="contact-company">Kontakt</h1>
        <h2 class="contact-name">Florian Mitter</h2>
      </header>

      <address class="contact-info" aria-label="Kontaktdaten FMW Solutions">
        <div class="contact-row">
          <span class="contact-label">E-Mail:</span>
          <a href="mailto:office@fmw-solutions.at" class="contact-link"
            >office@fmw-solutions.at</a
          >
        </div>

        <div class="contact-row">
          <span class="contact-label">Telefon:</span>
          <a href="tel:+4369914079312" class="contact-link"
            >+43 699 140 79 312</a
          >
        </div>

        <div class="contact-row">
          <span class="contact-label">LinkedIn:</span>
          <a
            href="https://linkedin.com/company/fmw-businesssolutions/"
            class="contact-link"
            target="_blank"
            rel="noopener"
            >FMW – Business Solutions</a
          >
        </div>

        <div class="contact-row">
          <span class="contact-label">Website:</span>
          <a
            href="https://fmw-solutions.at/"
            class="contact-link"
            target="_blank"
            rel="noopener"
            >fmw-solutions.at</a
          >
        </div>
      </address>

      <div class="contact-row" style="margin-top: 1rem">
        <span>
          Oder nutzen Sie unser
          <a
            href="https://forms.office.com/e/cLG0ksBG09"
            class="contact-link"
            target="_blank"
            rel="noopener"
            >Kontaktformular</a
          >.
        </span>
      </div>
    </section>

    <section class="pricing-section">
      <div class="pricing-card">
        <header class="pricing-header">
          <h2 class="pricing-title">Transparente Preise & echte Beratung</h2>
        </header>
        <div class="pricing-details">
          <ul>
            <li class="pricing-info">Stundensatz: 68 € inkl. MwSt.</li>
            <li class="pricing-info">
              Kostenlose Erstberatung per Telefon oder E-Mail
            </li>
            <li class="pricing-info">Angebotslegung ist kostenlos</li>
            <li class="pricing-info">Projektpauschalen auf Anfrage möglich</li>
            <li class="pricing-info">
              Bei komplexeren Projekten erfolgt eine Aufwandsschätzung im
              Vorfeld – keine versteckten Kosten.
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="review-section">
      <div class="review-card">
        <h2 class="review-title">Bewerten Sie uns auf Google</h2>

        <div class="review-content">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://g.page/r/Ce2e8lGkbFW4EBM/review"
            alt="QR-Code zur Google-Bewertung"
            class="review-qr"
          />
          QR-Code scannen oder
          <a
            href="https://g.page/r/Ce2e8lGkbFW4EBM/review"
            target="_blank"
            rel="noopener"
            class="review-link"
          >
            über den Direktlink
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useHead } from "@vueuse/head";

useHead({
  title: "Kontakt – FMW Solutions | Ihr IT-Servicepartner in Waizenkirchen",
  meta: [
    {
      name: "description",
      content:
        "Nehmen Sie Kontakt auf mit FMW Solutions – Ihrem Partner für IT-Unterstützung, Digitalisierung und Prozessoptimierung in Waizenkirchen und Umgebung.",
    },
    { name: "robots", content: "index, follow" },
    {
      property: "og:title",
      content: "Kontakt – FMW Solutions Waizenkirchen",
    },
    {
      property: "og:description",
      content:
        "Jetzt anfragen: persönliche IT-Hilfe und Digitalisierungslösungen für Privatpersonen und Unternehmen in Waizenkirchen.",
    },
    { property: "og:url", content: "https://fmw-solutions.at/contact" },
    {
      property: "og:image",
      content: "https://fmw-solutions.at/social-preview.png",
    },
  ],
  link: [{ rel: "canonical", href: "https://fmw-solutions.at/contact" }],
});
</script>

<style scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em 1em;
}

.contact-card {
  background-color: white;
  border-radius: 30px;
  padding: 0.5em;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.contact-header {
  margin-bottom: 1em;
}

.contact-company {
  font-size: clamp(1.2rem, 5vw, 1.8rem);
  font-weight: bold;
  margin: 0;
}

.contact-name {
  font-size: clamp(1rem, 3.5vw, 1.4rem);
  font-weight: 600;
  margin-top: 0.3em;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 1rem;
}

.contact-row {
  font-size: clamp(0.95rem, 1.7vw, 1.1rem);
  line-height: 1.4;
}

.contact-label {
  font-weight: 600;
  margin-right: 0.3rem;
  color: #444;
}

.contact-link {
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
}

.contact-link:hover {
  text-decoration: underline;
}

.pricing-section {
  padding-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.pricing-card {
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  padding: 0.5em;
  max-width: 1000px;
  width: 80%;
  text-align: center;
}

.pricing-header {
  margin-bottom: 0.8rem;
}

.pricing-title {
  font-size: clamp(1.2rem, 2.2vw, 1.6rem);
  font-weight: bold;
  margin: 0;
}

.pricing-details {
  text-align: left;
  font-size: clamp(1rem, 1.8vw, 1.15rem);
}

.pricing-info {
  margin: 0.6rem 0;
}

.review-section {
  width: 100%;
  display: flex;
  justify-content: center;
}

.review-card {
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  padding: 1em;
  max-width: 500px;
  width: 90%;
  text-align: center;
}

.review-title {
  font-size: clamp(1.2rem, 2.2vw, 1.6rem);
  font-weight: bold;
  margin-bottom: 0.5rem;
  margin-top: 0;
}

.review-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  font-size: clamp(0.95rem, 1.6vw, 1.1rem);
  line-height: 1.4;
  text-align: center;
}

.review-qr {
  width: 150px;
  height: 150px;
}

.review-link {
  color: #007bff;
  font-weight: 600;
  text-decoration: none;
}

.review-link:hover {
  text-decoration: underline;
}
</style>
