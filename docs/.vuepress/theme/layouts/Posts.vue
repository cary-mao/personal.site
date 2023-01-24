<template>
  <div>
    <div class="posts flex">
      <div class="post-list" v-for="group in groups" :key="group">
        <h1>{{ group.title }}</h1>
        <ul>
          <li v-for="post in group.post" :key="post"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed() {
    return [];
  },
  created() {
    console.log(this.$site, this.$page.lastUpdated);
  },
};
</script>
