<template>
  <div>
    <div class="sub-title" v-if="kindWay">
      <p>
        <span class="posts-count">{{ counter }}</span> posts {{ kindWay }} as:
      </p>
    </div>
    <h1>{{ heading }}</h1>
    <div class="flex space-between">
      <div class="posts">
        <div class="post-group" v-for="(group, title) in groupMap" :key="title">
          <h2>{{ title }}</h2>
          <ul class="post-list">
            <li v-for="page in group" :key="page.path">
              <router-link
                :to="page.path"
                class="post-link flex space-between align-items-center"
              >
                <h3>{{ page.title }}</h3>
                <span class="post-time">{{ page.birthtime }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <PostsSidebar />
    </div>
  </div>
</template>

<script>
import PostsSidebar from "../components/PostsSidebar.vue";
import { capitalize, getPosts } from "../util";

export default {
  name: "Posts",
  components: {
    PostsSidebar,
  },
  computed: {
    groupMap() {
      const groupMap = {};

      getPosts(this.$site.pages)
        .filter(this.postFilter)
        .sort(this.postSort)
        .forEach(($page) => {
          const year = $page.birthtime.match(/(\w{4})/)[1];
          if (!groupMap[year]) {
            groupMap[year] = [];
          }

          groupMap[year].push($page);
        });

      return groupMap;
    },
    heading() {
      return capitalize(this.$route.params.kind || "Writing");
    },
    kindWay() {
      return this.$route.meta.kindWay;
    },
    counter() {
      return getPosts(this.$site.pages).filter((post) =>
        post.frontmatter[this.kindWay].includes(this.$route.params.kind)
      ).length;
    },
  },
  methods: {
    postFilter(post) {
      if (this.kindWay && post.frontmatter[this.kindWay]) {
        return post.frontmatter[this.kindWay].includes(this.$route.params.kind);
      }
      return true;
    },
    postSort(a, b) {
      return b.birthtimeMs - a.birthtimeMs;
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        document.title = `${this.heading} | ${this.$site.title}`;
      },
    },
  },
};
</script>

<style lang="stylus">
.post
  &-link
    display flex
    text-decoration none
    color var(--font-color-heading)
    &:hover
      color var(--font-color-bright)
      h3
        text-decoration-thickness 2px
        text-decoration-line underline
  &-time
    color var(--post-time-color)
  h3
    font-size: 1.1rem
    font-weight: 600
.posts
  max-width 840px
  flex 1
  &-count
    font-weight 500
    color var(--highlight-color)
.sub-title
  margin-bottom .5rem
  font-size 1.1rem
  color var(--font-color-muted)
</style>
