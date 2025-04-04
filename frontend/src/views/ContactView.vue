<template>
  <div class="contact-container">
    <div class="contact-card">
      <div class="contact-header">
        <h2 class="contact-company">FMW – Business Solutions</h2>
        <h2 class="contact-name">Florian Mitter</h2>
      </div>

      <div class="contact-info">
        <div class="contact-row">
          <span class="contact-label">Telefon:</span>
          <a href="tel:+4369914079312" class="contact-link"
            >+43 699 140 79 312</a
          >
        </div>

        <div class="contact-row">
          <span class="contact-label">E-Mail:</span>
          <a href="mailto:office@fmw-solutions.at" class="contact-link"
            >office@fmw-solutions.at</a
          >
        </div>

        <div class="contact-row">
          <span class="contact-label">Web:</span>
          <a
            href="https://fmw-solutions.at/"
            class="contact-link"
            target="_blank"
            >fmw-solutions.at</a
          >
        </div>

        <div class="contact-row">
          <span class="contact-label">LinkedIn:</span>
          <a
            href="https://linkedin.com/company/fmw-businesssolutions/"
            class="contact-link"
            target="_blank"
          >
            FMW – Business Solutions
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* === Contact Container === */
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em 1em;
}

/* === Contact Card === */
.contact-card {
  background-color: white;
  border-radius: 30px;
  padding: 2em;
  padding-top: 1em;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  text-align: center;
}

/* === Header Section === */
.contact-header {
  margin-bottom: 1em;
}

.contact-company {
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0.2em 0;
  margin-bottom: 0.5em;
}

.contact-name {
  font-size: 1.4rem;
  margin: 0.2em 0;
}

/* === Contact Information === */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.contact-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}

.contact-label {
  font-weight: 600;
  margin-bottom: 0.2em;
  color: #444;
}

.contact-link {
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
}

.contact-link:hover {
  text-decoration: underline;
}
</style>
