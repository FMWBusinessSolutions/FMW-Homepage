<template>
  <div class="cta-container" aria-label="Kontakt Call-to-Action">
    <section
      class="cta-header"
      itemscope
      itemtype="https://schema.org/Organization"
    >
      <h2 style="display: none">Unverbindliches Erstgespräch anfragen</h2>
      <p>
        Kontaktieren Sie uns jetzt gleich für ein unverbindliches Erstgespräch.
      </p>
      <div class="cta-buttons">
        <a
          href="mailto:office@fmw-solutions.at"
          class="cta-button"
          itemprop="email"
          rel="noopener"
        >
          E-Mail schreiben
        </a>
        <a
          href="tel:+4369914079312"
          class="cta-button"
          itemprop="telephone"
          rel="noopener"
        >
          Jetzt anrufen
        </a>
      </div>
      <div class="cta-details">
        <p>
          <span itemprop="telephone">+43 699 14079312</span> <br />
          <span itemprop="email">office@fmw-solutions.at</span>
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* === CTA Container === */
.cta-container {
  display: flex;
  justify-content: center;
}

/* === CTA Box === */
.cta-header {
  text-align: center;
  padding: 0.5rem;
  border-radius: 20px;
  background-color: #f0f8ff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: inline-block;
}

/* === CTA Buttons === */
.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 1rem 0;
}

/* === Button Style === */
.cta-button {
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #0056b3;
}

/* === CTA Contact Details === */
.cta-details p {
  font-size: 1rem;
  color: #333;
}
</style>
