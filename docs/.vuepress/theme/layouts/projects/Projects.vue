<template>
  <div>
    <ProjectSection />
    <LibrariesSection />
  </div>
</template>

<script>
import ProjectSection from "./ProjectSection.vue";
import LibrariesSection from "./LibrariesSection.vue";

export default {
  name: "Projects",
  components: {
    ProjectSection,
    LibrariesSection,
  },
};
</script>

<style lang="stylus">
@import '~@theme/styles/grid.styl';

.projects
    @extend .grid
    &-part
      margin-bottom 1rem

.project-wrap
    @extend .grid-3, .grid-stretch
</style>
