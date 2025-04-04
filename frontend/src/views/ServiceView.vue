<template>
  <div class="page-wrapper">
    <h2 class="section-heading"><u>Ihre Fragen, unsere Lösungen</u></h2>

    <section class="service-section">
      <div class="service-grid">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="service-item"
        >
          <h3 class="service-title">{{ service.titel }}</h3>
          <div class="service-content-card">
            <p class="service-description">
              {{ service.beschreibung }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="section-separator"></div>

    <section class="pricing-section">
      <div class="pricing-card">
        <div class="pricing-header">
          <h3 class="pricing-title">
            <u>Wir legen Wert auf Transparenz und faire Preise.</u>
          </h3>
        </div>
        <div class="pricing-details">
          <p class="pricing-info">
            Unser Stundensatz für Dienstleistungen beträgt 68 € inkl. MwSt
          </p>
          <p class="pricing-info">
            Die Erstberatung per Telefon oder E-Mail sowie die Angebotslegung
            sind grundsätzlich kostenlos.
          </p>
          <p class="pricing-info">
            Bei größeren Projekten mit höherem Planungsaufwand behalten wir uns
            vor den Aufwand in Rechnung zu stellen. <br />Dies geschieht jedoch
            ausschließlich nach vorheriger Absprache.
          </p>
          <p class="pricing-info">
            Im Umkreis von 5 km um Waizenkirchen berechnen wir keine
            Fahrtkosten.
          </p>
          <p class="pricing-info">
            Ab 5 km berechnen wir unseren normalen Stundensatz.
          </p>
        </div>
      </div>
    </section>

    <CTA />
  </div>
</template>

<script setup lang="ts">
import CTA from "@/components/CTA.vue";

const services = [
  {
    titel: "Warum ist mein PC so langsam?",
    beschreibung:
      "Wir prüfen Ihr Gerät auf unnötige Programme und Systembremsen. Gemeinsam schaffen wir wieder spürbar mehr Tempo.",
  },
  {
    titel: "Warum druckt mein Gerät nicht?",
    beschreibung:
      "Wir bringen Ihren Drucker wieder zum Laufen – egal ob Kabel, WLAN oder Treiberproblem. Auch für den Ausdruck vom Handy oder Tablet.",
  },
  {
    titel: "Wie werde ich Viren oder PopUps los?",
    beschreibung:
      "Wir prüfen Ihr Gerät auf Schadsoftware und richten einen verlässlichen Schutz ein – für sicheres Surfen ohne Störungen.",
  },
  {
    titel: "Wie lege ich Kunden- oder Patientendaten sicher ab?",
    beschreibung:
      "Wir zeigen Ihnen, wie Sie hochsensible Daten DSGVO-konform sicher und zuverlässig speichern und vor fremdem Zugriff schützen können.",
  },
  {
    titel: "Wie kann ich Datenverlust vermeiden?",
    beschreibung:
      "Wir richten automatische Sicherungen für Fotos, Dokumente und E-Mails ein – lokal oder in der Cloud. Damit nichts mehr verloren geht.",
  },

  {
    titel: "Wie behalte ich den Überblick über meine Buchhaltung?",
    beschreibung:
      "Wir erstellen eine einfache Lösung zur Ablage und Organisation von Angeboten & Rechnungen – ganz ohne teure Software.",
  },
  {
    titel: "Wie merke ich mir all meine Passwörter?",
    beschreibung:
      "Wir zeigen Ihnen, wie Sie mit einem Passwort-Manager oder dem Microsoft Authenticator sicher und bequem alle Passwörter verwalten.",
  },
  {
    titel: "Wie verwalte ich meine Termine effizient?",
    beschreibung:
      "Wir zeigen Ihnen, wie Sie Termine digital verwalten – allein oder im Team. Mit Outlook, Teams oder auf Ihrer Website.",
  },
  {
    titel: "Welche Hard- und Software benötige ich?",
    beschreibung:
      "Wir prüfen Ihre Anforderungen und empfehlen passende Geräte & Tools – nicht zu viel, nicht zu wenig. Einrichtung inklusive.",
  },

  {
    titel: "Wie schütze ich mich vor Datenverlust & Phishing?",
    beschreibung:
      "Wir richten Schutzmechanismen ein: E-Mail-Filter, automatische Backups Ihrer Daten, Zwei-Faktor-Authentifizierung – sicher, einfach und zuverlässig.",
  },
];
</script>

<style scoped>
/* === Page Layout === */
.page-wrapper {
  padding: 2em 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* === Section Heading === */
.section-heading {
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.5em;
  margin-top: 0em;
  color: #333;
}

/* === Service Section === */
.service-section {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 1.5em;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5em;
  width: 90%;
  max-width: 1200px;
}

/* === Individual Service Cards === */
.service-item {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
}

.service-title {
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 0;
  margin-bottom: 0.2em;
  text-align: center;
  min-height: 2.5em;
  padding: 0 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-content-card {
  background-color: white;
  border-radius: 30px;
  padding: 1em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  width: 100%;
  text-align: left;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.service-description {
  font-size: 1.1rem;
  line-height: 1.4em;
}

/* === Section Divider === */
.section-separator {
  width: 80%;
  height: 2px;
  background-color: #000;
  margin: 0em 0;
}

/* === Pricing Section === */
.pricing-section {
  padding-top: 1.5em;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
}

.pricing-card {
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  padding: 1em;
  padding-top: 0;
  max-width: 1000px;
  width: 90%;
  text-align: center;
}

.pricing-header {
  margin-bottom: 1em;
}

.pricing-title {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}

.pricing-details {
  text-align: left;
  font-size: 1rem;
  line-height: 1.2em;
}

.pricing-info {
  margin-bottom: 0.6em;
}
</style>
