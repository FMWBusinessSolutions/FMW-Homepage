<template>
  <div class="header">
    <img
      src="/logo-transparent-small.png"
      alt="FMW Business Solutions"
      class="logo"
    />
  </div>
  <div class="header">
    <img
      src="/under_construction.png"
      alt="Under Construction"
      class="logo_small"
    />
  </div>

  <div class="card">
    <h3>Kontakt:</h3>
    <h5>Florian Mitter</h5>
    <h5>Geschäftsführer</h5>
    <h5>office@fmw-solutions.at</h5>
    <h5>+43 699 14079312</h5>
  </div>
</template>

<script setup lang="ts"></script>

<style>
body {
  background-color: #f0f8ff;
  margin: 0;
  font-family: Arial, sans-serif;
}

.header {
  padding: 2rem;
  text-align: center;
  border-radius: 12px;
}

.card {
  background-color: white;
  border-radius: 20px;
  padding: 0.1em;
  max-width: 300px;
  margin: 0.5rem auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

.card h5 {
  margin: 1px 0;
  line-height: 1.2;
}

.logo {
  width: 500px;
  margin-bottom: 1rem;
  align-self: left;
}
.logo_small {
  width: 400px;
  margin-bottom: 1rem;
  align-self: left;
}
</style>
