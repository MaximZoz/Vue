<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <small> data, method, computed, watch </small>
      <hr />

      <div class="form-control">
        <!-- <input type="text" v-model="firstName" /> -->
      </div>
      <button class="btn" @click="changeInfo">Изменить</button>
    </div>
    <framework-info @change-version="changeVersion"></framework-info>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  toRefs,
  isRef,
  isReactive,
  computed,
  watch,
  provide,
} from "vue";
import FrameworkInfo from "./FrameworkInfo";

export default {
  components: {
    FrameworkInfo,
  },
  setup(props) {
    const name = ref("vue");
    const version = ref(3);

    const framework = reactive({
      name: "vueJS",
      version: 3,
    });

    // const textInput = ref("");
    const firstName = ref("");

    function changeInfo(params) {
      name.value = "VueJS new!";
      version.value = 4.2;
    }
    // const doubleVersion = computed(() => framework.version * 2);
    function changeVersion(num) {
      version.value = num;
    }

    provide("name", name);
    provide("version", version);

    return {
      // name,
      // version,
      // ...toRefs(framework),
      // framework,
      // doubleVersion,
      changeInfo,
      // textInput,
      firstName,
      changeVersion,
    };
  },
};
</script>
