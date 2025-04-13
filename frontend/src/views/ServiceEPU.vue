<template>
  <main
    class="page-wrapper"
    aria-label="IT-Beratung und Lösungen für Selbstständige & EPUs"
  >
    <h1 class="section-heading">
      <u>IT-Beratung & Digitalisierung für EPUs</u>
    </h1>

    <div class="intro-text">
      <p>
        Als Einzelunternehmer:in sind Sie Vertrieb, Buchhaltung und Technik in
        einer Person. Damit Sie sich auf Ihr Kerngeschäft konzentrieren können,
        unterstützen wir Sie bei IT-Fragen, Tools, Prozessen und
        Automatisierung.
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
  title: "IT-Beratung für Selbstständige & EPUs | FMW Waizenkirchen",
  meta: [
    {
      name: "description",
      content:
        "IT-Unterstützung für Selbstständige: Microsoft 365, Automatisierung, Datensicherung, DSGVO & digitale Ablage. Persönlich & verständlich für EPUs in Oberösterreich.",
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "FMW – Business Solutions" },
  ],
  link: [{ rel: "canonical", href: "https://fmw-solutions.at/service-epu" }],
  script: [
    // Dynamische FAQPage mit allen Einträgen
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
    // Servicebeschreibung für Google Local & Branchenportale
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "IT-Beratung für Selbstständige & EPUs",
        provider: {
          "@type": "LocalBusiness",
          name: "FMW – Business Solutions",
          url: "https://fmw-solutions.at/service-epu",
        },
        description:
          "Beratung & Lösungen für Microsoft 365, Datensicherung, Automatisierung und digitale Ablage für Einzelunternehmer:innen in Oberösterreich.",
        areaServed: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressRegion: "Oberösterreich",
            addressCountry: "AT",
          },
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Waizenkirchen",
              addressRegion: "Oberösterreich",
              postalCode: "4730",
              addressCountry: "AT",
            },
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "IT-Lösungen für EPUs",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.text,
            },
          })),
        },
      }),
    },
    // Breadcrumb für SEO-Navigation
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Startseite",
            item: "https://fmw-solutions.at/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "IT-Beratung für Selbstständige",
            item: "https://fmw-solutions.at/service-epu",
          },
        ],
      }),
    },
  ],
});
</script>

<style src="@/assets/styles/serviceSection.css"></style>
