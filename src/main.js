// import "./assets/scripts/heartslider.min.js";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/main.css";
/* HeartSlider */
// import "/node_modules/heartslider/dist/heartslider.min.js";

/* HighlightJS */
// import "highlight.js/styles/stackoverflow-light.css";
// import "highlight.js/lib/common";
// import hljsVuePlugin from "@highlightjs/vue-plugin";

import "highlight.js/styles/stackoverflow-light.css";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("css", css);

// Vue.use(VueHighlightJS);
const app = createApp(App);
// app.use("highlight.js/lib/common");
app.use(hljsVuePlugin);
app.mount("#app");
