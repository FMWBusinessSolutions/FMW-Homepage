import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import Offer from "@/views/OfferView.vue";
import ContactView from "@/views/ContactView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/offer", name: "Offer", component: Offer },
  { path: "/contact", name: "Contact", component: ContactView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
