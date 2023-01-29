<template>
  <div>
    <h1>Projects</h1>
    <div class="projects">
      <div
        class="project-wrap"
        v-for="project in projects"
        :key="project.project"
      >
        <ProjectCard
          :name="project.project"
          :desc="project.desc"
          :lang="project.lang"
          :link="project.link"
          :star="project.star"
          :fork="project.fork"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "../../components/ProjectCard.vue";
import { getProjectsList } from "@theme/util";

export default {
  components: { ProjectCard },
  data() {
    return {
      projects: [],
    };
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
