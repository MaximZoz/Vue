<template>
  <div class="container">
    <div class="card">
      <h2></h2>
      <h2>
        {{ $i18n("app.title") }}
      </h2>
      <button class="btn" @click="changeLang">
        {{ $i18n("app.buttonChange") }}
      </button>
      <button class="btn primary" @click="modal = true">
        открыть модалку
      </button>

      <teleport to="body">
        <app-modal v-if="modal" @close="modal = false"></app-modal>
      </teleport>
    </div>
  </div>
</template>

<script>
import AppModal from "./components/AppModal";
export default {
  components: {
    AppModal,
  },
  data() {
    return {
      langEn: false,
      modal: false,
    };
  },
  mounted() {
    // this.$alert('gfgrgrt')
  },
  inject: ["changeI18N"],
  methods: {
    changeLang() {
      this.langEn;
      if (this.langEn) {
        this.changeI18N("ru");
        this.langEn = !this.langEn;
      } else {
        this.changeI18N("en");
        this.langEn = true;
      }
      this.$forceUpdate();
    },
  },
};
</script>
