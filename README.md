## 4 практика

### создаём шаблон 
index.html =>
- div class="container" id="app"
### создаём массив, в который помещаем title и активный шаг 
 data => 
- steps: [{title, text},]
### создаём активный индекс
 data=> 
- activeIndex
### создаём метод, который уменьшает активный инндекс на единицу
methods =>
- prev
### в шаблоне в контейнере создаём div class="card" с текстом, который появляется из массива с помощью computed activeStep
div class="steps-content" =>
 activeStep.text
### в шаблоне перебираем steps и выводим step и idx в li и span

html => div => ul => li =>
-  v-for="(step, idx) in steps"

html => div => ul => span =>
-  {{idx + 1}}

html => div => ul => li =>
-  {{step.title}}
### в шаблоне подсвечиваем стили активного индекса при клике 
html => div => ul => li =>
-  :class="{active: idx === activeIndex,done: idx < activeIndex}"

### при клике на span вызываем метод setActive в который передаём индекс и делаем его активными

methods =>
- setActive

### если isActive = true, то создаём div, в котором есть кнопка 'назад' , которая задизейблена, если activeIndex = 0 и есть кнопка 'вперёд'


html => div =>

-   v-if="isActive"

html => div => button =>

-   :disabled="prevDisabled"

### при клике на 'назад' вызываем метод prev, который делает activeIndex -1

-   @click="prev"

### при клике на 'вперед' или 'закончить' вызываем метод nextOfFinish, который делает   this.activeIndex++
 html => div => button =>

- @click="nextOfFinish"
- {{ isLastStep ? 'Закончить' : 'Вперед' }}
### если isActive = false, то появляется кнопка "Начать заного", при клике вызываем метод reset

 html => div => button =>
- reset