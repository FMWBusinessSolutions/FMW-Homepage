<template>
  <div class="main-container">
    <MenuBar />
    <div class="content-container">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuBar from "./components/MenuBar.vue";
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: rgba(240, 248, 255, 1);
}

.content-container {
  padding-top: 120px;
}
</style>
