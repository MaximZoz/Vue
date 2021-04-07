### form processing

src\App.vue => template => form =>
- submit="submitHandler"

src\App.vue => script => method => submitHandler
- event.preventDefault()

### get data of input

src\App.vue => template => form => input 
- v-model.trim="name"
- v-model.number="age"

### Proceed select
src\App.vue => template => form => select
v-model="city"

### radio button and checkbox

src\App.vue => template => form => input
 - v-model="skills"
 - v-model="agree" 
 
src\App.vue => script => data => 
 - skills: [],
 - agree: false,


### field validation

src\App.vue => template => form => div =>
 - :class="{ invalid: errors.name }"

src\App.vue => template => form => small =>
 - v-if="errors.name"> {{ errors.name }}

src\App.vue => script => data => 
- errors: {name: null}


src\App.vue => script => methods => 
- formIsValid

src\App.vue => script => methods => submitHandler =>
- if (this.formIsValid()

### create custom model for components

src\App.vue => template => form => app-input =>

- placeholder
- error
- label
-v-model:value

src\App.vue => script => 
- import AppInput

src\App.vue => script => components =>
- AppInput

src\AppInput.vue => 
- template
- script