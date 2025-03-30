<template>
  <div class="app-container">
    <section class="intro">
      <h2>
        <u><strong>Willkommen bei FMW – Business Solutions</strong></u>
      </h2>
      <h3>
        Ihr Partner im Bereich Hardware, Software, IT-Infrastruktur,
        Digitalisierung und KI.<br />
        Für Privatpersonen, Einzelunternehmer und kleine bis mittelgroße
        Unternehmen.
      </h3>
    </section>

    <Accordion>
      <AccordionTab :headerStyle="{ fontSize: '1.3rem', fontWeight: 'bold' }">
        <template #header>
          <span>Für Privatpersonen</span>
        </template>
        <div class="target-group" id="private">
          <p>
            <i
              class="pi pi-circle-on"
              style="font-size: 0.45rem; vertical-align: middle"
            ></i>
            Ihr Computer ist defekt oder nach vielen Jahren einfach zu langsam?
          </p>
          <p>
            <i
              class="pi pi-circle-on"
              style="font-size: 0.45rem; vertical-align: middle"
            ></i>
            Probleme mit dem W-Lan oder dem E-Mail-Account?
          </p>
          <p>
            <i
              class="pi pi-circle-on"
              style="font-size: 0.45rem; vertical-align: middle"
            ></i>
            Festplatte oder Speicherkarte defekt und Sie benötigen eine
            Datenrettung?
          </p>
          <p>
            <i
              class="pi pi-circle-on"
              style="font-size: 0.45rem; vertical-align: middle"
            ></i>
            Ihr Kind braucht einen passenden Laptop für die Schule?
          </p>
          <p>
            <i
              class="pi pi-circle-on"
              style="font-size: 0.45rem; vertical-align: middle"
            ></i>
            Sie wollen Ihre persönlichen Dokumente oder Fotos sicher
            aufbewahren?
          </p>
          <p>
            <i
              class="pi pi-circle-on"
              style="font-size: 0.45rem; vertical-align: middle"
            ></i>
            Sie wollen ein neues Gerät kaufen und benötigen eine Kaufberatung?
          </p>
          <br />
          <p>
            <i class="pi pi-chevron-right"></i
            ><i class="pi pi-chevron-right"></i> Wir beraten persönlich &
            individuell und finden für Sie die passende Lösung.
          </p>
        </div>
      </AccordionTab>

      <AccordionTab :headerStyle="{ fontSize: '1.3rem', fontWeight: 'bold' }">
        <template #header>
          <span>Für Selbstständige und Ein-Personen-Unternehmen (EPU)</span>
        </template>
        <div class="target-group" id="epu">
          <p>
            <i
              class="pi pi-circle-on"
              style="font-size: 0.45rem; vertical-align: middle"
            ></i>
            Sie sind selbstständig oder wollen es werden?
          </p>
          <p>
            <i
              class="pi pi-circle-on"
              style="font-size: 0.45rem; vertical-align: middle"
            ></i>
            Sie wünschen sich einen professionellen Online-Auftritt mit Homepage
            und Mailadresse?
          </p>
          <p>
            <i
              class="pi pi-circle-on"
              style="font-size: 0.45rem; vertical-align: middle"
            ></i>
            Am besten gleich mit Ihrer eigenen Domain – @IhrUnternehmen.at?
          </p>
          <p>
            <i
              class="pi pi-circle-on"
              style="font-size: 0.45rem; vertical-align: middle"
            ></i>
            Sie wollen Ihre Buchhaltung oder sensible Patienten- oder
            Kundendaten sicher und DSGVO-konform aufbewahren?
          </p>
          <br />
          <p>
            <i class="pi pi-chevron-right"></i
            ><i class="pi pi-chevron-right"></i> Wir bieten Ihnen das
            IT-Komplettpaket für Ihren erfolgreichen Start
          </p>
          <p>
            <i class="pi pi-chevron-right"></i
            ><i class="pi pi-chevron-right"></i> Hardware, Software, Domain,
            Mailadresse, Homepage sowie die Einrichtung aller Geräte und
            automatisierte Datensicherung
          </p>
        </div>
      </AccordionTab>

      <AccordionTab :headerStyle="{ fontSize: '1.3rem', fontWeight: 'bold' }">
        <template #header>
          <span>Für kleine und mittlere Unternehmen (KMU)</span>
        </template>
        <div class="target-group" id="kmu">
          <p>
            <i
              class="pi pi-circle-on"
              style="font-size: 0.45rem; vertical-align: middle"
            ></i>
            Fragen zur Digitalisierung, Industrie 4.0 oder dem Einsatz von KI in
            Ihrem Unternehmen?
          </p>
          <p>
            <i
              class="pi pi-circle-on"
              style="font-size: 0.45rem; vertical-align: middle"
            ></i>
            Sie möchten Verwaltungskosten senken und Ihre Ressourcen effizienter
            nutzen?
          </p>
          <p>
            <i
              class="pi pi-circle-on"
              style="font-size: 0.45rem; vertical-align: middle"
            ></i>
            Wiederkehrende Prozesse sollen automatisiert werden – ohne teure
            Software, Schulungen und zusätzliche Lizenzkosten?
          </p>
          <br />
          <p>
            <i class="pi pi-chevron-right"></i
            ><i class="pi pi-chevron-right"></i> Über 20 Jahre praktische
            Erfahrung aus dem Maschinenbau
          </p>
          <p>
            <i class="pi pi-chevron-right"></i
            ><i class="pi pi-chevron-right"></i> Prozessanalyse nach REFA / Lean
          </p>
          <p>
            <i class="pi pi-chevron-right"></i
            ><i class="pi pi-chevron-right"></i> Spezialisierung auf Microsoft
            365 und die Power Platform.
          </p>
          <br />
        </div>
      </AccordionTab>
    </Accordion>

    <CallToAction />
  </div>
</template>

<script setup>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import CallToAction from "@/components/CallToAction.vue";
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
  margin-bottom: 3rem;
}

.target-group {
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  background-color: #ffffffcc;
  margin-bottom: 2.5rem;
}

.target-group p {
  margin: 0 0 0.4rem;
  font-size: 1.1rem;
  line-height: 1.5;
}

.p-accordion-header-text {
  word-break: break-word;
}

@media (max-width: 768px) {
  .app-container {
    padding: 1.5rem 1rem;
  }

  .intro h1 {
    font-size: 1.6rem;
  }

  .intro h2 {
    font-size: 1.3rem;
  }

  .intro h3 {
    font-size: 1.1rem;
  }

  .target-group {
    padding: 1rem;
    margin-bottom: 1.5rem;
  }

  .target-group p {
    font-size: 1rem;
  }
}
</style>
