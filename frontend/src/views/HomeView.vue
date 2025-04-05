<template>
  <div class="home-container">
    <section class="intro-section">
      <p class="intro-title">
        <u>Willkommen bei FMW – Business Solutions</u>
      </p>
      <div class="intro-subtext">
        <p>
          Ihr Partner im Bereich Hardware, Software, IT-Infrastruktur,
          Digitalisierung und KI.<br />
          Für Privatpersonen, Selbstständige und kleine bis mittelgroße
          Unternehmen.
        </p>
      </div>
    </section>

    <Accordion class="accordion-wrapper" @tab-open="onTabOpen">
      <AccordionTab>
        <template #header>
          <span class="accordion-title" ref="tabPrivate"
            >Für Privatpersonen</span
          >
        </template>
        <div class="target-group" id="private" ref="headerPrivate">
          <p>
            <i class="pi pi-circle-on icon-bullet"></i>Ihr Computer ist defekt
            oder nach vielen Jahren einfach zu langsam?
          </p>
          <p>
            <i class="pi pi-circle-on icon-bullet"></i>Probleme mit dem WLAN
            oder dem E-Mail-Account?
          </p>
          <p>
            <i class="pi pi-circle-on icon-bullet"></i>Festplatte oder
            Speicherkarte defekt und Sie benötigen eine Datenrettung?
          </p>
          <p>
            <i class="pi pi-circle-on icon-bullet"></i>Ihr Kind braucht einen
            passenden Laptop für die Schule?
          </p>
          <p>
            <i class="pi pi-circle-on icon-bullet"></i>Sie wollen Ihre
            persönlichen Dokumente oder Fotos sicher aufbewahren?
          </p>
          <p>
            <i class="pi pi-circle-on icon-bullet"></i>Sie möchten ein neues
            Gerät und benötigen eine Beratung?
          </p>
          <br />
          <p class="target-group-closing">
            <i class="pi pi-chevron-right icon-arrow"></i
            ><i class="pi pi-chevron-right icon-arrow"></i>
            Wir helfen Ihnen persönlich & individuell und finden für Sie die
            passende Lösung.
          </p>
        </div>
      </AccordionTab>

      <AccordionTab>
        <template #header>
          <span class="accordion-title" ref="tabEPU">Für Selbstständige</span>
        </template>
        <div class="target-group" id="epu" ref="headerEPU">
          <p>
            <i class="pi pi-circle-on icon-bullet"></i>Sie sind selbstständig
            oder wollen es werden?
          </p>
          <p>
            <i class="pi pi-circle-on icon-bullet"></i>Sie möchten einen
            professionellen Online-Auftritt mit eigener Homepage und
            Mailadresse?
          </p>
          <p>
            <i class="pi pi-circle-on icon-bullet"></i>Am besten gleich mit
            Ihrer eigenen Domain – @IhrUnternehmen.at?
          </p>
          <p>
            <i class="pi pi-circle-on icon-bullet"></i>Sie wollen hochsensible
            Kunden- oder Patientendaten sicher & DSGVO-konform aufbewahren?
          </p>
          <br />
          <p class="target-group-closing">
            <i class="pi pi-chevron-right icon-arrow"></i
            ><i class="pi pi-chevron-right icon-arrow"></i>
            Wir haben das IT-Komplettpaket für Ihr Unternehmen
          </p>
          <p class="target-group-closing">
            <i class="pi pi-chevron-right icon-arrow"></i
            ><i class="pi pi-chevron-right icon-arrow"></i>
            Hardware, Software, Homepage sowie die Einrichtung aller notwendigen
            Geräte und und Accounts.
          </p>
        </div>
      </AccordionTab>

      <AccordionTab>
        <template #header>
          <span class="accordion-title" ref="tabKMU"
            >Für kleine und mittlere Unternehmen</span
          >
        </template>
        <div class="target-group" id="kmu" ref="headerKMU">
          <p>Sie nutzen Microsoft Office365 in Ihrem Unternehmen?</p>
          <br />
          <p>
            <i class="pi pi-circle-on icon-bullet"></i>Sie möchten Zeit sparen,
            Prozesse vereinfachen und Ressourcen effizienter nutzen?
          </p>
          <p>
            <i class="pi pi-circle-on icon-bullet"></i>Sie wünschen sich
            einfache digitale Lösungen – ohne teure Zusatzsoftware?
          </p>
          <br />
          <p class="target-group-highlight">
            <strong
              >Dann holen Sie mehr aus dem heraus, wofür Sie ohnehin schon
              bezahlen:</strong
            ><br />
            Microsoft Teams, SharePoint, Power Automate, Power BI, Power Apps &
            Co.
          </p>
          <br />
          <p class="target-group-closing">
            <i class="pi pi-chevron-right icon-arrow"></i
            ><i class="pi pi-chevron-right icon-arrow"></i>
            Über 20 Jahre Erfahrung in Maschinenbau & Prozessoptimierung
          </p>
          <p class="target-group-closing">
            <i class="pi pi-chevron-right icon-arrow"></i
            ><i class="pi pi-chevron-right icon-arrow"></i>
            Analyse, Optimierung und Digitalisierung Ihrer internen Abläufe –
            praxisnah und messbar
          </p>
          <p class="target-group-closing">
            <i class="pi pi-chevron-right icon-arrow"></i
            ><i class="pi pi-chevron-right icon-arrow"></i>
            Individuelle Lösungen mit der Microsoft Power Platform – ohne
            zusätzliche Software
          </p>
        </div>
      </AccordionTab>
    </Accordion>

    <CTA />
  </div>
</template>

<script setup>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import CTA from "@/components/CTA.vue";
import { ref } from "vue";

// Refs to content containers
const headerPrivate = ref(null);
const headerEPU = ref(null);
const headerKMU = ref(null);

// Refs to visible tab header elements
const tabPrivate = ref(null);
const tabEPU = ref(null);
const tabKMU = ref(null);

// Scroll to the visible tab header when a section is expanded
const onTabOpen = (event) => {
  const index = event.index ?? 0;
  const tabHeaderRefs = [tabPrivate, tabEPU, tabKMU];
  const target = tabHeaderRefs[index];

  // Delay to wait for the accordion animation to finish
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
</script>

<style scoped>
/* === Home Container === */
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
}

/* === Intro Section === */
.intro-section {
  text-align: center;
  margin-bottom: 2rem;
}

.intro-title {
  font-size: clamp(1.4rem, 2.3vw, 1.7rem);
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.intro-subtext p {
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: normal;
  color: #333;
  margin: 0;
}

/* === Accordion Section === */
.accordion-wrapper {
  width: 80%;
  margin: 0 auto 1rem auto;
}

.accordion-title {
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: bold;
}

/* === Target Group Content === */
.target-group {
  padding: 1rem;
  padding-top: 0;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  background-color: #ffffffcc;
  margin: 0.5rem 0;
}

.target-group p {
  margin: 0.2rem 0;
  font-size: clamp(1rem, 2.1vw, 1.1rem);
  line-height: 1.5;
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

/* === Icons === */
.icon-bullet {
  font-size: clamp(0.4rem, 1vw, 0.5rem);
  vertical-align: middle;
  margin-right: 0.3rem;
}

.icon-arrow {
  margin-right: 0.2rem;
}
</style>
