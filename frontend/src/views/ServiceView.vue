<template>
  <main class="page-wrapper" aria-label="Fragen und IT-Lösungen">
    <section class="pricing-section">
      <div class="pricing-card">
        <header class="pricing-header">
          <h1 class="pricing-title">
            <u>Wir legen Wert auf Transparenz und faire Preise.</u>
          </h1>
        </header>
        <div class="pricing-details">
          <p class="pricing-info">
            Unser Stundensatz für Dienstleistungen beträgt 68 € inkl. MwSt.
          </p>
          <p class="pricing-info">
            Die Erstberatung per Telefon oder E-Mail sowie die Angebotslegung
            sind grundsätzlich kostenlos.
          </p>
          <p class="pricing-info">
            Bei größeren Projekten mit höherem Planungsaufwand behalten wir uns
            vor den Aufwand in Rechnung zu stellen. Dies geschieht jedoch
            ausschließlich nach vorheriger Absprache.
          </p>
          <p class="pricing-info">
            Im Umkreis von 5 km um Waizenkirchen berechnen wir keine
            Fahrtkosten.
          </p>
          <p class="pricing-info">
            Ab 5 km berechnen wir unseren normalen Stundensatz.
          </p>
          <p class="pricing-info">
            Gerne erstellen wir für Sie ein maßgeschneidertes Angebot.
          </p>
        </div>
      </div>
    </section>

    <br />
    <div class="section-separator"></div>
    <br />

    <h2 class="section-heading">
      <u>Ihre Fragen. <br />Unsere Lösungen.</u>
    </h2>

    <section class="service-section">
      <div class="service-grid">
        <article
          v-for="(service, index) in services"
          :key="index"
          class="service-item"
          itemscope
          itemprop="mainEntity"
          itemtype="https://schema.org/Question"
        >
          <h3 class="service-title" itemprop="name">{{ service.titel }}</h3>
          <div
            class="service-content-wrapper"
            itemprop="acceptedAnswer"
            itemscope
            itemtype="https://schema.org/Answer"
          >
            <div class="service-content-card">
              <p class="service-description" itemprop="text">
                {{ service.beschreibung }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <CTA />
  </main>
</template>

<script setup lang="ts">
import CTA from "@/components/CTA.vue";
import { useHead } from "@vueuse/head";

const services = [
  {
    titel: "Warum ist mein PC so langsam?",
    beschreibung:
      "Wir prüfen Ihr Gerät auf unnötige Programme und Systembremsen. Gemeinsam schaffen wir wieder spürbar mehr Tempo.",
  },
  {
    titel: "Warum druckt mein Gerät nicht?",
    beschreibung:
      "Wir bringen Ihren Drucker wieder zum Laufen – egal ob Kabel, WLAN oder Treiberproblem. Auch für den Ausdruck vom Handy oder Tablet.",
  },
  {
    titel: "Wie werde ich Viren oder PopUps los?",
    beschreibung:
      "Wir prüfen Ihr Gerät auf Schadsoftware und richten einen verlässlichen Schutz ein – für sicheres Surfen ohne Störungen.",
  },
  {
    titel: "Wie lege ich Kundendaten sicher ab?",
    beschreibung:
      "Wir zeigen Ihnen, wie Sie hochsensible Daten DSGVO-konform sicher und zuverlässig speichern und vor fremdem Zugriff schützen können.",
  },
  {
    titel: "Wie vermeide ich Datenverlust?",
    beschreibung:
      "Wir richten automatische Sicherungen für Fotos, Dokumente und E-Mails ein – lokal oder in der Cloud. Damit nichts mehr verloren geht.",
  },
  {
    titel: "Wie behalte ich den Überblick über meine Buchhaltung?",
    beschreibung:
      "Wir erstellen eine einfache Lösung zur Ablage und Organisation von Angeboten & Rechnungen – ganz ohne teure Software.",
  },
  {
    titel: "Wie merke ich mir all meine Passwörter?",
    beschreibung:
      "Wir zeigen Ihnen, wie Sie mit einem Passwort-Manager oder dem Microsoft Authenticator sicher und bequem alle Passwörter verwalten.",
  },
  {
    titel: "Wie verwalte ich meine Termine effizient?",
    beschreibung:
      "Wir zeigen Ihnen, wie Sie Termine digital verwalten – allein oder im Team. Mit Outlook, Teams oder auf Ihrer Website.",
  },
  {
    titel: "Welche Hard- und Software benötige ich?",
    beschreibung:
      "Wir prüfen Ihre Anforderungen und empfehlen passende Geräte & Tools – nicht zu viel, nicht zu wenig. Einrichtung inklusive.",
  },
  {
    titel: "Wie schütze ich mich vor Datenverlust & Phishing?",
    beschreibung:
      "Wir richten Schutzmechanismen ein: E-Mail-Filter, automatische Backups Ihrer Daten, Zwei-Faktor-Authentifizierung – sicher, einfach und zuverlässig.",
  },
];

useHead({
  title: "Fragen & Lösungen | IT-Support & Beratung | FMW Business Solutions",
  meta: [
    {
      name: "description",
      content:
        "Häufige IT-Fragen und praxisnahe Lösungen für Privatpersonen, Selbstständige & KMUs. Professionelle Beratung, Datenschutz & IT-Sicherheit. FMW Business Solutions.",
    },
    {
      name: "keywords",
      content:
        "Fragen, IT-Probleme, Beratung, Support, Datenschutz, Power Automate, Outlook, Microsoft, KMU, IT-Lösungen, DSGVO, FMW",
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
      href: "https://fmw-solutions.at/service",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: services.map((s) => ({
          "@type": "Question",
          name: s.titel,
          acceptedAnswer: {
            "@type": "Answer",
            text: s.beschreibung,
          },
        })),
      }),
    },
  ],
});
</script>

