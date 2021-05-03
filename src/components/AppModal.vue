<template lang="">
  <div class="modal-backdrop" @click="$emit('close')"></div>
  <div class="modal">
    <h3>
      это заголовок модалки
    </h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
      fugit sequi nobis cupiditate soluta quo, perferendis explicabo placeat
      deserunt quod!
    </p>
  </div>
</template>
<script>
export default {
  emits: ["close"],
};
</script>
<style lang=""></style>
