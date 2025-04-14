<template>
  <main class="page-wrapper" aria-label="IT-Hilfe & Fragen von Privatpersonen">
    <h1 class="section-heading">
      <u>IT-Hilfe für Private</u>
    </h1>

    <div class="intro-text">
      <p>
        Technik soll Ihnen das Leben erleichtern – nicht komplizierter machen.
        Egal ob langsamer PC, WLAN-Probleme oder Unsicherheiten beim
        Online-Banking: <br />Wir helfen individuell, persönlich und
        verständlich.
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
    title: "Hilfe bei PC- und Laptopproblemen",
    text: "Wir unterstützen Sie bei langsamen Geräten, Systemproblemen oder Softwarefehlern – verständlich und ohne Fachchinesisch.",
  },
  {
    title: "WLAN, Drucker & Heimnetzwerk",
    text: "Wir übernehmen die Einrichtung und Fehlerbehebung bei Internet, WLAN-Routern, Druckern und Smart-Home-Geräten.",
  },
  {
    title: "Gerätekauf & Ersteinrichtung",
    text: "Wir beraten Sie beim Kauf von Laptop, PC oder Drucker und übernehmen die Einrichtung und Datenübertragung.",
  },
  {
    title: "Datenrettung & Backup",
    text: "Wir retten verlorene Daten und helfen Ihnen, zukünftig sichere Backups zu erstellen – lokal oder in der Cloud.",
  },
  {
    title: "Online-Banking & Passwörter",
    text: "Wir zeigen Ihnen, wie Sie Ihre Konten absichern, Zwei-Faktor-Authentifizierung aktivieren und Passwörter sicher verwalten.",
  },
  {
    title: "Kindersicherung & Jugendschutz",
    text: "Wir helfen Ihnen, Geräte kindersicher zu machen – von Bildschirmzeit bis Inhaltsfilter.",
  },
  {
    title: "PC-Check & Frühjahrsputz",
    text: "Wir machen Ihren PC wieder flott – mit Updates, Bereinigung, Softwarecheck und Optimierung der Startzeit.",
  },
  {
    title: "Smartphone & Tablet",
    text: "Wir richten Ihr Mobilgerät ein, synchronisieren es mit Ihren Konten und erklären Ihnen alle wichtigen Funktionen.",
  },
  {
    title: "Cloud verstehen & sicher nutzen",
    text: "OneDrive, iCloud & Co – wir erklären Ihnen verständlich, wie Cloud-Speicher funktionieren und worauf Sie achten sollten.",
  },
  {
    title: "Microsoft 365 & OneDrive für Zuhause",
    text: "Wir bieten Ihnen eine verständliche Einführung in Outlook, OneDrive und Co. – optimal für Familien oder Einzelanwender.",
  },
];

useHead({
  title: "Unsere Leistungen für Privat, EPU und KMU | FMW – Business Solutions",
  meta: [
    {
      name: "description",
      content:
        "IT-Dienstleistungen für Privatpersonen, Selbstständige und Unternehmen in Oberösterreich – individuell & lösungsorientiert.",
    },
    { name: "robots", content: "index, follow" },
    {
      property: "og:title",
      content: "Unsere Leistungen | FMW – Business Solutions",
    },
    {
      property: "og:description",
      content:
        "Von Microsoft 365 bis Prozessautomatisierung – erfahren Sie, wie wir Sie unterstützen können.",
    },
    { property: "og:url", content: "https://fmw-solutions.at/services" },
    {
      property: "og:image",
      content: "https://fmw-solutions.at/assets/social-preview.jpg",
    },
  ],
  link: [{ rel: "canonical", href: "https://fmw-solutions.at/services" }],
});
</script>

<style src="@/assets/styles/serviceSection.css"></style>
