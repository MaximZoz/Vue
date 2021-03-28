<template>
  <div class="container pt-1">
    <div class="card">
      <h2>slots</h2>
    </div>

    <app-list>
      <template #default="{index,iter }">
        <strong> index: {{ index + 1 + ")" }} </strong>
        <span style="color: #c25205;"> item: {{ iter }} </span>
      </template>
    </app-list>
    <app-block>
      <p>
        this is text for new block
      </p>
      <template v-slot:header>
        <h3>
          it is title
        </h3>
      </template>
      <template #footer>
        <hr />
        <small>
          it is footer
        </small>
      </template>
    </app-block>
  </div>
</template>

<script>
import AppBlock from "@/AppBlock";
import AppList from "@/AppList";
export default {
  components: {
    AppBlock,
    AppList,
  },
};
</script>
<style scoped></style>
