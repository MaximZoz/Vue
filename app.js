Vue.createApp({
  data: () => ({
    myHtml: " <h1>Vue 3 App</h1>",
    title: "я есть Грут",
    person: {
      firstName: "Maxim",
      lastName: "Zozulya",
      age: 27,
    },
    items: [2, 4],
  }),

  methods: {
    addItem(event) {
      this.items.unshift(this.$refs.myInput.value);
      this.$refs.myInput.value = "";
      console.log(event.key);
    },
    remove(index) {
      this.items.splice(index, 1);
    },
    log(item) {
      console.log("item", item);
    },
  },
  //   computed: {
  //     evenItems() {
  //       return this.items.filter((i) => i % 2 === 0);
  //     },
  //   },
}).mount("#app");
