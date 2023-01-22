<template>
  <div>
    <div>Hello World</div>
    <Content />
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
