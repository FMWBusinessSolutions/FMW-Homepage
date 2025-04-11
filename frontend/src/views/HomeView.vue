<template>
  <!-- Main page container -->
  <main class="home-container">
    <!-- Intro section -->
    <section class="intro-section">
      <h1 class="intro-title">
        Digitalisierung & Beratung für Privatpersonen, Selbstständige und KMUs
        in Oberösterreich
      </h1>
    </section>

    <!-- Accordion target groups -->
    <Accordion class="accordion-wrapper" @tab-open="onTabOpen">
      <!-- Target group: Private individuals -->
      <AccordionTab>
        <template #header>
          <span class="accordion-title" ref="tabPrivate"
            >Für Privatpersonen</span
          >
        </template>
        <section class="target-group" id="private" ref="headerPrivate">
          <h2>IT-Hilfe für Privatpersonen</h2>
          <p>
            <i class="pi pi-circle-on icon-bullet"></i> Ihr Computer ist defekt
            oder zu langsam?
          </p>
          <p>
            <i class="pi pi-circle-on icon-bullet"></i> WLAN oder E-Mail
            funktioniert nicht richtig?
          </p>
          <p>
            <i class="pi pi-circle-on icon-bullet"></i> Sie benötigen
            Datenrettung oder Geräteberatung?
          </p>
          <p>
            <i class="pi pi-circle-on icon-bullet"></i> Sicherheit für Dokumente
            und Fotos gewünscht?
          </p>
          <br />
          <p class="target-group-closing">
            <i class="pi pi-chevron-right icon-arrow"></i
            ><i class="pi pi-chevron-right icon-arrow"></i>
            Wir helfen persönlich & individuell mit passenden IT-Lösungen.
          </p>
        </section>
      </AccordionTab>

      <!-- Target group: Self-employed -->
      <AccordionTab>
        <template #header>
          <span class="accordion-title" ref="tabEPU">Für Selbstständige</span>
        </template>
        <section class="target-group" id="epu" ref="headerEPU">
          <h2>IT-Lösungen für Selbstständige und EPUs</h2>
          <p>
            <i class="pi pi-circle-on icon-bullet"></i> Professioneller Auftritt
            mit Domain & Mailadresse?
          </p>
          <p>
            <i class="pi pi-circle-on icon-bullet"></i> DSGVO-konforme
            Datenverarbeitung?
          </p>
          <p>
            <i class="pi pi-circle-on icon-bullet"></i> Alles aus einer Hand:
            Hardware, Software & Einrichtung
          </p>
          <br />
          <p class="target-group-closing">
            <i class="pi pi-chevron-right icon-arrow"></i
            ><i class="pi pi-chevron-right icon-arrow"></i>
            Komplettlösungen für Ihre Selbstständigkeit
          </p>
        </section>
      </AccordionTab>

      <!-- Target group: SMEs -->
      <AccordionTab>
        <template #header>
          <span class="accordion-title" ref="tabKMU"
            >Für kleine und mittlere Unternehmen</span
          >
        </template>
        <section class="target-group" id="kmu" ref="headerKMU">
          <h2>Digitalisierung & Prozessoptimierung für KMUs</h2>
          <p>
            <i class="pi pi-circle-on icon-bullet"></i> Mehr aus Microsoft 365
            herausholen?
          </p>
          <p>
            <i class="pi pi-circle-on icon-bullet"></i> Automatisierung mit
            Power Automate & Co?
          </p>
          <br />
          <p class="target-group-highlight">
            <strong>Unsere Kernkompetenz:</strong><br />
            SharePoint, Teams, Power Automate, Power BI, Power Apps
          </p>
          <br />
          <p class="target-group-closing">
            <i class="pi pi-chevron-right icon-arrow"></i
            ><i class="pi pi-chevron-right icon-arrow"></i>
            20+ Jahre Erfahrung im Maschinenbau & in der Prozessoptimierung
          </p>
          <p class="target-group-closing">
            <i class="pi pi-chevron-right icon-arrow"></i
            ><i class="pi pi-chevron-right icon-arrow"></i>
            Praxisnahe Digitalisierungslösungen ohne zusätzliche Software
          </p>
        </section>
      </AccordionTab>
    </Accordion>
    <!-- Internal link to services -->
    <div class="link-button-wrapper">
      <RouterLink
        to="/service"
        class="p-button p-button-primary p-button-rounded"
      >
        Unsere Leistungen im Überblick
      </RouterLink>
    </div>

    <!-- CTA section -->
    <CTA />
  </main>
</template>

<script setup>
// components
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import CTA from "@/components/CTA.vue";
import { ref } from "vue";
import { useHead } from "@vueuse/head";
import Button from "primevue/button";
import { useRouter } from "vue-router";
import { nextTick } from "vue";
import { RouterLink } from "vue-router";

const router = useRouter();

// Accordion tab references
const headerPrivate = ref(null);
const headerEPU = ref(null);
const headerKMU = ref(null);
const tabPrivate = ref(null);
const tabEPU = ref(null);
const tabKMU = ref(null);

// Scroll behavior for accordion tabs
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

      window.scrollTo({
        top: scrollTo,
        behavior: "smooth",
      });
    }
  }, 500);
};

// SEO head data
useHead({
  title: "FMW – Digitalisierung & Beratung für KMU in Oberösterreich",
  meta: [
    {
      name: "description",
      content:
        "FMW – Business Solutions unterstützt Selbstständige & KMUs bei der Nutzung von Microsoft 365, Power Automate und SharePoint – effizient und praxisnah.",
    },
    {
      name: "keywords",
      content:
        "Digitalisierung, Beratung, KMU, EPU, Microsoft 365, Power Automate, SharePoint, Oberösterreich, IT-Service, Prozessoptimierung",
    },
  ],
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
  padding: 0.1rem;
  padding-top: 0;
  border-radius: 20px;
  background-color: #ffffffcc;
}

.target-group p {
  margin: 0.2rem 0;
  font-size: clamp(1rem, 2.1vw, 1.1rem);
  line-height: 1.6;
}

.target-group-highlight {
  margin: 1rem 0;
  font-size: clamp(1rem, 2.1vw, 1.1rem);
  color: #222;
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

.link-button-wrapper {
  display: flex;
  justify-content: center;
  margin: 2.5rem 0 1.5rem;
}

.link-button-wrapper .p-button {
  padding: 0.75rem 1.5rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: white;
}
</style>
