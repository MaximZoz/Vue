<template lang="">
  <div class="alert" :class="type">
    <p class="alert-title">
      {{ title }}
    </p>
    <p>
      {{ text }}
    </p>
    <button class="btn" v-if="closable" @click="$emit('close')" :class="type">
      закрыть
    </button>
  </div>
</template>
<script>
export default {
  emits: ["close"],
  props: {
    text: String,
    title: String,
    type: String,
    closable: {
      type: Boolean,
      required: false,
      dafalt: false,
    },
    validator(val) {
      return ["primary", "danger", "warning"].includes(val);
    },
  },
};
</script>
<style scoped></style>
