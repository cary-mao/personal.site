<template>
  <div class="home">
    <Content />
    <div class="hero">
      <header>
        <Content slot-key="heroHead" />
      </header>
      <div class="hero-img-wrap">
        <Content slot-key="heroImg" />
      </div>
    </div>
    <section class="home-part">
      <h2 class="home-heading">
        Latest Posts
        <router-link class="button" :to="$withBase('/blog/')"
          >View All</router-link
        >
      </h2>
      <ul class="post-list">
        <li v-for="post in posts" :key="post.title">
          <router-link class="post-link" :to="post.path">
            <h3>{{ post.title }}</h3>
            <span class="post-time">{{ format(post.birthtime) }}</span>
          </router-link>
        </li>
      </ul>
    </section>
    <section class="home-part">
      <h2 class="home-heading">
        Collections
        <router-link class="button" :to="$withBase('/collections/')"
          >View All</router-link
        >
      </h2>
      <ul class="post-list">
        <li v-for="collection in collections" :key="collection.title">
          <Permalink class="post-link" :to="collection.link">
            <h3 class="ellipsis">{{ collection.title }}</h3>
            <!-- <span class="post-time">{{ format(post.birthtime) }}</span> -->
            <template slot="icon">
              <span>{{ collection.type }}</span>
            </template>
          </Permalink>
        </li>
      </ul>
    </section>
    <section class="home-part">
      <h2 class="home-heading">
        Projects
        <router-link class="button" :to="$withBase('/projects/')"
          >View All</router-link
        >
      </h2>
      <div class="grid">
        <div class="grid-3" v-for="project in projects">
          <ProjectCard
            :key="project.name"
            v-bind="project"
            :star="0"
            :fork="0"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { getPosts } from "../util";
import ProjectCard from "../components/ProjectCard.vue";
import { getProjectsList } from "../util";
import dayjs from "dayjs/esm";
import Permalink from "@theme/components/Permalink.vue";

export default {
  components: {
    ProjectCard,
    Permalink,
  },
  data() {
    return {
      projects: [],
    };
  },
  computed: {
    posts() {
      return getPosts(this.$site.pages)
        .slice(0, 6)
        .sort((a, b) => b.birthtimeMs - a.birthtimeMs);
    },
    collections() {
      return this.$themeConfig.collections;
    },
  },
  methods: {
    format(date) {
      return dayjs(date).format("MM-DD");
    },
  },

  created() {
    // first render
    this.projects = this.$themeConfig.projects;
  },

  async mounted() {
    // async render
    this.projects = await getProjectsList(this.$themeConfig);
  },
};
</script>

<style lang="stylus">
h2.home-heading
  display flex
  justify-content space-between
  font-size 2rem
.home
  &-part
    margin-bottom 6rem
  .hero
    display flex
    align-items center
    justify-content space-between
    &-img-wrap
      max-width 400px
      @media screen and (max-width: 768px) {
        display none
      }
    h1
      font-size 3rem
    p
      max-width var(--content-width--medium)
      font-size 1.2rem
  p
    -webkit-font-smoothing auto
    font-size 1.05rem
    line-height 1.625
    font-weight 500
    margin-bottom 1.5rem
</style>
