<template>
  <div class="categories card-dl">
    <div class="card-dt">
      <h2>categories</h2>
    </div>
    <div class="card-dd">
      <router-link
        :class="['category-link', { active: curCategory === category }]"
        v-for="(count, category) in categoryCountMap"
        :key="category"
        :to="`/categories/${category}`"
      >
        {{ category }}
        <span class="category-count">{{ count }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { getPosts } from "../util";

export default {
  computed: {
    categoryCountMap() {
      // {category: count}
      let categoryCountMap = {};

      getPosts(this.$site.pages).forEach((page) => {
        const categories = page.frontmatter.categories;
        categories.forEach((category) => {
          if (categoryCountMap[category]) {
            categoryCountMap[category]++;
          } else {
            categoryCountMap[category] = 1;
          }
        });
      });

      return categoryCountMap;
    },
    curCategory() {
      if (this.$route.meta.kindWay === "categories") {
        return this.$route.params.kind;
      }
    },
  },
};
</script>

<style lang="stylus">
.category
  &-count
    color var(--post-time-color)
  &-link
    &.active,
    &:hover
      color var(--highlight-color)
</style>