<style scoped>
/* === Page Layout === */
.page-wrapper {
  padding: 1em 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* === Section Heading === */
.section-heading {
  font-size: clamp(1.4rem, 2.3vw, 1.7rem);
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.8rem;
  margin-top: 0;
  color: #333;
}

/* === Service Section === */
.service-section {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 1.5em;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5em;
  width: 90%;
  max-width: 1200px;
}

/* === Individual Service Items === */
.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* === Title outside the card === */
.service-title {
  font-weight: bold;
  font-size: clamp(1.3rem, 2.3vw, 1.4rem);
  margin: 0;
  margin-bottom: 0.5em;
  text-align: center;
  line-height: 1.3;
  min-height: 3.3em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.3em;
}

/* === Wrapper to stretch card height === */
.service-content-wrapper {
  width: 100%;
  display: flex;
  height: 100%;
}

.service-content-card {
  background-color: white;
  border-radius: 30px;
  padding: 0.5rem;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  height: 100%;
}

.service-description {
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  line-height: 1.4em;
  padding-bottom: 0.3rem;
}

/* === Divider === */
.section-separator {
  width: 90%;
  height: 2px;
  background-color: #000;
  margin: 0;
}

/* === Pricing Section === */
.pricing-section {
  padding-top: 1.5em;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
}

.pricing-card {
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  padding: 1em;
  padding-top: 0;
  max-width: 1000px;
  width: 90%;
  text-align: center;
}

.pricing-header {
  margin-bottom: 0.5rem;
}

.pricing-title {
  font-size: clamp(1.2rem, 2.2vw, 1.6rem);
  font-weight: bold;
  text-align: center;
  margin: 0.5rem;
}

.pricing-details {
  text-align: left;
  font-size: clamp(1rem, 1.8vw, 1.2rem);
}

.pricing-info {
  line-height: 1.25rem;
  margin: 0.8rem;
}
</style>
