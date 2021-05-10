# Vue Router

### Setting Router

- npm i vue-router@next
- src\router.js

src\main.js => createApp
- .use(router)

### add different pages
- src\router.js

src\views\Login.vue => 
- router-link to="/forget"

### how to display an active link
src\App.vue => provide =>
- login
- logout

src\App.vue => methods =>
- login
- logout

src\components\TheNavbar.vue => inject => 
- logout

src\views\Login.vue => inject => 
- login

src\views\Login.vue => method => submit =>
- login

### how to display active link

src\router.js => createRouter =>
- linkActiveClass: "active"
- linkExactActiveClass: "active"

### remember the page with parameters in the url
src\App.vue => methods => login =>
- if (this.$route.query.page) {this.$router.push(this.$route.query.page)} 
  else {this.$router.push("/dashboard")}

src\App.vue => methods => logout =>
- this.$router.push(query:{page})

### dynamic parameters in in the url
src\views\Mail.vue => template => router-link => to =>
- "'/mail/' + email.id"

### nested routes
src\router.js => routes => children => 
- component: AppEmailBody

src\views\Mail.vue => template =>
- `<router-view></router-view>`


### manually manage link state
src\components\TheNavbar.vue => template => router-lin =>
- custom v-slot="{ navigate, href }"
- @click="navigate"
- :class="{active: $route.path.indexOf(href) !== -1}"

### 404 page and redirect
src\router.js => routes =>
- { path: '/:notFound(.*)', component: NotFound }

- src\views\NotFound.vue

### ways to protect pages
src\router.js => 
- router.beforeEach
- router.afterEach

src\views\Dashboard.vue => 
- beforeRouteLeave


### optimization with Lasy Loading
src\router.js =>
- const Mail = () => import("./views/Mail")

 