<template>
  <li>
    <a class="sidebar-link" :href="`#${header.slug}`">
      <div class="icon" @click.prevent="toggleSubNav">
        <i class="triangle" v-if="subHeaders.length"></i>
      </div>
      {{ header.title }}
    </a>
    <transition name="expand">
      <SidebarNavList
        v-if="subHeaders.length"
        v-show="show"
        :headers="subHeaders"
      />
    </transition>
  </li>
</template>

<script>
import SidebarNavList from "./SidebarNavList.vue";

export default {
  props: ["header"],
  name: "SidebarNavListItem",
  components: {
    SidebarNavList,
  },
  data() {
    return {
      show: true,
    };
  },
  computed: {
    subHeaders() {
      return this.header && this.header.children ? this.header.children : [];
    },
  },
  methods: {
    toggleSubNav() {
      if (this.subHeaders.length) {
        this.show = !this.show;
      }
    },
  },
};
</script>

<style lang="stylus">
.sidebar-link
    display flex
    padding 0.5rem
    padding-left 0
    font-size 14px
    color var(--font-color-base)
    text-decoration none
    .icon
      display flex
      align-items center
      // placeholder
      min-width 0.5rem
      padding-left 0.5rem
      padding-right 0.25rem
      i
        min-height 0.5rem
        margin-top 0.12rem
.expand-enter-active
    transform-origin top
    animation expand .5s
.expand-leave-active
    transform-origin top
    animation expand .5s reverse

@keyframes expand {
    from {
        opacity 0
        transform scale(1, 0, 1)
    }
    to {
        opacity 1
        transform scaleY(1, 1, 1)
    }
}
</style>
