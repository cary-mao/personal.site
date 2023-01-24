<template>
  <div>
    <Content class="post" />
  </div>
</template>

<script>
export default {
  name: "Layout",
  created() {
    console.log(this.$site.pages, this.$custom);
  },
};
</script>

<style></style>
