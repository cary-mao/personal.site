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
import ProjectCard from "./ProjectCard.vue";
import { getGithubRepos } from "../util";

export default {
  components: { ProjectCard },
  data() {
    return {
      projects: [],
    };
  },

  async created() {
    // first render
    this.projects = this.$themeConfig.projects;

    // async render
    const repos = await getGithubRepos(this.$themeConfig.githubUser);
    this.projects.forEach((project) => {
      const repo = repos.find((repo) => repo.name === project.project);
      // this.$set(project, "fullLang", normalizeLang(project.lang));
      // this.$set(project, "link", repo.html_url);
      // this.$set(project, "star", repo.stargazers_count);
      // this.$set(project, "fork", repo.forks_count);
      Object.assign(project, {
        link: repo.html_url,
        star: repo.stargazers_count,
        fork: repo.forks_count,
      });
    });
  },
};
</script>
