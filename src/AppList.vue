<template>
  <div class="card">
    <ul>
      <li v-for="(item, index) in 5" :key="index">
        <slot :iter="item" :index="index"> </slot>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style scoped></style>
