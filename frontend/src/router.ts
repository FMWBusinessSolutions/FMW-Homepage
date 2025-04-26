import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import Service from "@/views/Service.vue";
import ServiceEPU from "@/views/ServiceEPU.vue";
import ServiceKMU from "@/views/ServiceKMU.vue";
import ContactView from "@/views/ContactView.vue";
import ImprintView from "@/views/ImprintView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/service", name: "ServicePrivate", component: Service },
  { path: "/service-epu", name: "ServiceEPU", component: ServiceEPU },
  { path: "/service-kmu", name: "ServiceKMU", component: ServiceKMU },
  { path: "/contact", name: "Contact", component: ContactView },
  { path: "/imprint", name: "Imprint", component: ImprintView },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
  }
  

];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
