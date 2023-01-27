<template>
  <div>
    <ProjectSection />
    <CollectionSection />
  </div>
</template>

<script>
import ProjectSection from "../components/ProjectSection.vue";
import CollectionSection from "../components/CollectionSection.vue";

export default {
  name: "Projects",
  components: {
    ProjectSection,
    CollectionSection,
  },
};
</script>

<style lang="stylus">
.projects
    display flex
    flex-wrap wrap
    &-part
      margin-bottom 1rem

.project-wrap
    display flex
    flex-basis 33.3%
    padding .5rem
</style>
