<template>
  <hr />
  <!-- <h4>
    {{ title }}
  </h4> -->
  <ul>
    <li v-for="(item, index) in news" :key="index">
      {{ item.title }}
      <span v-if="item.wasRead">
        !!!
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  emits: {
    action: null,
  },

  props: ["news"],
  // inject: ["title", "news"],
};
</script>

<style></style>
