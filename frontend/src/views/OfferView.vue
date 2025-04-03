<template>
  <div class="app-container">
    <div class="content">
      <!-- Obere Preis-Card -->
      <div class="card-preise text-compact">
        <h3 class="text-center">
          <p>
            <u>Wir legen Wert auf Transparenz und faire Preise. </u>
          </p>
        </h3>
        <div class="leistungen-text">
          <p>Unser Stundensatz beträgt 68 € inkl. MwSt</p>
          <p>
            Die Erstberatung per Telefon oder E-Mail sowie die Angebotslegung
            sind grundsätzlich kostenlos.
          </p>
          <p>
            Bei größeren Projekten mit höherem Planungsaufwand behalten wir uns
            vor den Aufwand in Rechnung zu stellen, dies geschieht aber nur nach
            vorheriger Absprache.
          </p>
          <p>
            Im Umkreis von 5 km um Waizenkirchen berechnen wir keinen
            Fahrtkosten.
          </p>
          <p>Ab 5km berechnen wir unseren normalen Stundensatz.</p>
        </div>
      </div>

      <!-- Trennlinie -->
      <div class="trennlinie"></div>

      <!-- Angebotsübersicht -->
      <div class="column-grid">
        <div
          v-for="(paket, index) in pakete"
          :key="index"
          class="category-column"
        >
          <h3 class="category-title">{{ paket.titel }}</h3>
          <div class="card angebot-card">
            <p>{{ paket.beschreibung }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <CallToAction />
</template>

<script setup lang="ts">
import CallToAction from "@/components/CallToAction.vue";

const pakete = [
  {
    titel: "Warum ist mein PC so langsam?",
    beschreibung:
      "Wir prüfen Ihr Gerät auf unnötige Programme und Systembremsen. Gemeinsam schaffen wir wieder spürbar mehr Tempo – ohne Datenverlust.",
  },
  {
    titel: "Wie kann ich Datenverlust vermeiden?",
    beschreibung:
      "Wir richten automatische Sicherungen für Fotos, Dokumente und E-Mails ein – lokal oder in der Cloud. Damit nichts mehr verloren geht.",
  },
  {
    titel: "Wie merke ich mir all meine Passwörter?",
    beschreibung:
      "Wir zeigen Ihnen, wie Sie mit einem Passwort-Manager oder dem Microsoft Authenticator sicher und bequem alle Passwörter verwalten.",
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
    titel: "Welche Hard- und Software benötige ich?",
    beschreibung:
      "Wir prüfen Ihre Anforderungen und empfehlen passende Geräte & Tools – nicht zu viel, nicht zu wenig. Einrichtung inklusive.",
  },
  {
    titel: "Wie lege ich Kunden- oder Patientendaten sicher ab?",
    beschreibung:
      "Wir zeigen Ihnen, wie Sie hochsensible Daten DSGVO-konform sicher und zuverlässig speichern und vor fremdem Zugriff schützen können.",
  },
  {
    titel: "Wie schütze ich mich vor Datenverlust & Phishing?",
    beschreibung:
      "Wir richten Schutzmechanismen ein: E-Mail-Filter, automatische Backups Ihrer Daten, Zwei-Faktor-Authentifizierung – sicher, einfach und zuverlässig.",
  },
  {
    titel: "Wie behalte ich den Überblick über meine Buchhaltung?",
    beschreibung:
      "Wir erstellen eine einfache Lösung zur Ablage und Organisation von Angeboten & Rechnungen – ganz ohne teure Software.",
  },
  {
    titel: "Wie verwalte ich meine Termine effizient?",
    beschreibung:
      "Wir zeigen Ihnen, wie Sie Termine digital verwalten – allein oder im Team. Mit Outlook, Teams oder auf Ihrer Website.",
  },
];
</script>

<style scoped>
.app-container {
  padding: 10px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-preise {
  background-color: white;
  border-radius: 30px;
  padding: 1em;
  padding-top: 0.2em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  max-width: 1200px;
  width: 90%;
  font-size: 1.2rem;
  text-align: center;
}

.card-preise.text-compact p {
  margin-bottom: 0.5em;
  line-height: 1em;
}

.trennlinie {
  width: 100%;
  height: 2px;
  background-color: black;
  margin: 2em 0;
  border-radius: 1px;
}

.text-center {
  text-align: center;
}

.leistungen-text {
  text-align: left;
  margin-top: 0.4em;
  font-size: 0.9em;
}

.column-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1em;
  width: 90%;
  align-items: stretch;
}

.category-column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  height: 100%;
}

.category-title {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1em;
  padding: 0 0.5em;
  min-height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.angebot-card {
  background-color: white;
  border-radius: 30px;
  padding: 1em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
}
</style>
