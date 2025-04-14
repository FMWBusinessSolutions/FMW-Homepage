<template>
  <main
    class="home-container"
    aria-label="Startseite – IT-Lösungen für Private, EPU & KMU"
  >
    <!-- Intro -->
    <section class="intro-section">
      <h1 class="intro-title">
        IT-Dienstleistungen für Privatpersonen, Selbstständige und KMUs
      </h1>
    </section>

    <Accordion class="accordion-wrapper" @tab-open="onTabOpen">
      <!-- Privatpersonen -->
      <AccordionTab>
        <template #header>
          <span
            class="accordion-title"
            ref="tabPrivate"
            aria-label="Accordion: IT-Hilfe für Privatpersonen in Waizenkirchen"
          >
            Für Privatpersonen
          </span>
        </template>
        <section class="target-group" id="private" ref="headerPrivate">
          <h2>IT-Hilfe für Privatpersonen</h2>
          <ul>
            <li>
              <i class="pi pi-circle-on icon-bullet"></i> Computer defekt oder
              zu langsam?
            </li>
            <li>
              <i class="pi pi-circle-on icon-bullet"></i> WLAN oder E-Mail
              funktioniert nicht?
            </li>
            <li>
              <i class="pi pi-circle-on icon-bullet"></i> Datenrettung oder
              Beratung beim Gerätekauf?
            </li>
            <li>
              <i class="pi pi-circle-on icon-bullet"></i> Fotos & Dokumente
              sicher speichern?
            </li>
          </ul>
          <p class="target-group-closing">
            <i class="pi pi-chevron-right icon-arrow"></i
            ><i class="pi pi-chevron-right icon-arrow"></i>
            Persönliche IT-Unterstützung – unkompliziert und verständlich.
          </p>
          <div class="button-row">
            <AppLinkButton
              label="Zu den IT-Services für Privatpersonen"
              href="/service"
              internal
            />
          </div>
        </section>
      </AccordionTab>

      <!-- Selbstständige -->
      <AccordionTab>
        <template #header>
          <span
            class="accordion-title"
            ref="tabEPU"
            aria-label="Accordion: IT-Lösungen für Selbstständige & EPU"
          >
            Für Selbstständige & EPU
          </span>
        </template>
        <section class="target-group" id="epu" ref="headerEPU">
          <h2>IT-Lösungen für Selbstständige & EPUs</h2>
          <ul>
            <li>
              <i class="pi pi-circle-on icon-bullet"></i> Eigene Domain &
              Mailadresse einrichten
            </li>
            <li>
              <i class="pi pi-circle-on icon-bullet"></i> DSGVO-konforme
              Kundendatenverwaltung
            </li>
            <li>
              <i class="pi pi-circle-on icon-bullet"></i> Komplettpakete:
              Hardware, Software & Support
            </li>
          </ul>
          <p class="target-group-closing">
            <i class="pi pi-chevron-right icon-arrow"></i
            ><i class="pi pi-chevron-right icon-arrow"></i>
            Digitale Lösungen für Einzelunternehmer.
          </p>
          <div class="button-row">
            <AppLinkButton
              label="Mehr über unsere Services für EPU"
              href="/service-epu"
              internal
            />
          </div>
        </section>
      </AccordionTab>

      <!-- KMU -->
      <AccordionTab>
        <template #header>
          <span
            class="accordion-title"
            ref="tabKMU"
            aria-label="Accordion: Digitalisierung für KMU"
          >
            IT-Lösungen für KMU
          </span>
        </template>
        <section class="target-group" id="kmu" ref="headerKMU">
          <h2>Digitalisierung & Prozessoptimierung für KMUs</h2>
          <ul>
            <li>
              <i class="pi pi-circle-on icon-bullet"></i> Microsoft 365 optimal
              nutzen
            </li>
            <li>
              <i class="pi pi-circle-on icon-bullet"></i> Wiederkehrende
              Aufgaben automatisieren
            </li>
            <li>
              <i class="pi pi-circle-on icon-bullet"></i> Verwaltungskosten
              nachhaltig senken
            </li>
            <li>
              <i class="pi pi-circle-on icon-bullet"></i> Schulungen für Ihre
              Mitarbeiter:innen
            </li>
          </ul>
          <p class="target-group-closing">
            <i class="pi pi-chevron-right icon-arrow"></i
            ><i class="pi pi-chevron-right icon-arrow"></i>
            Praxisnahe Lösungen – individuell & ohne teure Software.
          </p>
          <div class="button-row">
            <AppLinkButton
              label="Zu den Lösungen für KMU"
              href="/service-kmu"
              internal
            />
          </div>
        </section>
      </AccordionTab>
    </Accordion>

    <!-- Call-to-Action -->
    <CTA />
  </main>
