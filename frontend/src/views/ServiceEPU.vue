<template>
  <main
    class="page-wrapper"
    aria-label="IT-Beratung und Digitalisierung für Selbstständige & EPUs in Waizenkirchen"
  >
    <h1 class="section-heading">
      <u>IT-Unterstützung für Selbstständige & EPUs in Waizenkirchen</u>
    </h1>

    <div class="intro-text">
      <p>
        Als Einzelunternehmer:in sind Sie Vertrieb, Buchhaltung und Technik in
        einer Person. Damit Sie sich auf Ihr Kerngeschäft konzentrieren können,
        unterstützen wir Sie bei IT-Fragen, Tools, Prozessen und Automatisierung
        – speziell für EPUs in Waizenkirchen und Umgebung.
      </p>
    </div>

    <div class="button-row">
      <AppLinkButton
        label="Jetzt unverbindlich anfragen"
        href="/contact"
        internal
      />
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
    title: "IT-Basics für Selbstständige",
    text: "Wir helfen bei der Auswahl von Hardware und Software – passend zu Ihrem Geschäft und Budget.",
  },
  {
    title: "Datensicherung & Backups",
    text: "Sichern Sie Ihre Daten zuverlässig – lokal oder in der Cloud, DSGVO-konform und automatisiert.",
  },
  {
    title: "Kundendaten sicher speichern",
    text: "Sensible Kunden- oder Patientendaten DSGVO-konform organisieren und vor Zugriff schützen.",
  },
  {
    title: "Digitale Buchhaltung",
    text: "Belege, Rechnungen & Verträge digital und ordentlich ablegen – ideal für Steuerberater und Kontrolle.",
  },
  {
    title: "Microsoft 365 Business einrichten",
    text: "Wir zeigen Ihnen, wie Outlook, OneDrive, Word & SharePoint Ihren Büroalltag erleichtern.",
  },
  {
    title: "Professionelle E-Mail-Kommunikation",
    text: "Von Domain & Signatur bis zur idealen Outlook-Nutzung – wir machen Ihre Kommunikation effizient.",
  },
  {
    title: "Kundenanfragen automatisieren",
    text: "Mit Microsoft Forms & Power Automate Anfragen erfassen und Folgeprozesse automatisieren.",
  },
  {
    title: "Abläufe automatisieren mit Power Automate",
    text: "Wiederkehrende Aufgaben automatisch erledigen – spart Zeit und reduziert Fehlerquellen.",
  },
  {
    title: "Aufgaben- & Projektmanagement",
    text: "Aufgaben strukturieren, Deadlines im Blick behalten – für mehr Klarheit im Arbeitsalltag.",
  },
];

useHead({
  title:
    "IT-Lösungen & Digitalisierung für Selbstständige und EPUs in Waizenkirchen",
  meta: [
    {
      name: "description",
      content:
        "Beratung, Microsoft 365, sichere Datenspeicherung und Prozessoptimierung für Selbstständige in Waizenkirchen.",
    },
    { name: "robots", content: "index, follow" },
    {
      property: "og:title",
      content:
        "IT-Unterstützung für Selbstständige | FMW Solutions Waizenkirchen",
    },
    {
      property: "og:description",
      content:
        "Individuelle IT-Beratung und Digitalisierungslösungen für EPUs in Waizenkirchen und Umgebung. Jetzt informieren!",
    },
    { property: "og:url", content: "https://fmw-solutions.at/service-epu" },
    {
      property: "og:image",
      content: "https://fmw-solutions.at/social-preview.png",
    },
  ],
  link: [{ rel: "canonical", href: "https://fmw-solutions.at/service-epu" }],
});
</script>

<style src="@/assets/styles/serviceSection.css"></style>
