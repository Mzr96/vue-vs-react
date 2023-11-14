import { createApp } from "vue";
import "./style.css";
import ApiService from "./core/services/ApiService";
import App from "./App.vue";
const app = createApp(App);
ApiService.init(app);
app.mount("#app");
