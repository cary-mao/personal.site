<template>
  <aside class="sidebar">
    <div class="catelog">
      <h1>目录</h1>
      <SidebarNav class="catelog-content" />
    </div>
  </aside>
</template>

<script>
import SidebarNav from "./SidebarNav.vue";

export default {
  name: "Sidebar",
  components: {
    SidebarNav,
  },
};
</script>

<style lang="stylus">
.catelog
  position sticky
  background-color var(--card-background-color)

  .&-content
    max-height 300px

  h1
    padding 0.5rem
    margin 0
    font-size 1rem
</style>
