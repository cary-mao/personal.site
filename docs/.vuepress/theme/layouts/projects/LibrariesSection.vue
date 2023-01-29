<template>
  <div>
    <h1>Libraries</h1>
    <div class="projects">
      <div
        class="project-wrap"
        v-for="library in Libraries"
        :key="library.project"
      >
        <ProjectCard
          :name="library.project"
          :desc="library.desc"
          :lang="library.lang"
          :link="library.link"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "../../components/ProjectCard.vue";

export default {
  components: { ProjectCard },
  computed: {
    collections() {
      return this.$themeConfig.library;
    },
  },
};
</script>
