<template>
  <main class="page-wrapper" aria-label="Fragen und IT-Lösungen">
    <h1 class="section-heading">
      <u>IT-Beratung & Digitalisierung für Selbstständige</u>
    </h1>

    <div class="intro-text">
      <p>
        Als Selbstständige oder Einzelunternehmer kennen Sie das: Sie sind
        Vertrieb, Buchhaltung und Technikabteilung in einem. Damit Sie sich auf
        Ihr Kerngeschäft konzentrieren können, unterstützen wir Sie bei allen
        Fragen rund um IT, Prozesse und digitale Werkzeuge.
        <br />
        Hier finden Sie typische Themen aus dem Arbeitsalltag von EPUs – mit
        praxisnahen Lösungen.
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
    title: "IT-Basics",
    text: "Wir helfen Ihnen bei der Auswahl von Hardware und Software – abgestimmt auf Ihr Business und Budget.",
  },
  {
    title: "Datensicherung",
    text: "Wir unterstützen Sie bei der Einrichtung sicherer Backups – sowohl lokal als auch in der Cloud.",
  },
  {
    title: "Kunden- und Patientendaten",
    text: "Wir zeigen Ihnen, wie Sie hochsensible Daten sicher und DSGVO-konform speichern und gegen unbefugten Zugriff schützen können.",
  },
  {
    title: "Digitale Buchhaltung",
    text: "Wir unterstützen Sie bei der strukturierten Ablage Ihrer Belege, Rechnungen und Dokumente – optimal für Steuerberatung und Prüfung.",
  },
  {
    title: "Microsoft 365 Business",
    text: "Wir zeigen Ihnen wie Outlook, OneDrive und Sharepoint Ihren Alltag erleichtern können.",
  },
  {
    title: "E-Mail & Kommunikation",
    text: "Wir gestalten gemeinsam mit Ihnen eine einheitliche E-Mail-Signatur und optimieren Ihre Kommunikation in Outlook.",
  },
  {
    title: "Kundenanfragen",
    text: "Wir zeigen Ihnen, wie Sie mit Microsoft Forms Anfragen sammeln und diese automatisiert verarbeiten können.",
  },
  {
    title: "Automatisierung",
    text: "Mit Power Automate automatisieren wir gemeinsam wiederkehrende Aufgaben – effizient und zeitsparend.",
  },
  {
    title: "Projektverwaltung mit Planner & To Do",
    text: "Wir richten für Sie eine klare Struktur für Aufgaben, Deadlines und Prioritäten ein – damit Sie stets den Überblick behalten.",
  },
];

// SEO metadata
useHead({
  title:
    "IT-Beratung für Selbstständige | Praxisnahe Lösungen | FMW Business Solutions",
  meta: [
    {
      name: "description",
      content:
        "IT-Support, Automatisierung & digitale Werkzeuge für EPUs. Entlastung im Arbeitsalltag – verständlich, sicher & individuell. FMW Business Solutions.",
    },
    {
      name: "keywords",
      content:
        "EPU, IT-Beratung, Digitalisierung, Microsoft 365, Power Automate, Outlook, DSGVO, Automatisierung, Selbstständige, FMW Business Solutions",
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
      href: "https://fmw-solutions.at/service-epu",
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
