<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>{{ uppercaseTitle }}</h1>
      <h2>Счетчик {{ counter }} ({{ doubleCounter }})</h2>
      <button class="btn primary" @click="add">Добавить 1</button>
      <button
        class="btn danger"
        @click="incrementAsync({ value: 10, delay: 2000 })"
      >
        Добавить 10
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import TheNavbar from "./TheNavbar";

export default {
  components: { TheNavbar },

  computed: {
    ...mapGetters(["uppercaseTitle"]),
    ...mapGetters("count", ["counter", "doubleCounter"]),
  },

  methods: {
    ...mapMutations({
      add: "count/increment",
    }),
    ...mapActions("count", ["incrementAsync"]),
  },
};
</script>
