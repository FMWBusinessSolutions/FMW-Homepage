<template>
  <div class="app-container">
    <div class="content">
      <div class="card">
        <h1>Kontakt & Impressum</h1>

        <h3>FMW – Business Solutions</h3>
        <p>Gewerbeberechtigte Person</p>
        <p>Florian Mitter</p>
        <p>Hausleiten 58, A-4730 Waizenkirchen</p>
        Telefon:
        <a href="tel:+4369914079312" class="btn">+43 699 140 79 312</a>
        <p>
          E-Mail:
          <a href="mailto:office@fmw-solutions.at">office@fmw-solutions.at</a>
        </p>
        <p>
          Web:
          <a href="https://fmw-solutions.at/" target="_blank"
            >www.fmw-solutions.at</a
          >
        </p>
        <p>
          LinkedIn:
          <a
            href="https://linkedin.com/company/fmw-businesssolutions/"
            target="_blank"
          >
            FMW - Business Solutions
          </a>
        </p>

        <p>
          Mitglied der Wirtschaftskammer Oberösterreich in der Fachgruppe
          Unternehmensberatung und Informationstechnologie
        </p>

        <p>
          GISA-Zahl: 38110207 <br />
          <a href="https://www.gisa.gv.at/abfrage" target="_blank"
            >www.gisa.gv.at/abfrage</a
          >
        </p>

        <hr />

        <div class="privacy-section">
          <h2>Datenschutzerklärung</h2>

          <section>
            <h3>Für den Inhalt verantwortlich</h3>
            <p>
              Florian Mitter<br />
              Hausleiten 58, A-4730 Waizenkirchen<br />
              <a href="mailto:office@fmw-solutions.at"
                >office@fmw-solutions.at</a
              ><br />
              <a href="tel:+4369914079312" class="btn">+43 699 140 79 312</a>
            </p>
          </section>

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
              Beschwerden können Sie sich an die Datenschutzbehörde wenden.
              <a href="https://www.dsb.gv.at" target="_blank">www.dsb.gv.at</a>
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

<script setup></script>

<style scoped>
.app-container {
  padding-top: 5px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card {
  margin-top: 1em;
  background-color: white;
  align-self: center;
  border-radius: 30px;
  padding: 2em;
  max-width: 900px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  text-align: center;
  line-height: 1.6;
}

.card a {
  color: #007bff;
  text-decoration: none;
}

.card a:hover {
  text-decoration: underline;
}

.card h2,
.card h3 {
  margin-top: 2rem;
}

.privacy-section {
  font-size: 0.95rem;
  color: #333;
  text-align: center;
}

.privacy-section p,
.privacy-section section {
  text-align: center;
}

.privacy-section h2 {
  font-size: 1.4rem;
  text-align: center;
}

.privacy-section h3 {
  font-size: 1.1rem;
  margin-top: 1.5rem;
}

.footer-note {
  font-size: 0.9rem;
  margin-top: 3rem;
  text-align: center;
  color: #777;
}
</style>
