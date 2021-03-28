## 6 Создание своего элемента формы

### Создаём компонент

src\TheHeader.vue =>

- template

### регистрируем компонент в приложинии, которое создаём

src\main.js =>

- import TheHeader
- const app = createApp(App)
- app.mount ('#app')

### объявляем компонент the-header

src\TheHeader.vue => template =>

- the-header

### подключаем стили

src\main.js =>

- import theme.css

### реализовываем задачу открывать новости при клике на кнопку

src\App.vue => script => data =>

- isOpen: false

src\App.vue => template => button =>

- @click="isOpen = !isOpen"

src\App.vue => template => p =>

- v-if="isOpen"

### создаём отдельный компонент

src\AppNews.vue

### регистрируем его локально в главном компоненте

src\AppNews.vue => script =>

- import AppNews from "./AppNews"

src\AppNews.vue => script => components =>

- "app-news": AppNews,

src\AppNews.vue => template =>

- app-news

### передаём параметры в компонент

src\App.vue => template => app-news =>

- v-for="item in news" :key="item" :title="item"

src\AppNews.vue => template => h3 =>

- title

### валидируем параметры

src\AppNews.vue => script => props => isOpen => validator

- return value === true || value === false

### как эмитить события

src\AppNews.vue => script => methods => open =>

- this.\$emit("open-news", 22);

src\App.vue => methods => openNews =>

- data

src\AppNews.vue => template =>

- @open-news="openNews"

### Валидируем исходящее событие

emits показывает какие кастомные события компонент отдаёт наверх
и добаляет возможность валидировать emits

src\AppNews.vue => script => emits =>

- "close-news": null,
- "open-news"(num) {}

### Add logic
 create button with name  "Отметить непрочитанной" , send emit 'id' to it

src\AppNews.vue => template => button =>

-  @click="$emit('unmark', id)"
-   v-if="wasRead"


take emit with 'id' of AppNews, create method which should change state 'wasRead'

src\App.vue => template => app-news =>
- @unmark="unreadNews"

src\App.vue => template => app-news =>
- unreadNews(id)

###  create component for button

- src\AppButton.vue

###  Transfer parameters with provide and inject

 src\App.vue => provide =>
 - return {news: this.news };

 src\AppNewsList.vue => inject =>

- 'news'
###  Styles in components

 src\App.vue => style =>

- scoped


###  how slots works

src\App.vue =>template => app-block => p =>
- text

src\AppBlock.vue => 
- slot


default value

src\AppBlock.vue => slot =>
- no text

###  Transfer parameters in slot

src\App.vue =>template => app-list => template => 
- default

src\AppList.vue =>template => ul => li => 
- slot

###   examples of dinamic components

src\App.vue =>template => app-button => 
- one
- two

src\App.vue =>template => app-button => component => 
- is="componentName"

###   how use keep-alive

src\App.vue =>template =>
- keep-alive

### advanced syntax properties "computed"

src\App.vue => script => computed => componentName =>


- get
- set

###  get access to component with "ref"

src\AppButton.vue => script => methods => 
- btnLog

src\App.vue => script => mounted => 
-  this.$refs.myBtn.btnLog()


###  asynchronous component

src\main.js => import => 
- defineAsyncComponent


src\main.js => app.component => defineAsyncComponent => 
-  return import("./AppAsyncComponent.vue")