<template>
  <div class="app-container">
    <MenuBar />

    <div class="content">
      <img src="/under_construction.png" class="under-img" />
      <div class="card">
        <h3>Kontakt:</h3>
        <h5>Florian Mitter</h5>
        <h5>Geschäftsführer</h5>
        <h5>office@fmw-solutions.at</h5>
        <h5>+43 699 14079312</h5>
      </div>
    </div>
  </div>
</template>

<script setup>
import MenuBar from "./components/MenuBar.vue";
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f0f8ff;
}

.app-container {
  padding-top: 80px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card {
  background-color: white;
  align-self: center;
  border-radius: 30px;
  padding: 1em;
  padding-top: 0;
  max-width: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  text-align: center;
  line-height: 0.5;
}

.card h5 {
  margin: 2px 0;
  line-height: 1.4;
}

.under-img {
  max-width: 500px;
  margin-bottom: 1rem;
}
</style>
