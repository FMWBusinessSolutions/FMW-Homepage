import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import Offer from "@/views/OfferView.vue";
import ContactView from "@/views/ContactView.vue";
import DsgvoView from "@/views/DSGVO_View.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/offer", name: "Offer", component: Offer },
  { path: "/contact", name: "Contact", component: ContactView },
  { path: "/datenschutz", name: "DSGVO", component: DsgvoView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
