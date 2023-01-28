<template>
  <ul class="sidebar-links">
    <SidebarNavListItem
      v-for="header in headers"
      :header="header"
      :key="header.slug"
    />
  </ul>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
  },
  name: "SidebarNavList",
  components: {
    // 不先解析SidebarNavListItem
    SidebarNavListItem: () => import("./SidebarNavListItem.vue"),
  },
  methods: {
    toggleSubNav() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="stylus">
.sidebar-links
    margin 0.5rem
    padding-left 0
    list-style-type none
</style>
