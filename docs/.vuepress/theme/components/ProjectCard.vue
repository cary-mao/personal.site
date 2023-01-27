<template>
  <div class="project">
    <slot name="header">
      <div class="project-meta" v-if="isMetaShow">
        <div class="project-star" v-if="star">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            style="width: 1rem; height: 1rem; fill: currentcolor"
          >
            <path
              fill-rule="evenodd"
              d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
            ></path>
          </svg>
          {{ star }}
        </div>
        <div class="project-fork" v-if="fork">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            style="width: 1rem; height: 1rem; fill: currentcolor"
          >
            <path
              fill-rule="evenodd"
              d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
            ></path>
          </svg>
          {{ fork }}
        </div>
      </div>
    </slot>
    <h3>{{ name }}</h3>
    <p :title="desc">{{ desc }}</p>
    <div class="project-lang">
      <i :class="`circle icon-lang-${lang}`"></i>{{ fullLang }}
    </div>
    <div class="project-links">
      <Permalink :to="link">Link</Permalink>
    </div>
  </div>
</template>

<script>
import { normalizeLang } from "../util";
import Permalink from "./Permalink.vue";

export default {
  props: {
    name: String,
    desc: String,
    lang: String,
    link: String,
    star: Number,
    fork: Number,
  },
  components: { Permalink },
  computed: {
    fullLang() {
      return normalizeLang(this.lang);
    },
    isMetaShow() {
      return this.star || this.fork;
    },
  },
};
</script>

<style lang="stylus">
.project
    display flex
    flex-direction column
    flex-grow 1
    padding 1.5rem
    background-color var(--card-background-color)
    h3
      margin-top 0
    p
      line-height 1.5
      flex 1 0 auto
    &-meta
      text-align right
      font-size .8rem
      color var(--font-color-muted)
      > div
        display inline-flex
        align-items center
        > svg
          margin 0 .5rem
    &-star svg
      color var(--star)
    &-fork svg
      color var(--fork)
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
