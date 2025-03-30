<template>
  <div class="app-container">
    <section class="intro">
      <h1><u>Willkommen bei FMW - Business Solutions</u></h1>
      <h2>
        Ihr Partner im Bereich Hardware, Software, IT-Infrastruktur,
        Digitalisierung und KI.
      </h2>
      <h3>
        Für Privatpersonen, Einzelunternehmer:innen und kleine bis mittelgroße
        Unternehmen.
      </h3>
    </section>

    <Accordion :multiple="true">
      <AccordionTab :headerStyle="{ fontSize: '1.3rem', fontWeight: 'bold' }">
        <template #header>
          <span>Für Private</span>
        </template>
        <div class="target-group" id="private">
          <p>
            Ihr Computer ist defekt oder nach vielen Jahren einfach zu langsam?
          </p>
          <p>Probleme mit dem W-Lan oder dem E-Mail-Account?</p>
          <p>
            Festplatte oder Speicherkarte defekt und Sie benötigen eine
            Datenrettung?
          </p>
          <p>Ihr Kind braucht einen passenden Laptop für die Schule?</p>
          <p>
            Sie wollen Ihre persönlichen Dokumente oder Fotos sicher
            aufbewahren?
          </p>
          <br />
          <p>
            <i class="pi pi-chevron-right"></i>
            <i class="pi pi-chevron-right"></i>
            Wir beraten persönlich & individuell und finden für Sie die passende
            Lösung.
          </p>
        </div>
      </AccordionTab>

      <AccordionTab :headerStyle="{ fontSize: '1.3rem', fontWeight: 'bold' }">
        <template #header>
          <span>Für EPU</span>
        </template>
        <div class="target-group" id="epu">
          <p>Sie sind selbstständig oder wollen es werden?</p>
          <p>
            Sie wünschen sich einen professionellen Online-Auftritt mit Homepage
            und Mailadresse?
          </p>
          <p>Am besten gleich mit Ihrer eigenen Domain – @IhrUnternehmen.at?</p>
          <p>
            Sie wollen Ihre Buchhaltung oder sensible Kundendaten sicher und
            DSGVO-konform aufbewahren?
          </p>
          <p>
            Wir unterstützen Sie bei Hardware, Software, Ihrem Online-Auftritt
            und sicheren Speicherlösungen.
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
          <span>Für KMU</span>
        </template>
        <div class="target-group" id="kmu">
          <p>
            Fragen zur Digitalisierung, Industrie 4.0 oder dem Einsatz von KI in
            Ihrem Unternehmen?
          </p>
          <p>
            Sie möchten Verwaltungskosten senken und Ihre Ressourcen effizienter
            nutzen?
          </p>
          <p>
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
          <em
            >„Digitalisierung ist keine einzelne Maßnahme in der IT, sondern ein
            Prozess im ganzen Unternehmen.“</em
          >
        </div>
      </AccordionTab>
    </Accordion>

    <div class="cta-container">
      <section class="cta-section">
        <h2>Bereit für den nächsten Schritt?</h2>
        <p>Kontaktieren Sie uns für ein unverbindliches Erstgespräch.</p>
        <div class="cta-buttons">
          <a href="mailto:office@fmw-solutions.at" class="btn secondary"
            >E-Mail schreiben</a
          >
          <a href="tel:+4369914079312" class="btn">Jetzt anrufen</a>
        </div>
        <div class="cta-contact-details">
          <p>office@fmw-solutions.at / +43 699 14079312</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
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

.intro h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.intro h2,
.intro h3,
.target-group h2,
.cta-section h2 {
  margin: 0.5rem 0;
  font-size: 1.5rem;
  color: #333;
}

.target-group,
.cta-section {
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  background-color: #ffffffcc;
  margin-bottom: 2.5rem;
}

.cta-section {
  text-align: center;
  background-color: #f0f8ff;
}

.target-group p,
.cta-section p {
  margin: 0 0 0.4rem;
  font-size: 1.1rem;
  line-height: 1.5;
}

.cta-section p:last-child {
  margin-bottom: 0;
}

.cta-section h2 {
  margin-bottom: 0.5rem;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.cta-contact-details p {
  font-size: 1rem;
  color: #333;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #0056b3;
}

.btn.secondary {
  background-color: #6c757d;
}

.btn.secondary:hover {
  background-color: #495057;
}

.p-accordion-header-text {
  word-break: break-word;
}

/* Responsive */
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

  .target-group,
  .cta-section {
    padding: 1rem;
    margin-bottom: 1.5rem;
  }

  .intro h2,
  .intro h3,
  .target-group h2,
  .cta-section h2 {
    font-size: 1.2rem;
  }

  .target-group p,
  .cta-section p {
    font-size: 1rem;
  }
}
</style>
