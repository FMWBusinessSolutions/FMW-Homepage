<template>
  <div class="app-container">
    <div class="card">
      <h2>Florian Mitter</h2>
      Telefon:
      <a href="tel:+4369914079312">+43 699 140 79 312</a>
      <p>
        E-Mail:
        <a href="mailto:office@fmw-solutions.at">office@fmw-solutions.at</a>
      </p>
      <p>
        Web:
        <a href="https://fmw-solutions.at/" target="_blank">fmw-solutions.at</a>
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
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.app-container {
  padding-top: 0.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card {
  margin-top: 1em;
  background-color: white;
  border-radius: 30px;
  padding: 1em;
  max-width: 900px;
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

.card h2 {
  margin-top: 0.1rem;
}
</style>
