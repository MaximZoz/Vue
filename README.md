# Vuex

### work with the Store

 npm install --save vuex@next

 ### what are mutations
 
    src\store\modules\counter.js => mutations => increment =>
 -  state.counter++

 src\App.vue
 ### why do we need getters

src\store\index.js => createStore => getters =>
- uppercaseTitle

src\App.vue => computed => mapGetters =>
- uppercaseTitle

src\App.vue => template => h1 => 
- doubleCounter
 ### how actions work
 src\store\modules\counter.js => actions => incrementAsync(context, payload) =>
-  context.commit("add", payload)

src\App.vue => mapActions => 
- incrementAsync

src\App.vue => template => 
- @click="incrementAsync({ value: 10, delay: 2000 })"
 ### context object
 
 ### how mappers help us
 src\App.vue => 
 - ...mapGetters
 - ...mapActions
 - ...mapMutations
 ### share logic with modules
 
 ### named modules with namespace

### how to organize the file structure

### how to add plugins