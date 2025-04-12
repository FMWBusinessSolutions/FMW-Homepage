<template>
  <main class="page-wrapper" aria-label="Fragen und IT-Lösungen">
    <h1 class="section-heading">
      <u>IT-Beratung & Digitalisierung für Selbstständige</u>
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
    title: "IT-Basics für Selbstständige",
    text: "Wir unterstützen Sie bei Geräteeinrichtung, Lizenzberatung, E-Mail-Signaturen und Sicherheitskonzepten.",
  },
  {
    title: "Microsoft 365 Business Beratung",
    text: "Wir zeigen Ihnen, wie Sie Outlook, OneDrive und Teams optimal nutzen – effizient, sicher und praxisnah.",
  },
  {
    title: "Datensicherung für Selbstständige",
    text: "Wir unterstützen Sie bei der Einrichtung sicherer Backups – sowohl lokal als auch in der Cloud.",
  },
  {
    title: "Digitale Ablage & Struktur",
    text: "Wir helfen Ihnen dabei, Ihre Dateien, Rechnungen und Kundendaten klar strukturiert zu organisieren.",
  },
  {
    title: "Workflows & Automatisierung",
    text: "Mit Power Automate automatisieren wir gemeinsam wiederkehrende Aufgaben – effizient und zeitsparend.",
  },
  {
    title: "Digitale Buchhaltung vorbereiten",
    text: "Wir unterstützen Sie bei der strukturierten Ablage Ihrer Belege, Rechnungen und Dokumente – optimal für Steuerberatung und Prüfung.",
  },
  {
    title: "Professionelle E-Mail-Signatur & Kommunikation",
    text: "Wir gestalten gemeinsam mit Ihnen eine einheitliche E-Mail-Signatur und optimieren Ihre Kommunikation in Outlook.",
  },
  {
    title: "Microsoft Forms & Power Automate für Kundenanfragen",
    text: "Wir zeigen Ihnen, wie Sie mit Microsoft Forms Anfragen sammeln und diese automatisiert verarbeiten können.",
  },
  {
    title: "Geräte- und Lizenzberatung für Selbstständige",
    text: "Wir helfen Ihnen bei der Auswahl von Hardware und Software – abgestimmt auf Ihr Business und Budget.",
  },
  {
    title: "Einfache Projektverwaltung mit Planner & To Do",
    text: "Wir richten für Sie eine klare Struktur für Aufgaben, Deadlines und Prioritäten ein – damit Sie stets den Überblick behalten.",
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
