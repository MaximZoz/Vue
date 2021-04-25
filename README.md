# working with the database
### Preparing an application with a form
App => 
- template

### connect the database
firebase => 
- zoz-js


### send post request with fetch
App => methods => 
- createPerson



### create a component for displaying data
- App.peopleList.vue
### Modifying the UI logic
- AppPeopleList
(mounted is called when the html tree is ready)

### delete data from the database
App => methods => 
- removePeople(id)

App.peopleList => button =>
- click="$emit('remove', person.id)

### get request with axios
App.peopleList => button =>
- @click="$emit('load')"

App => methods => 
- loadPeople
### error processing
- App.Alert.vue
App => methods => createPerson => 
- try (throw new Error())
- catch (error) {alert}


### add a loading indicator
App.vue => template => 
- app-loader (v-if="loading)

App.vue => data => 
- loading: false

App.vue => emethod => loadPeople => 
- this.loading = true