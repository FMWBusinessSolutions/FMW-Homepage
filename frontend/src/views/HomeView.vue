<template>
  <div class="app-container">
    <section class="intro">
      <p>
        <u>Willkommen bei FMW – Business Solutions</u>
      </p>
      <div class="intro-text">
        <p>
          Ihr Partner im Bereich Hardware, Software, IT-Infrastruktur,
          Digitalisierung und Ki.<br />
          Für Privatpersonen, Selbstständige und kleine bis mittelgroße
          Unternehmen.
        </p>
      </div>
    </section>

    <Accordion>
      <AccordionTab>
        <template #header>
          <span class="accordion-header">Für Privatpersonen</span>
        </template>
        <div class="target-group" id="private">
          <p>
            <i class="pi pi-circle-on icon-bullet"></i>Ihr Computer ist defekt
            oder nach vielen Jahren einfach zu langsam?
          </p>
          <p>
            <i class="pi pi-circle-on icon-bullet"></i>Probleme mit dem W-Lan
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
          <p>
            <i class="pi pi-chevron-right icon-arrow"></i>
            <i class="pi pi-chevron-right icon-arrow"></i>
            Wir helfen Ihnen persönlich & individuell und finden für Sie die
            passende Lösung.
          </p>
        </div>
      </AccordionTab>

      <AccordionTab>
        <template #header>
          <span class="accordion-header">Für Selbstständige</span>
        </template>
        <div class="target-group" id="epu">
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
            Patienten- oder Kundendaten sicher und DSGVO-konform aufbewahren?
          </p>
          <br />
          <p>
            <i class="pi pi-chevron-right icon-arrow"></i>
            <i class="pi pi-chevron-right icon-arrow"></i>
            Wir haben das IT-Komplettpaket für Ihr Unternehmen
          </p>
          <p>
            <i class="pi pi-chevron-right icon-arrow"></i>
            <i class="pi pi-chevron-right icon-arrow"></i>
            Hardware, Software, Domain, Mailadresse, Homepage sowie die
            Einrichtung aller Geräte und automatisierte Datensicherung
          </p>
        </div>
      </AccordionTab>

      <AccordionTab>
        <template #header>
          <span class="accordion-header"
            >Für kleine und mittlere Unternehmen</span
          >
        </template>
        <div class="target-group" id="kmu">
          <p>Sie nutzen Microsoft Office365 in Ihrem Unternehmen?</p>
          <br />

          <p>
            <i class="pi pi-circle-on icon-bullet"></i>
            Sie möchten Zeit sparen, Prozesse vereinfachen und vorhandene
            Ressourcen effizienter nutzen?
          </p>
          <p>
            <i class="pi pi-circle-on icon-bullet"></i>
            Sie wünschen sich einfache, digitale Lösungen – ohne teure
            Zusatzsoftware oder zusätzliche Kosten?
          </p>
          <br />
          <p>
            <strong>
              Dann holen Sie mehr aus dem heraus, wofür Sie ohnehin schon
              bezahlen: </strong
            ><br />
            Microsoft Teams, SharePoint, Power Automate, Power BI, Power Apps &
            Co.
          </p>
          <br />
          <p>
            <i class="pi pi-chevron-right icon-arrow"></i>
            <i class="pi pi-chevron-right icon-arrow"></i>
            Über 20 Jahre Erfahrung in Maschinenbau & Prozessoptimierung
          </p>
          <p>
            <i class="pi pi-chevron-right icon-arrow"></i>
            <i class="pi pi-chevron-right icon-arrow"></i>
            Analyse, Optimierung und Digitalisierung Ihrer internen Abläufe –
            praxisnah und messbar
          </p>
          <p>
            <i class="pi pi-chevron-right icon-arrow"></i>
            <i class="pi pi-chevron-right icon-arrow"></i>
            Individuelle Lösungen mit der Microsoft Power Platform – ohne
            zusätzliche Software
          </p>
          <br />
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
</script>

<style scoped>
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  box-sizing: border-box;
}

.intro {
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 1.9em;
  font-weight: bold;
}

.intro-text {
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 0.8em;
  font-weight: normal;
}

.target-group {
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  background-color: #ffffffcc;
  margin: 0.2rem;
}

.target-group p {
  margin: 0 0 0.2rem;
  font-size: 1.1rem;
  line-height: 1.4;
}

.icon-bullet {
  font-size: 0.45rem;
  vertical-align: middle;
  margin-right: 0.3rem;
}

.icon-arrow {
  margin-right: 0.1rem;
}

/* Accordion Header Styling */
.p-accordion-header .accordion-header {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
