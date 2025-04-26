import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import Menubar from "primevue/menubar";
import Avatar from "primevue/avatar";
import Badge from "primevue/badge";
import InputText from "primevue/inputtext";

import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import './assets/MobileResponsive.css';

const app = createApp(App);

app.use(router);
app.use(PrimeVue);

app.component("Menubar", Menubar);
app.component("Avatar", Avatar);
app.component("Badge", Badge);
app.component("InputText", InputText);

router.isReady().then(() => {
  app.mount("#app");
});
