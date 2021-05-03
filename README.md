# Mixins, directives and plugins

### create component alert
src\components\AppAlert.vue =>
- appAlert

### how mixins work

src\alertMixin.js =>
- alertMixin

src\components\AppBlock.vue => script => mixins => 
- alertMixin
### create your own directive

src\components\App.vue => script => directives => focus => 
- focusDirective

src\components\App.vue => template => input =>
- focus

- src\focusDirective.js 

### life cycle of directives
 src\colorDirective.js =>
 - mounted
 - updated

### pass parameters to directive
src\App.vue => 

### working with modifiers
src\colorDirective.js => mounted => 
- binding.modifiers.hover

src\colorDirective.js => unmounted => 
- el.removeEventListener('mouseover', mouseover)
- el.removeEventListener('mouseout', mouseouts)

src\App.vue => template => div => h2 => 
- v-color:type.hover="myColor"

### plugin creation

src\main.js => 
- vapp.use(translatePlagin, {test:1})

src\translatePlagin.js => install => 

- app
- options

src\App.vue => template => button =>
- @click="$alert"

### creating a multilingual plugin

src\App.vue => template => button, h2 =>

- @click="changeLang"
- {{ $i18n("app.buttonChange") }}

src\App.vue => methods => 
- changeLang


src\translatePlagin.js =>
- install

src\main.js =>
- app.use(translatePlagin, { ru, en });
- const ru, en

### Modal window with Teleport
- src\components\AppModal.vue

src\App.vue => template => app-modal =>

- teleport to="body"