<template>
  <main class="page-wrapper" aria-label="Fragen und IT-Lösungen">
    <h1 class="section-heading">
      <u>IT-Beratung & Digitalisierung für KMU</u>
    </h1>

    <div class="intro-text">
      <p>
        Im Tagesgeschäft kleiner und mittlerer Unternehmen bleibt oft keine
        Zeit, sich mit IT-Prozessen oder Digitalisierung zu beschäftigen. Genau
        hier setzen wir an: Wir helfen Ihnen, wiederkehrende Abläufe effizienter
        zu gestalten – mit praxistauglichen Tools und verständlicher Beratung.
        <br />
        Werfen Sie einen Blick auf typische IT-Themen, die wir gemeinsam mit
        Ihnen erfolgreich umsetzen können.
      </p>
    </div>

    <div class="button-row">
      <AppLinkButton label="Jetzt anfragen" href="/contact" internal />
    </div>

    <div class="separator"></div>

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
import AppLinkButton from "@/components/AppLinkButton.vue";

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
  {
    title: "IT-Beratung für den Mittelstand",
    text: "Wir begleiten Sie individuell bei technischen Fragen – von Gerätekauf bis Digitalisierungskonzept.",
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

<style src="@/assets/styles/serviceSection.css"></style>
