<template>
  <div class="AppLinkButton">
    <RouterLink
      v-if="internal"
      :to="href"
      class="AppLinkButton-style"
      :class="buttonClass"
    >
      {{ label }}
    </RouterLink>
    <a
      v-else
      :href="href"
      class="AppLinkButton-style"
      :class="buttonClass"
      :target="target"
      :rel="rel"
    >
      {{ label }}
    </a>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  label: { type: String, default: "Button" },
  href: { type: String, required: true },
  internal: { type: Boolean, default: false },
  target: { type: String, default: "_self" },
  rel: { type: String, default: "noopener" },
  type: { type: String, default: "primary" }, // primary or secondary style
});

const buttonClass = computed(() =>
  props.type === "secondary" ? "secondary" : "primary"
);
</script>

<style scoped>
.AppLinkButton {
  display: inline-flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 0;
}

.AppLinkButton-style {
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s;
}

.AppLinkButton-style.primary {
  background-color: #007bff;
  color: white;
}

.AppLinkButton-style.primary:hover {
  background-color: #0056b3;
}

.AppLinkButton-style.secondary {
  background-color: #f8f9fa;
  color: #333;
  border: 1px solid #ccc;
}

.AppLinkButton-style.secondary:hover {
  background-color: #e2e6ea;
}
</style>
