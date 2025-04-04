<template>
  <div class="menu-container">
    <div class="menubar-content">
      <div class="menubar-wrapper">
        <Menubar :model="items" class="custom-menubar" />
      </div>
      <div class="logo-wrapper">
        <img
          src="@/components/schrift-solo-transparent-small.png"
          alt="Logo"
          class="logo-img"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Menubar from "primevue/menubar";
import { useRouter } from "vue-router";

const router = useRouter();

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
    command: () => router.push("/"),
  },
  {
    label: "Leistungen & Preise",
    icon: "pi pi-book",
    command: () => router.push("/service"),
  },
  {
    label: "Kontakt",
    icon: "pi pi-envelope",
    command: () => router.push("/contact"),
  },
  {
    label: "Impressum",
    icon: "pi pi-info-circle",
    command: () => router.push("/imprint"),
  },
]);
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
  padding: 0.5rem;
}

.menubar-wrapper {
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
}

/* === Logo === */
.logo-wrapper {
  flex: 0 0 auto;
  padding-left: 1rem;
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

::v-deep(.p-menubar-button svg) {
  width: 1.5em;
  height: 1.5em;
}
</style>
