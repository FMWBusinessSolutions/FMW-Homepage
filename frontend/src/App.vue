<template>
  <div class="app-container">
    <header class="menu-bar" id="menu-bar">
      <MenuBar />
    </header>

    <main class="router-view">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import MenuBar from "./components/MenuBar.vue";
</script>

<style>
/* === Global Styles === */
body {
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f8ff;
  color: #222;
  line-height: 1.5;
}

a {
  text-decoration: none;
  color: inherit;
}

* {
  box-sizing: border-box;
}

html {
  overflow-y: scroll;
}

/* === App Container === */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* === Menu Bar === */
.menu-bar {
  flex-shrink: 0;
  background-color: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* === Router Content === */
.router-view {
  flex-grow: 1;
}
</style>
