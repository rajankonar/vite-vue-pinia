import { createApp } from 'vue'
import './styles.css'
import App from './App.vue'
import { createWebHistory } from 'vue-router';
import createRouter from "./pages/routes.js";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createPinia } from 'pinia'

const store = createPinia()
const router = createRouter(createWebHistory());
store.use(piniaPluginPersistedstate);
createApp(App).use(router).use(store).mount('#app')
