import { createApp } from "vue";
import App from "./App.vue";
import "./theme.css";
import translatePlagin from "./translatePlagin";

// createApp(App)
//   .directive("focus", {
//     mounted(el) {
//       el.focus()
//     },
//   })
// .mount("#app");

const app = createApp(App);

const ru = {
  app: {
    title: "как работают плагины во vue",
    buttonChange: "переключить язык",
  },
};
const en = {
  app: {
    title: "how to work plugins in vue",
    buttonChange: "Switch Language",
  },
};

app.use(translatePlagin, { ru, en });
app.mount("#app");
