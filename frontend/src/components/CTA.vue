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

      <div class="button-row">
        <AppLinkButton
          label="E-Mail schreiben"
          href="mailto:office@fmw-solutions.at"
        />
        <AppLinkButton label="Anrufen" href="tel:+4369914079312" />
      </div>

      <div class="cta-details">
        <p>
          <span itemprop="email">office@fmw-solutions.at</span>
          <br />
          <span itemprop="telephone">+43 699 14079312</span>
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import AppLinkButton from "@/components/AppLinkButton.vue";
</script>

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

.button-row {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}
</style>
