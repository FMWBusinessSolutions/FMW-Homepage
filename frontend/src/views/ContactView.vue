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
        <br />
        <p>
          Weitere Informationen entnehmen Sie bitte der<br />
          <a href="/datenschutz">Datenschutzerklärung</a>.
        </p>
        <br />
        <p><small>© Florian Mitter – Alle Rechte vorbehalten.</small></p>
      </div>
    </div>
  </div>
</template>

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
  max-width: 600px;
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
</style>
