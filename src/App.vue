<template>
  <div class="container pt-1">
    <div class="card">
      <async-component></async-component>
      <h2>
        Dinamic and аssinchronous components
      </h2>
      <app-button ref="myBtn" :color="oneColor" @action="active = 'one'"
        >one
      </app-button>
      <app-button :color="twoColor" @action="active = 'two'">two </app-button>
    </div>
    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>

<script>
import AppButton from "./AppButton";
import AppTextOne from "./AppTextOne.vue";
import AppTextTwo from "./AppTextTwo.vue";


export default {
  data() {
    return {
      active: "", //two
    };
  },

  mounted() {
    setTimeout(() => {
      this.componentName = "new component name";
    }, 1500),
      this.$refs.myBtn.btnLog()
  },

  computed: {
    // componentName() {
    //   if (this.active === "one") {
    //     return "app-text-one";
    //   }
    //   return "app-text-two";
    // },
    // return "app-text-" + this.active;
    // },
    componentName: {
      get() {
        return "app-text-" + this.active;
      },

      set(value) {
        console.log("componentName: ", value);
      },
    },
    oneColor() {
      return this.active === "one" ? "primary" : "";
    },
    twoColor() {
      return this.active === "two" ? "primary" : "";
    },
  },
  components: { AppButton, AppTextOne, AppTextTwo, },
};
</script>

<style scoped></style>
