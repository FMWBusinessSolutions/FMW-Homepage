<template>
  <div
    class="cta-container"
    aria-label="Kontakt Call-to-Action für Waizenkirchen"
  >
    <section class="cta-header">
      <h2 style="display: none">Unverbindliche Beratung anfragen</h2>
      <p>Kontaktieren Sie uns für eine unverbindliche Beratung.</p>

      <div class="button-row">
        <AppLinkButton label="Jetzt anfragen" href="/contact" internal />
      </div>

      <div class="cta-details">
        <p>
          <span>office@fmw-solutions.at</span>
          <br />
          <span>+43 699 14079312</span>
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
