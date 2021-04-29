<template>
  <div class="container">
    <app-alert
      v-if="alert"
      text="это сообщение"
      title="Внимание!"
      type="primary"
      @close="alert = false"
    ></app-alert>
    <div class="card">
      <button class="btn primary" @click="toggleAlert">
        {{ !alert ? "показать " : "скрыть " }}сообщение
      </button>
    </div>
  </div>
</template>

<script>
import AppAlert from "./AppAlert";
export default {
  data() {
    return {
      alert: false,
    };
  },
  methods: {
    toggleAlert() {
      this.alert = !this.alert;
    },
  },
  components: {
    AppAlert,
  },
};
</script>
