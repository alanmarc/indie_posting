// main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify"; // Importa Vuetify desde el archivo separado
import "./styles/global.css"; // Estilos globales

// Crear la app de Vue y montar Vuetify y el router
createApp(App).use(router).use(vuetify).mount("#app");
