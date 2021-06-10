# Composition API

### how work setup and ref

src\App.vue => 
- import { ref } from "vue";

src\App.vue => script =>setup => 
- const name = ref("vueJS");
- const version = ref(3);

### Work with function
src\App.vue => script => function => 
- changeInfo

src\App.vue => template => button => 
- @click="changeInfo"

### ref and reactive
ref:
src\App.vue => script => setup =>
- const name = ref("vueJS");
- const version = ref(3);

reactive: 
src\App.vue => script => setup => framework =>

- reactive({name: "vueJS",version: 3})

src\App.vue => script => setup => function changeInfo =>
- framework.name = "VueJS new!";
- framework.version = 4.2;

### how work computed
src\App.vue => 
- import { computed } from "vue";

src\App.vue => script => setup => doubleVersion => 
- computed(() => framework.version * 2)

### how use watch
src\App.vue => 
- import { watch } from "vue";

src\App.vue => script => setup => watch => 
- (doubleVersion, (newValue, oldValue) =>{})

### get access to Dom elements

src\App.vue => script => setup =>
- const textInput = ref(null);


src\App.vue => template => input =>
-  ref="textInput" 

### work with v- model

src\App.vue => script => setup =>
- const firstName = ref("");

src\App.vue => template => input =>
- v-model="firstName"

### component interactions

src\FrameworkInfo.vue => script => props =>
- "name",
- "version"

src\FrameworkInfo.vue => script => setup =>
- return {doubleVersion: computed(() => props.version * 2)}

### passing the event to the parent component

src\FrameworkInfo.vue => template => button =>
- @click="changeToThree"

src\FrameworkInfo.vue => script => setup =>
- setup(props, context) {
    function change() {
      context.emit("change-version", 3);
    } ...

src\FrameworkInfo.vue => script => setup =>
- const name = inject("name");
- const version = inject("version");

src\App.vue => script => setup =>
- provide("name", name);
- provide("version", version);


### lifecycle methods
1 : 00 : 49