<template>
  <header id="header">
    <div class="container flex space-between">
      <div>
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
            <a
              href="https://github.com/cary-mao"
              class="permalink github"
              :class="{ active: $route.path === '/github' }"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
              <object
                :data="$withBase('/permalink.svg')"
                type="image/svg+xml"
              ></object>
            </a>
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
        &.github
          border-bottom-color var(--rainbow-4)
    .permalink
      display inline-flex
      align-items center
      object
        width 1rem
        height 1rem
        margin-left 0.25rem
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
  .button
    padding 0.5rem
  img
    width 20px
    height 20px
</style>
