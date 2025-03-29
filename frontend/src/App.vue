<template>
  <div class="main-container">
    <MenuBar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import MenuBar from "./components/MenuBar.vue";
</script>
