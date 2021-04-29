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
import alertMixin from "../alertMixin";
import AppAlert from "./AppAlert";
export default {
  mixins: [alertMixin],
  components: {
    AppAlert,
  },
};
</script>
