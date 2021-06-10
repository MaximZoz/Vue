<template>
  <div class="card">
    <p>
      Название: <strong>{{ name }}</strong>
    </p>
    <p>
      Версия: <strong>{{ version }}/{{ doubleVersion }}</strong>
    </p>
    <button class="btn warning" @click="changeToThree">
      изменить на 3-ю версию
    </button>
  </div>
</template>

<script>
import { computed, inject } from "vue";
export default {
  // emits: ["change-version"],

  setup(props, context) {
    function change() {
      context.emit("change-version", 3);
    }
    const name = inject("name");
    const version = inject("version");
    return {
      name,
      version,
      changeToThree: change,
      doubleVersion: computed(() => version.value * 2),
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
