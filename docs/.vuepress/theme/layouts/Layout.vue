<template>
  <div class="flex space-between">
    <Content class="post" />
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "Layout",
  components: {
    Sidebar,
  },
  created() {
    console.log(this.$page);
  },
};
</script>
