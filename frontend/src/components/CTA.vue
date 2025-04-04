<template>
  <div class="cta-container">
    <section class="cta-header">
      <p>
        Kontaktieren Sie uns jetzt gleich für ein unverbindliches Erstgespräch.
      </p>
      <div class="cta-buttons">
        <a href="mailto:office@fmw-solutions.at" class="btn"
          >E-Mail schreiben</a
        >
        <a href="tel:+4369914079312" class="btn">Jetzt anrufen</a>
      </div>
      <div class="cta-details">
        <p>Florian Mitter / office@fmw-solutions.at / +43 699 14079312</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.cta-container {
  display: flex;
  justify-content: center;
}

.cta-header {
  text-align: center;
  font-size: 1.2em;
  padding: 0.5rem;
  border-radius: 20px;
  background-color: #f0f8ff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: inline-block;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 1rem 0;
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

.cta-details p {
  font-size: 1rem;
  color: #333;
}
</style>
