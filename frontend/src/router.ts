import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import Service from "@/views/ServiceView.vue";
import ContactView from "@/views/ContactView.vue";
import ImprintView from "@/views/ImprintView.vue";


const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/service", name: "Service", component: Service },
  { path: "/contact", name: "Contact", component: ContactView },
  { path: "/imprint", name: "Imprint", component: ImprintView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
