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
  padding: 1em;
  padding-top: 0.5em;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  text-align: center;
}

/* === Header Section === */
.contact-header {
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.contact-company {
  font-size: clamp(1.2rem, 1rem + 1.8vw, 1.8rem);
  font-weight: bold;
  margin: 0;
  white-space: nowrap;
  overflow: visible;
  text-align: center;
}

.contact-name {
  font-size: clamp(1.1rem, 3.5vw, 1.4rem);
  font-weight: 600;
  margin: 0.3em 0 0.8em 0;
  line-height: 1.8rem;
}

/* === Contact Information === */
.contact-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  text-align: center;
}

.contact-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: clamp(0.95rem, 1.7vw, 1.1rem);
  line-height: 1.3;
  margin: 0.1em 0;
}

.contact-label {
  font-weight: 600;
  margin: 0 0.3em 0 0;
  color: #444;
}

.contact-link {
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
  margin: 0;
  white-space: nowrap;
}

.contact-link:hover {
  text-decoration: underline;
}
</style>
