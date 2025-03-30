<template>
  <div class="menu-container">
    <div class="menubar-content">
      <img
        src="@/components/logo-transparent-small.png"
        alt="Logo"
        class="logo-img"
      />

      <Menubar :model="items" class="menubar">
        <template #start> </template>

        <template #item="{ item, props }">
          <router-link
            v-ripple
            class="menu-item"
            v-bind="props.action"
            :to="item.to"
          >
            <i :class="item.icon"></i>
            <span>{{ item.label }}</span>
          </router-link>
        </template>
      </Menubar>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  { label: "Home", icon: "pi pi-home", to: "/" },
  { label: "Leistungen & Preise", icon: "pi pi-book", to: "/about" },
  { label: "Kontakt & Impressum", icon: "pi pi-envelope", to: "/contact" },
]);
</script>

<style scoped>
.menu-container {
  position: fixed;
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
  justify-content: space-between;
  width: 100%;
  padding: 1rem 2vw;
  box-sizing: border-box;
}

.logo-img {
  height: 100px;
  max-width: 100%;
  object-fit: contain;
}

.menubar {
  flex: 1;
  min-width: 250px;
  border: none;
  background-color: transparent;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: 1.1rem;
  color: black;
  text-decoration: none;
  white-space: nowrap;
}

.menu-item i {
  font-size: 2.2rem;
}
</style>
