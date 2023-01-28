<template>
  <div>
    <h1>Collections</h1>
    <div class="projects">
      <div
        class="project-wrap"
        v-for="collection in collections"
        :key="collection.project"
      >
        <ProjectCard
          :name="collection.project"
          :desc="collection.desc"
          :lang="collection.lang"
          :link="collection.link"
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
      return this.$themeConfig.collections;
    },
  },
};
</script>
