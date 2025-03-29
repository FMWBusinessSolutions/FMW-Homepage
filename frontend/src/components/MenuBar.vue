<template>
  <div class="menu-container">
    <Menubar :model="items" class="custom-menubar">
      <template #start>
        <svg
          width="55"
          height="60"
          viewBox="0 0 35 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="logo-icon"
        ></svg>
      </template>

      <template #item="{ item, props }">
  <router-link
    v-ripple
    class="menu-item flex items-center"
    v-bind="props.action"
    :to="item.to"
  >
    <i :class="item.icon"></i>
    <span class="ml-2">{{ item.label }}</span>
  </router-link>
</template>

    </Menubar>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  { label: 'Home', icon: 'pi pi-home', to: '/' },
  { label: 'Über uns', icon: 'pi pi-book', to: '/about' },
  { label: 'Kontakt', icon: 'pi pi-envelope', to: '/contact' }
]);

</script>

<style scoped>
.menu-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.custom-menubar {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  border: none;
  padding: 0.5rem 1rem;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
}

.p-menubar-root > .p-menubar-end {
  margin-left: auto;
}
</style>
