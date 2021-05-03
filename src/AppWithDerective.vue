<template>
  <div class="container">
    <div class="card" v-if="show">
      <h2 v-color:[type].hover="myColor">
        разговор про директивы
      </h2>
      <div class="form-control">
        <label for="inp">
          активный по умолчанию
        </label>
        <input v-focus type="text" id="inp" />
      </div>
      <button class="btn" @click="myColor = 'darkblue'">
        сделать синим
      </button>
      <button
        class="btn"
        @click="type = type === 'color' ? 'backgroundColor' : 'color'"
      >
        переключить тип
      </button>
    </div>
  </div>
</template>

<script>
import colorDirective from "./colorDirective";
import focusDirective from "./focusDirective";
export default {
  data() {
    return {
      myColor: "darkred",
      type: "color",
      show: true,
    };
  },
  // mounted() {
  //   setTimeout(() => {
  //     this.show = false;
  //   }, 2000);
  // },

  directives: {
    focus: focusDirective,
    color: colorDirective,
  },
};
</script>
