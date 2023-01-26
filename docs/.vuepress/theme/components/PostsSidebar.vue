<template>
  <aside class="sidebar">
    <Categories style="margin-bottom: 1rem" />
    <Tags />
  </aside>
</template>

<script>
import Categories from "./Categories.vue";
import Tags from "./Tags.vue";

export default {
  name: "PostsSidebar",
  components: {
    Categories,
    Tags,
  },
};
</script>
