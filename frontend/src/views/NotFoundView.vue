<template>
  <main class="home-container text-center py-8">
    <!-- Intro-Text -->
    <section class="intro-section">
      <h1 class="intro-title">Seite nicht gefunden</h1>
      <p class="target-group-closing">
        Die angeforderte Seite existiert nicht oder wurde verschoben.
      </p>
    </section>

    <!-- Button zurück zur Startseite -->
    <div class="button-row justify-center">
      <AppLinkButton label="Zur Startseite" href="/" internal />
    </div>
  </main>
</template>

<script setup lang="ts">
import AppLinkButton from "@/components/AppLinkButton.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: "Seite nicht gefunden – FMW Business Solutions",
  meta: [
    {
      name: "description",
      content:
        "Diese Seite existiert nicht oder wurde verschoben. Zurück zur Startseite von FMW – Business Solutions.",
    },
  ],
});
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
}

.intro-section {
  text-align: center;
  margin-bottom: 2rem;
}

.intro-title {
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.target-group-closing {
  font-weight: 500;
  margin: 0.6rem 0;
  font-size: clamp(1rem, 2vw, 1.1rem);
}

.button-row {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}
</style>
