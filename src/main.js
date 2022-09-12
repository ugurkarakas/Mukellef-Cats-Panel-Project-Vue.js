import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { appAxios, catAxios } from './utils/appAxios';
import store from './store';
import appHeader from "@/components/appHeader";

// createApp(App).mount('#app')
const app = createApp(App);
app.use(router);
app.component("appHeader", appHeader);
app.config.globalProperties.$appAxios = appAxios;
app.config.globalProperties.$catAxios = catAxios;
app.mount("#app");
app.use(store);