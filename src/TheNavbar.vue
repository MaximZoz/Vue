<template>
  <header class="navbar">
    Vuex счётчик
    <strong>
      {{ counter }}
    </strong>
    <buttton class="btn" @click="add">
      добавить 5
    </buttton>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters("count", ["counter"]),
  },

  methods: {
    ...mapMutations({
      addFive: "count/add",
    }),

    add() {
      this.addFive({
        value: 5,
      });
    },
  },
};
</script>
