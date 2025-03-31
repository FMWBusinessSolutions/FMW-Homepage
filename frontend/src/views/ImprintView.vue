<template>
  <div class="app-container">
    <div class="content">
      <div class="card">
        <h3>Gewerbeberechtigte Person & Inhaber</h3>
        <p>Florian Mitter</p>
        <p>Hausleiten 58</p>
        <p>A-4730 Waizenkirchen</p>

        <div class="privacy-section">
          <section>
            <h3>Zweck der Datenverarbeitung</h3>
            <p>
              Personenbezogene Daten (z. B. Name, E-Mail-Adresse) werden
              ausschließlich zur Bearbeitung Ihrer Anfrage gespeichert und
              verarbeitet. Es erfolgt keine Weitergabe an Dritte.
            </p>
            <p>
              Die Verarbeitung erfolgt im Einklang mit der
              <a
                href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001597"
                target="_blank"
                >Datenschutz-Grundverordnung (DSGVO)</a
              >
              sowie dem
              <a
                href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=bundesnormen&Gesetzesnummer=20011678"
                target="_blank"
                >Telekommunikationsgesetz 2021 (TKG 2021)</a
              >.
            </p>
          </section>

          <section>
            <h3>Rechtsgrundlage</h3>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
              (Vertragserfüllung) und/oder Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse).
            </p>
          </section>

          <section>
            <h3>Ihre Rechte</h3>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung, Datenübertragbarkeit und Widerspruch. Bei
              Beschwerden können Sie sich an
              <a href="mailto:office@fmw-solutions.at"
                >office@fmw-solutions.at</a
              >
              oder die Datenschutzbehörde wenden.
            </p>
          </section>

          <p class="footer-note">Stand: März 2025 • Änderungen vorbehalten</p>
        </div>

        <br />
        <p><small>© Florian Mitter – Alle Rechte vorbehalten.</small></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  padding-top: 3px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card {
  margin-top: 0.3em;
  background-color: white;
  border-radius: 30px;
  padding: 2em;
  max-width: 600px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  text-align: left;
}

.card a {
  color: #007bff;
  text-decoration: none;
}

.card a:hover {
  text-decoration: underline;
}

.card h3 {
  margin-top: 0.1rem;
}

.card p,
.card h3,
.card small {
  line-height: 1.2;
}

.privacy-section {
  font-size: 0.95rem;
  color: #333;
}

.privacy-section h3 {
  font-size: 1.1rem;
  margin-top: 1.5rem;
}

.footer-note {
  font-size: 0.9rem;
  margin-top: 3rem;
  color: #777;
}
</style>
