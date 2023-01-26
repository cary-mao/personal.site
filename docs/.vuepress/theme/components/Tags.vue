<template>
  <div class="tags card-dl">
    <div class="card-dt">
      <h2>Tags</h2>
    </div>
    <div class="dd">
      <router-link
        :class="['tag-link', { active: curTag === tag }]"
        v-for="tag in tags"
        :key="tag"
        :to="`/tags/${tag}`"
      >
        {{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { getPosts } from "../util";

export default {
  computed: {
    tags() {
      let tags = [];

      getPosts(this.$site.pages).forEach((page) => {
        const curTags = page.frontmatter.tags;
        tags = tags.concat(curTags);
      });

      return Array.from(new Set(tags));
    },
    curTag() {
      if (this.$route.meta.kindWay === "tags") {
        return this.$route.params.kind;
      }
    },
  },
};
</script>

<style lang="stylus">
.tag-link
  display inline-block
  margin .25rem
  padding .25rem .4rem
  border 1px solid var(--border-color)
  font-size 14px
  text-decoration none
  color var(--font-color-base)
  background-color var(--button-background-color)
  border-radius .4rem
  &.active,
  &:hover
    color var(--highlight-color)
    border-color var(--highlight-color)
</style>
