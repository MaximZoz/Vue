<template>
  <h2>
    {{ title }}
  </h2>
  <p>
    {{ text }}
  </p>
</template>

<script>
export default {
  data() {
    return {
      title: "This is title",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque consequuntur rerum ea ullam necessitatibus voluptatum repellendus assumenda quidem pariatur quis!",
    };
  },
};
</script>
