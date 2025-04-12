<template>
  <main class="page-wrapper" aria-label="Fragen und IT-Lösungen">
    <h1 class="section-heading">
      <u>IT-Beratung & Digitalisierung für KMU</u>
    </h1>

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
          <h3 class="service-title" itemprop="name">{{ service.title }}</h3>
          <div
            class="service-content-wrapper"
            itemprop="acceptedAnswer"
            itemscope
            itemtype="https://schema.org/Answer"
          >
            <div class="service-content-card">
              <p class="service-description" itemprop="text">
                {{ service.text }}
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
    title: "Digitalisierung von Arbeitsprozessen",
    text: "Wir analysieren Ihre Abläufe und entwickeln individuelle Lösungen mit Microsoft 365, SharePoint & Power Automate.",
  },
  {
    title: "Benutzer- & Rechtemanagement",
    text: "Wir strukturieren Ihre Zugriffsrechte für Ordner, Teams und Daten – sicher und nachvollziehbar.",
  },
  {
    title: "Moderne Dateiablage & Cloud-Integration",
    text: "Wir begleiten Sie beim Umstieg auf eine zentrale, digitale Ablage – mit klaren Prozessen und Schulung für Ihr Team.",
  },
  {
    title: "IT-Beratung für den Mittelstand",
    text: "Wir begleiten Sie individuell bei technischen Fragen – von Gerätekauf bis Digitalisierungskonzept.",
  },
  {
    title: "Formulare & Freigabeprozesse digitalisieren",
    text: "Wir entwickeln mit Ihnen digitale Prozesse – z. B. für Urlaubsanträge, Angebotsfreigaben oder Kundenanfragen.",
  },
  {
    title: "Mitarbeiterschulung zu Microsoft 365",
    text: "Wir schulen Ihr Team in Outlook, SharePoint, Teams und OneDrive – praxisnah und verständlich.",
  },
  {
    title: "IT-Dokumentation & Wissensmanagement",
    text: "Wir erstellen eine klare Dokumentation für Prozesse, Abläufe, Zuständigkeiten und IT-Standards.",
  },
  {
    title: "Sicherheitskonzepte für kleine Teams",
    text: "Wir unterstützen Sie bei Zugriffskonzepten, Passwortmanagement und DSGVO-konformen Maßnahmen.",
  },
  {
    title: "SharePoint-Struktur für Abteilungen",
    text: "Wir entwickeln mit Ihnen eine SharePoint-Ablage mit klarer Rechtevergabe, Logik und Suchfunktion.",
  },
  {
    title: "Standortübergreifendes Arbeiten in der Cloud",
    text: "Wir richten für Sie eine Lösung ein, mit der mehrere Standorte oder Außendienst effizient zusammenarbeiten.",
  },
];

// SEO metadata
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
          name: s.title,
          acceptedAnswer: {
            "@type": "Answer",
            text: s.text,
          },
        })),
      }),
    },
  ],
});
</script>

<style scoped>
/* === Page Wrapper === */
.page-wrapper {
  padding: 1em 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* === Section Headline === */
.section-heading {
  font-size: clamp(1.4rem, 2.3vw, 1.7rem);
  font-weight: bold;
  text-align: center;
  margin: 0 0 0.8rem 0;
  color: #333;
  padding-bottom: 1em;
}

/* === FAQ / Services Section === */
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

.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.service-title {
  font-weight: bold;
  font-size: clamp(1.3rem, 2.3vw, 1.4rem);
  margin: 0 0 0.5em;
  text-align: center;
  min-height: 3.3em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.3em;
}

/* === Card Wrapper & Content === */
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
</style>
