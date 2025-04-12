<template>
  <main class="page-wrapper" aria-label="Fragen und IT-Lösungen">
    <h1 class="section-heading">
      <u>IT-Unterstützung für Privatpersonen</u>
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
    title: "Hilfe bei PC- und Laptopproblemen",
    text: "Wir unterstützen Sie bei langsamen Geräten, Systemproblemen oder Softwarefehlern – verständlich und ohne Fachchinesisch.",
  },
  {
    title: "WLAN, Drucker & Heimnetzwerk",
    text: "Wir übernehmen die Einrichtung und Fehlerbehebung bei Internet, WLAN-Routern, Druckern und Smart-Home-Geräten.",
  },
  {
    title: "Microsoft 365 & OneDrive für Zuhause",
    text: "Wir bieten Ihnen eine verständliche Einführung in Outlook, OneDrive und Co. – optimal für Familien oder Einzelanwender.",
  },
  {
    title: "Datenrettung & Backup-Lösungen",
    text: "Wir retten verlorene Daten und helfen Ihnen, zukünftig sichere Backups zu erstellen – lokal oder in der Cloud.",
  },
  {
    title: "Smartphone & Tablet Hilfe",
    text: "Wir richten Ihr Mobilgerät ein, synchronisieren es mit Ihren Konten und erklären Ihnen alle wichtigen Funktionen – inkl. Datensicherung.",
  },
  {
    title: "Kindersicherung & Jugendschutz",
    text: "Wir helfen Ihnen, Geräte kindersicher zu machen – von Bildschirmzeit bis Webfilter, alles verständlich erklärt.",
  },
  {
    title: "Gerätekauf & Ersteinrichtung",
    text: "Wir beraten Sie beim Kauf von Laptop, PC oder Drucker und übernehmen die Einrichtung und Datenübertragung.",
  },
  {
    title: "Cloud verstehen & sicher nutzen",
    text: "OneDrive, iCloud & Co – wir erklären Ihnen verständlich, wie Cloud-Speicher funktionieren und worauf Sie achten sollten.",
  },
  {
    title: "Sicheres Online-Banking & Passwörter",
    text: "Wir zeigen Ihnen, wie Sie Ihre Konten absichern, Zwei-Faktor-Authentifizierung aktivieren und Passwörter sicher verwalten.",
  },
  {
    title: "PC-Leistungs-Check & Frühjahrsputz",
    text: "Wir machen Ihren PC wieder flott – mit Updates, Bereinigung, Softwarecheck und Optimierung der Startzeit.",
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
