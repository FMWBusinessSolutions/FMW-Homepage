<template>
  <main
    class="page-wrapper"
    aria-label="IT-Beratung und Digitalisierung für KMU"
  >
    <h1 class="section-heading">
      <u>IT-Beratung & Digitalisierung für KMUs</u>
    </h1>

    <div class="intro-text">
      <p>
        Im Unternehmen fehlt oft die Zeit, sich neben dem Tagesgeschäft auch um
        IT-Strukturen, digitale Abläufe oder moderne Zusammenarbeit zu kümmern.
        <br />
        Wir helfen Ihnen dabei, wiederkehrende Aufgaben effizient zu
        digitalisieren – mit Microsoft 365, Power Automate & SharePoint.
        Praxisnah. Verständlich. Lokal.
      </p>
    </div>

    <div class="button-row">
      <AppLinkButton label="Unverbindlich anfragen" href="/contact" internal />
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
          <h2 class="service-title" itemprop="name">{{ service.title }}</h2>
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
    title: "Prozesse digitalisieren mit Microsoft 365",
    text: "Wir analysieren Ihre Arbeitsabläufe und digitalisieren diese effizient mit SharePoint, Teams & Power Automate.",
  },
  {
    title: "Rechtemanagement & Benutzerverwaltung",
    text: "Wir schaffen Struktur und Sicherheit bei der Verwaltung von Zugriffsrechten für Dateien, Ordner & Teams.",
  },
  {
    title: "Moderne Dateiablage in der Cloud",
    text: "Wir helfen beim Umstieg auf eine zentrale Dateiablage in OneDrive & SharePoint – inklusive Schulung für Ihre Mitarbeiter:innen.",
  },
  {
    title: "Digitale Formulare & Genehmigungen",
    text: "Urlaubsanträge, Angebotsfreigaben, Reklamationen: Wir digitalisieren Ihre Abläufe – einfach & nachvollziehbar.",
  },
  {
    title: "Office-Schulungen für Ihr Team",
    text: "Wir schulen Ihre Mitarbeiter:innen in Outlook, Teams, SharePoint & Co – effizient und verständlich.",
  },
  {
    title: "IT-Dokumentation & Wissensmanagement",
    text: "Wir dokumentieren Ihre IT-Strukturen und Prozesse zentral – für mehr Klarheit, Effizienz und Übersicht.",
  },
  {
    title: "Datenschutz & Sicherheit",
    text: "Wir helfen beim Aufbau von Passwortkonzepten, Zugriffsbeschränkungen und DSGVO-konformen Prozessen.",
  },
  {
    title: "SharePoint-Struktur für Abteilungen",
    text: "Wir entwickeln mit Ihnen eine SharePoint-Lösung, die logisch aufgebaut ist und Rechte klar trennt.",
  },
  {
    title: "Standortübergreifend arbeiten",
    text: "Mehrere Standorte? Außendienst? Wir richten Lösungen ein, damit alle effizient & sicher zusammenarbeiten.",
  },
  {
    title: "Technische Beratung für KMU",
    text: "Ob Gerätekauf, Prozessanalyse oder Digitalisierungskonzept – wir beraten neutral und lösungsorientiert.",
  },
];

useHead({
  title: "IT-Beratung & Digitalisierung für KMU | FMW – Business Solutions",
  meta: [
    {
      name: "description",
      content:
        "Effiziente IT-Konzepte für kleine und mittlere Unternehmen – inkl. Schulungen, SharePoint, Microsoft 365 und Prozessoptimierung.",
    },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: "IT-Lösungen für KMU" },
    {
      property: "og:description",
      content:
        "Digitale Prozesse für Ihren Betrieb – verständlich und skalierbar.",
    },
    { property: "og:url", content: "https://fmw-solutions.at/kmu" },
    {
      property: "og:image",
      content: "https://fmw-solutions.at/assets/social-preview.jpg",
    },
  ],
  link: [{ rel: "canonical", href: "https://fmw-solutions.at/kmu" }],
});
</script>

<style src="@/assets/styles/serviceSection.css"></style>
