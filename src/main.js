import { createApp } from "vue";
import App from "./App.vue";

//importer notre base scss
import "@/assets/base.scss";

const app = createApp(App);

app.mount("#app");
