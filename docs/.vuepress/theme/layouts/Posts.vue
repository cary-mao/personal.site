<template>
  <div>
    <div class="sub-title" v-if="kindWay">
      <p>
        <span class="posts-count">{{ counter }}</span> posts {{ kindWay }} as:
      </p>
    </div>
    <h1>{{ heading }}</h1>
    <div class="column-2">
      <div class="column-2-stretch">
        <div class="post-group" v-for="(group, title) in groupMap" :key="title">
          <h2>{{ title }}</h2>
          <ul class="post-list">
            <li v-for="page in group" :key="page.path">
              <router-link :to="page.path" class="post-link">
                <h3>{{ page.title }}</h3>
                <span class="post-time">{{
                  formatDate(page.lastUpdatedTimestamp)
                }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <PostsSidebar class="column-2-fixed" />
    </div>
  </div>
</template>

<script>
import PostsSidebar from "../components/PostsSidebar.vue";
import { capitalize, getPosts } from "../util";
import dayjs from "dayjs/esm";

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
          const year = dayjs($page.lastUpdatedTimestamp).format("YYYY");
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
      return b.lastUpdatedTimestamp - a.lastUpdatedTimestamp;
    },
    formatDate(timestamp) {
      return dayjs(timestamp).format("YYYY-MM-DD");
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
  created() {
    console.log(this.$page.lastUpdatedTimestamp);
  },
};
</script>

<style lang="stylus">
.post
  &-list
    padding-left 0
    list-style-type none
  &-link
    display flex
    justify-content space-between
    align-items center
    padding-top .5rem
    padding-bottom .5rem
    text-decoration none
    color var(--font-color-heading)
    border-bottom: 1px solid var(--border-color);
    h3
      margin 0
      font-size: 1.1rem
      font-weight: 600
    &:hover
      color var(--font-color-bright)
      h3
        text-decoration-thickness 2px
        text-decoration-line underline
  &-time
    color var(--post-time-color)
.posts
  &-count
    font-weight 500
    color var(--highlight-color)
  @media screen and (max-width: 768px)
    .sidebar
      display none

.sub-title
  margin-bottom .5rem
  font-size 1.1rem
  color var(--font-color-muted)
</style>
