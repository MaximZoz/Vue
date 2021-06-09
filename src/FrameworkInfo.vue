<template>
  <div class="card">
    <p>
      Название: <strong>{{ name }}</strong>
    </p>
    <p>
      Версия: <strong>{{ version }}/{{ doubleVersion }}</strong>
    </p>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["name", "version"],
  setup(props) {
    return {
      doubleVersion: computed(() => props.version * 2),
    };
  },
  // computed: {
  //   doubleVersion() {
  //     return this.version * 2;
  //   },
  // },
};
</script>

<style></style>
