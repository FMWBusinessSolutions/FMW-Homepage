<template>
  <nav class="menu-container" aria-label="Hauptnavigation">
    <div class="menubar-content">
      <div class="logo-wrapper" role="banner">
        <img
          src="/schrift-solo-transparent-small.png"
          alt="FMW – Business Solutions Logo"
          class="logo-img"
        />
      </div>
      <div class="menubar-wrapper" role="menubar">
        <Menubar :model="enhancedItems" class="custom-menubar" />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Menubar from "primevue/menubar";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

// items
const items = ref([
  { label: "Home", icon: "pi pi-home", path: "/" },
  { label: "Für Private", icon: "pi pi-book", path: "/service" },
  { label: "Für EPU", icon: "pi pi-book", path: "/service-epu" },
  { label: "Für KMU", icon: "pi pi-book", path: "/service-kmu" },
  { label: "Kontakt", icon: "pi pi-envelope", path: "/contact" },
  { label: "Impressum", icon: "pi pi-info-circle", path: "/imprint" },
]);

// activeClass
const enhancedItems = computed(() =>
  items.value.map((item) => ({
    ...item,
    command: () => router.push(item.path),
    class:
      route.path === item.path || route.path.startsWith(item.path + "/")
        ? "active-menu-item"
        : "",
  }))
);
</script>

<style scoped>
/* === Menu Container === */
.menu-container {
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  background-color: rgba(240, 248, 255, 1);
  border-bottom: 1px solid black;
}

/* === Menubar Layout === */
.menubar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
}

.menubar-wrapper {
  flex: 1 1 auto;
  display: flex;
  justify-content: left;
}

/* === Logo === */
.logo-wrapper {
  flex: 0 0 auto;
  padding-left: 0.5rem;
  padding-right: 0.7rem;
  border-left: 1px solid black;
}

.logo-img {
  height: 9vw;
  max-height: 90px;
  width: auto;
  object-fit: contain;
}

/* === Custom Menubar === */
.custom-menubar {
  border: none;
  background: transparent;
  justify-content: center;
  margin-left: 1em;
  padding: 0;
  box-shadow: none;
  width: 60%;
}

/* === PrimeVue Menubar Overrides === */
::v-deep(.p-menubar-root) {
  background: transparent;
  border: none;
  width: 100%;
}

::v-deep(.p-menubar-root-list) {
  min-width: fit-content;
}

::v-deep(.p-menuitem-link) {
  font-size: 1.17em;
  color: black;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
}

::v-deep(.p-menuitem-icon) {
  font-size: 1.25em;
}

::v-deep(.p-menuitem-link:hover) {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
}

/* === active menu element === */
::v-deep(.active-menu-item .p-menuitem-link) {
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
  font-weight: bold;
  color: #cc5200;
}

/* === icon size === */
::v-deep(.p-menubar-button svg) {
  width: 1.5em;
  height: 1.5em;
}
</style>
