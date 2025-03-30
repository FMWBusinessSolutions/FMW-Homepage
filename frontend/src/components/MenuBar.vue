<template>
  <div class="menu-container">
    <div class="menubar-content">
      <div class="logo-wrapper">
        <img
          src="@/components/logo-transparent-small.png"
          alt="Logo"
          class="logo-img"
        />
      </div>

      <nav class="menu-links">
        <router-link to="/" class="menu-item">
          <i class="pi pi-home"></i>
          <span>Home</span>
        </router-link>
        <router-link to="/offer" class="menu-item">
          <i class="pi pi-book"></i>
          <span>Leistungen & Preise</span>
        </router-link>
        <router-link to="/contact" class="menu-item">
          <i class="pi pi-envelope"></i>
          <span>Kontakt & Impressum</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  { label: "Home", icon: "pi pi-home", to: "/" },
  { label: "Leistungen & Preise", icon: "pi pi-book", to: "/offer" },
  { label: "Kontakt & Impressum", icon: "pi pi-envelope", to: "/contact" },
]);
</script>

<style scoped>
.menu-container {
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  background-color: rgba(240, 248, 255, 1);
  border-bottom: 1px solid black;
}

.menubar-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 2vw;
  box-sizing: border-box;
}

.logo-wrapper {
  flex: 0 1 auto;
  border-right: 1px solid black;

  padding-right: 2rem;
  margin-right: 2rem;
}

.logo-img {
  height: 20vw;
  max-height: 120px;
  width: auto;
  object-fit: contain;
}

.menu-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0.5rem 1.5rem;
  flex: 1 1 300px;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem;
  font-size: 150%;
  color: black;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 1;
}

.menu-item i {
  font-size: 120%;
}
</style>
