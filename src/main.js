// import "./assets/scripts/heartslider.min.js";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/main.css";

/* HighlightJS */
import "highlight.js/styles/stackoverflow-light.css";
// import "highlight.js/lib/common";
// import "highlight.js/lib/common";
// import hljsVuePlugin from "@highlightjs/vue-plugin";

// Vue.use(VueHighlightJS);
const app = createApp(App);
// app.use("highlight.js/lib/common");
app.mount("#app");
