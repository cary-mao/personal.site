<template>
  <div id="global-layout" class="layout">
    <GlobalHeader />
    <main>
      <div class="container">
        <component :is="layout" />
      </div>
    </main>
    <GlobalFooter />
  </div>
</template>

<script>
import GlobalHeader from "../components/Header.vue";
import GlobalFooter from "../components/Footer.vue";
import Posts from "../layouts/Posts.vue";
import Projects from "./Projects.vue";

export default {
  components: {
    GlobalHeader,
    GlobalFooter,
    Posts,
    Projects,
  },
  computed: {
    layout() {
      if (this.$route.meta.layout) {
        return this.$route.meta.layout;
      }
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
          return this.$frontmatter.layout;
        }
        return "Layout";
      }
      return "NotFound";
    },
  },
};
</script>

<style lang="stylus">
main
  flex 1 1
  margin-top 6rem
</style>
