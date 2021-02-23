const h = Vue.h;

const app = Vue.createApp({
  data() {
    return {
      title: " Это свойство template",
      title_new: " Изменили!",
    };
  },
  methods: {
    changeTitle() {
      this.title = this.title_new;
    },
  },
  //   template: `
  //     <div class="card center">
  //     <h1>{{title}}</h1>
  //     <button class="btn"
  //     @click = " title = title_new "
  //     >
  //         Изменить
  //     </button>
  //     </div
  //     `,
  render() {
    return h(
      "div",
      {
        class: "card center",
      },
      [h("h2", {}, this.title)],
      [h("button", { class: "btn", onClick: this.changeTitle }, "Изменить")]
    );
  },
});
app.mount("#app");

const app2 = Vue.createApp({
  data() {
    return {
      title: "New title 2",
    };
  },
});

app2.mount("#app2");
