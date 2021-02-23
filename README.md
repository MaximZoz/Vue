## 4 Как работает Vue

#### свойство template

создаёт структуру html
js => const app => Vue.createApp =>

- template

#### virtual DOM и render

js =>

- const h = Vue.h

js => const app => Vue.createApp => render =>

- return h

#### реактивность и Proxy

#### Жизненный цикл компонента

- https://v3.vuejs.org/guide/instance.html#lifecycle-diagram

#### Создание нескольких приложений

html =>

- div class="card" id="app2
- app.mount("#app")
- app2.mount("#app2");
