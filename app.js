const App = {
  data() {
    return {
      placeholderStr: "Введите название заметки",
      title: "Список заметок",
      inputValue: "",
      notes: [],
    };
  },
  methods: {
    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    removeNote(idx) {
      this.notes.splice(idx, 1);
    },
    removeAllNote() {
      this.notes = [];
    },
    toUpperCase(i) {
      return i.toUpperCase();
    },
  },
  computed: {
    doubleCountComputed() {
      return this.notes.length * 2;
    },
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = "";
      }
    },
  },
};
const app = Vue.createApp(App).mount("#app");