</template>

<script setup>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import CTA from "@/components/CTA.vue";
import { ref } from "vue";
import { useHead } from "@vueuse/head";
import AppLinkButton from "@/components/AppLinkButton.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const headerPrivate = ref(null);
const headerEPU = ref(null);
const headerKMU = ref(null);
const tabPrivate = ref(null);
const tabEPU = ref(null);
const tabKMU = ref(null);

// Smooth scroll to opened tab
const onTabOpen = (event) => {
  const index = event.index ?? 0;
  const tabHeaderRefs = [tabPrivate, tabEPU, tabKMU];
  const target = tabHeaderRefs[index];
  setTimeout(() => {
    const el = target?.value;
    const menu = document.getElementById("menu-bar");
    const menuHeight = menu?.offsetHeight || 0;
    if (el) {
      const scrollTop = el.getBoundingClientRect().top + window.scrollY;
      const scrollTo = scrollTop - menuHeight - 20;
      window.scrollTo({ top: scrollTo, behavior: "smooth" });
    }
  }, 500);
};

useHead({
  title: "FMW – Business Solutions | Digitalisierung für EPU, KMU & Privat",
  meta: [
    {
      name: "description",
      content:
        "Individuelle IT-Beratung & Digitalisierung für Selbstständige, KMU und Privatpersonen im Raum Waizenkirchen. Jetzt informieren!",
    },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: "FMW – Business Solutions" },
    {
      property: "og:description",
      content:
        "Digitalisierung & IT-Beratung für Oberösterreich – effizient, professionell und persönlich.",
    },
    { property: "og:url", content: "https://fmw-solutions.at/" },
    {
      property: "og:image",
      content: "https://fmw-solutions.at/social-preview.png",
    },
  ],
  link: [{ rel: "canonical", href: "https://fmw-solutions.at/" }],
});
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
}

.intro-section {
  text-align: center;
  margin-bottom: 2rem;
}

.intro-title {
  font-size: clamp(1.6rem, 2.8vw, 2.2rem);
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.accordion-wrapper {
  width: 90%;
  margin: 0 auto 1rem auto;
}

.accordion-title {
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: bold;
}

.target-group {
  padding: 0.1rem 0 0 0;
  border-radius: 20px;
  background-color: #ffffffcc;
}

.target-group ul {
  padding-left: 1rem;
  list-style: none;
}

.target-group li {
  margin: 0.2rem 0;
  font-size: clamp(1rem, 2.1vw, 1.1rem);
  line-height: 1.6;
}

.target-group-closing {
  font-weight: 500;
  margin: 0.6rem 0;
  font-size: clamp(1rem, 2vw, 1.1rem);
}

.icon-bullet {
  font-size: clamp(0.4rem, 1vw, 0.5rem);
  vertical-align: middle;
  margin-right: 0.3rem;
  color: black;
}

.icon-arrow {
  margin-right: 0.2rem;
  color: black;
}

.button-row {
  display: flex;
  justify-content: left;
  padding-left: 0.5em;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}
</style>
