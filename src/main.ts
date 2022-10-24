//import { useRouter } from "@/router";
import { useRouter } from "@/router";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";

const app = createApp(App);
app.use(createPinia());
app.use(useRouter);
app.mount("#app");
