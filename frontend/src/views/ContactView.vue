<template>
  <main class="contact-container" aria-label="Kontaktinformationen">
    <section class="contact-card">
      <header class="contact-header">
        <h1 class="contact-company">FMW – Business Solutions</h1>
        <h2 class="contact-name">Florian Mitter</h2>
      </header>

      <address class="contact-info">
        <div class="contact-row">
          <span class="contact-label">Telefon:</span>
          <a href="tel:+4369914079312" class="contact-link"
            >+43 699 140 79 312</a
          >
        </div>

        <div class="contact-row">
          <span class="contact-label">E-Mail:</span>
          <a href="mailto:office@fmw-solutions.at" class="contact-link"
            >office@fmw-solutions.at</a
          >
        </div>

        <div class="contact-row">
          <span class="contact-label">Web:</span>
          <a
            href="https://fmw-solutions.at/"
            class="contact-link"
            target="_blank"
            rel="noopener"
            >fmw-solutions.at</a
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
      </address>
    </section>
  </main>
</template>

<script setup>
import { useHead } from "@vueuse/head";

useHead({
  title: "Kontakt | FMW – Business Solutions",
  meta: [
    {
      name: "description",
      content:
        "Kontaktiere FMW – Business Solutions: E-Mail, Telefonnummer, LinkedIn & Adresse. Beratung & IT-Service für EPUs und KMUs aus Oberösterreich.",
    },
    {
      name: "keywords",
      content:
        "Kontakt, Florian Mitter, FMW, EPU, KMU, Digitalisierung, IT-Beratung, Oberösterreich, Microsoft 365, Power Automate, LinkedIn",
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
      href: "https://fmw-solutions.at/contact",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "FMW – Business Solutions",
        image: "https://fmw-solutions.at/logo.png",
        url: "https://fmw-solutions.at/",
        telephone: "+4369914079312",
        email: "office@fmw-solutions.at",
        address: {
          "@type": "PostalAddress",
          addressCountry: "AT",
          addressRegion: "Oberösterreich",
        },
        sameAs: ["https://linkedin.com/company/fmw-businesssolutions/"],
        founder: {
          "@type": "Person",
          name: "Florian Mitter",
        },
        description:
          "FMW – Business Solutions bietet IT-Beratung, Digitalisierung und Prozessoptimierung für EPU und KMU in Oberösterreich.",
      }),
    },
  ],
});
</script>

<style scoped>
/* === Contact Container === */
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em 1em;
}

/* === Contact Card === */
.contact-card {
  background-color: white;
  border-radius: 30px;
  padding: 1em;
  padding-top: 0.5em;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  text-align: center;
}

/* === Header Section === */
.contact-header {
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.contact-company {
  font-size: clamp(1rem, 5vw, 1.8rem);
  font-weight: bold;
  margin: 0;
  max-width: 100%;
  overflow: hidden;
  text-overflow: unset;
  white-space: nowrap;
  text-align: center;
}

.contact-name {
  font-size: clamp(1.1rem, 3.5vw, 1.4rem);
  font-weight: 600;
  margin: 0.3em 0 0.8em 0;
  line-height: 1.8rem;
}

/* === Contact Information === */
.contact-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  text-align: center;
}

.contact-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: clamp(0.95rem, 1.7vw, 1.1rem);
  line-height: 1.3;
  margin: 0.1em 0;
}

.contact-label {
  font-weight: 600;
  margin: 0 0.3em 0 0;
  color: #444;
}

.contact-link {
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
  margin: 0;
  white-space: nowrap;
}

.contact-link:hover {
  text-decoration: underline;
}
</style>
