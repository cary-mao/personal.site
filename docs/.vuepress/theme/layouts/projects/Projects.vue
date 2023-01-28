<template>
  <div>
    <ProjectSection />
    <CollectionSection />
  </div>
</template>

<script>
import ProjectSection from "./ProjectSection.vue";
import CollectionSection from "./CollectionSection.vue";

export default {
  name: "Projects",
  components: {
    ProjectSection,
    CollectionSection,
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
