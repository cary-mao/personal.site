<template>
  <div>Home</div>
</template>

<script>
export default {
  created() {
    console.log(1);
    console.log(this.$site.pages, this.$page);
  },
};
</script>
