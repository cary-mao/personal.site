<template>
  <div>
    <h1>Collections</h1>
    <div class="projects">
      <div
        class="project-wrap"
        v-for="collection in collections"
        :key="collection.project"
      >
        <div class="project">
          <h3>{{ collection.project }}</h3>
          <p :title="collection.desc" class="ellipsis">{{ collection.desc }}</p>
          <div class="project-lang">
            <i :class="`circle icon-lang-${collection.lang}`"></i
            >{{ collection.fullLang }}
          </div>
          <div class="project-links">
            <a
              href=""
              target="__blank"
              :href="collection.link"
              ref="noopener noreferer"
              >Link</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { normalizeLang } from "../util";

export default {
  name: "Projects",
  computed: {
    collections() {
      return this.$themeConfig.collections.map((collection) => {
        return {
          ...collection,
          fullLang: normalizeLang(collection.lang),
        };
      });
    },
  },
};
</script>

<style lang="stylus">
.projects
    display flex
    flex-wrap wrap

.project-wrap
    overflow hidden
    flex-basis 33.3%
    margin-bottom 1rem

.project
    padding 1.5rem
    margin .5rem
    background-color var(--card-background-color)

.project-lang
    display flex
    align-items center
    padding-bottom 1.2rem
    font-size 14px
    i
        width 8px
        height 8px
        margin-right .5rem
        margin-top -1px
.icon-lang
    &-js
        background-color #f1e05a
    &-css
        background-color #563d7c
    &-html
        background-color #e34c26

.project-links
    a
        color var(--font-color-base)
        &:hover
            color var(--highlight-color)
</style>
