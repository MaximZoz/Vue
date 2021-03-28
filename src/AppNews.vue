<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <app-button @action="open">
      {{ isNewsOpen ? "Закрыть" : "Открыть" }}
    </app-button>
    <app-button color="danger" v-if="wasRead" @action="$emit('unmark', id)">
      отметить непрочитанной
    </app-button>
    <div v-if="isNewsOpen">
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iste
        asperiores ab. Fugiat, aliquid placeat? Possimus, voluptate. Sit,
        asperiores ad.
      </p>
      <app-button v-if="!wasRead" color="primary" @action="mark">
        прочитано
      </app-button>
      <app-news-list
     :news="news"
      ></app-news-list>
    </div>
  </div>
</template>

<script>
import AppButton from "./AppButton";
import AppNewsList from "./AppNewsList";
export default {
  // props: ["title"],
  // id: Number,
  props: {
    news: Array,
    wasRead: Boolean,
    title: {
      type: String,
      required: true,
    },

    id: {
      type: Number,
      required: true,
    },

    isOpen: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  emits: {
    "open-news": null,
    unmark: null,

    "read-news"(id) {
      if (id) {
        return true;
      }
      console.log("Нет параметра id для emit read-news");
      return false;
    },
  },

  data() {
    return {
      isNewsOpen: this.isOpen,
    };
  },

  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen;
      this.$emit("open-news", 123);
    },

    mark() {
      this.isNewsOpen = false;
      this.$emit("read-news", this.id);
    },
    // unmark() {
    //   this.$emit("unmark", this.id);
    // },
  },

  components: {
    AppButton,
    AppNewsList,
  },
};
</script>
