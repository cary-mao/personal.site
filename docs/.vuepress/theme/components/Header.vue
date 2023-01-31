<template>
  <header id="header">
    <div class="container">
      <div class="navigation">
        <!-- logo -->
        <div class="logo" :title="$themeConfig.logoTitle">
          <img
            :src="$withBase(`/${$themeConfig.logo}`)"
            :alt="$themeConfig.logoText"
          />
          <router-link to="/">
            {{ $themeConfig.logoText }}
          </router-link>
        </div>

        <!-- nav -->
        <nav>
          <div class="nav">
            <router-link
              to="/about"
              class="about"
              :class="{ active: $route.path === '/about' }"
              >about</router-link
            >
            <router-link
              to="/blog"
              class="blog"
              :class="{ active: $route.path === '/blog' }"
              >blog</router-link
            >
            <router-link
              to="/projects"
              class="projects"
              :class="{ active: $route.path === '/projects' }"
              >projects</router-link
            >
            <router-link
              to="/collections"
              class="collections"
              :class="{ active: $route.path === '/collections' }"
            >
              collections
            </router-link>
            <Permalink
              to="https://github.com/cary-mao"
              class="github"
              :class="{ active: $route.path === '/github' }"
            >
              github
            </Permalink>
          </div>
        </nav>
      </div>
      <div class="theme-toggle">
        <button class="circle button" @click="onThemeToggle">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAYlJREFUWEftmDFuwkAQRe0rRIECWpSWs+QE1ClzDgpKak6QU0TQ0kZROigSixMggbD9LXms4a/HcZhFoVnh3WX/vBnPzpAmHT+jh+R07Sf2hyTtckSnzZeD3QqUwnafiwLUz2s+ZB+jfJzO9jWAbYmaCboXKONKE5y9z2tLQTSUpJlgdAI1wSw2GclfIxidQAhGbFpJ9kYweoEwQOZLGZM3I+hGYFdX907wbgR+bY65Lc/L73xELLoh+C+QFaUsYd+MoCZMppn4Bcp6jlUZzKWh6QXrKMFoBKLqGE+K3sJKMjT2WhP0L3Bd2jQoujSQhKUaUdZEybeWkcN8dZNULvEucLsq+tnHp3o/myhEYWlVMeNB2R9r5MwE3QqUeUsVioUl0SofBhILJdeIwWgFajdGI0bLhegxtH24MTAv6z+5r1EP4m2Gi90JlK7Gdya4LTGWV9UYjEagJCJvireXoQat9hwxFkqMxqB2qnuBjKhmmLUaojHI/Mf+m7a61OxiJriv+T/ri60GnAG1B7A4DYusaQAAAABJRU5ErkJggg=="
            alt="Theme"
          />
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import Permalink from "./Permalink.vue";

let darkTheme = false;

function createThemeTag(url) {
  const themeLink = document.createElement("link");
  themeLink.rel = "stylesheet";
  themeLink.href = url;
  themeLink.type = "text/css";
  themeLink.dataset.theme = true;
  return themeLink;
}

export default {
  components: {
    Permalink,
    Permalink,
  },
  methods: {
    onThemeToggle() {
      darkTheme = !darkTheme;
      if (darkTheme) {
        ["/dark-mode.css"].forEach((url) => {
          const themeLink = createThemeTag(this.$withBase(url));
          document.head.appendChild(themeLink);
        });
      } else {
        const themeLinks = document.head.querySelectorAll("[data-theme]");
        if (themeLinks) {
          [].forEach.call(themeLinks, (themeLink) => {
            document.head.removeChild(themeLink);
          });
        }
      }
    },
  },
};
</script>

<style lang="stylus">
#header
  height var(--navbar-height-large)
  padding-top 3rem
  background-color var(--background-color)
  .container
    display flex
    justify-content space-between
  .nav
    display flex
    padding-top 1.25rem
    a
      margin-right 1.5rem
      padding-bottom 0.25rem
      font-size 1.05rem
      font-weight 500
      color var(--navbar-color)
      text-decoration none
      border-bottom 2px solid transparent
      &:hover
        color var(--navbar-color-hover)
      &.active,
      &:hover
        &.about
          border-bottom-color var(--rainbow-1)
        &.blog
          border-bottom-color var(--rainbow-2)
        &.projects
          border-bottom-color var(--rainbow-3)
        &.collections
          border-bottom-color var(--rainbow-4)
        &.github
          border-bottom-color var(--rainbow-5)
.logo
    display flex
    align-items center
    img
      width 50px
      height 30px
      margin-right 0.5rem
    a
      font-size 1.2rem
      font-weight 700
      color inherit
      text-decoration none

.theme-toggle
  display flex
  align-items center
  button
    padding 0.5rem
  img
    width 20px
    height 20px
  @media screen and (max-width: 768px)
    position: absolute;
    top: 50%;
    right: 1rem;
    margin-top: -0.725rem;
    .button
      padding 0.25rem

@media screen and (max-width: 768px)
  .logo
    display none
  #header
    position fixed
    z-index 1
    display flex
    align-items center
    padding-top 0
    height var(--navbar-height-small)
    .container
      padding 0
    .navigation
      overflow: hidden
      width 100%
      padding 0 1rem
    .nav
      overflow auto
      &::-webkit-scrollbar
        display none
</style>
