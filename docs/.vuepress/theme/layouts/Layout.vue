<template>
  <div class="post-layout">
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
};
</script>

<style lang="stylus">
.post-layout
  display flex
  justify-content space-between
  @media screen and (max-width: 1024px)
    display block
    .sidebar
      display none
    h1
      font-size 2rem
</style>
