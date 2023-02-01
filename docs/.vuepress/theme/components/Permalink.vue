<template>
  <a :href="to" class="permalink" target="_blank" rel="noopener noreferrer">
    <slot></slot>
    <slot name="icon">
      <object
        v-if="showIcon"
        :data="$withBase('/permalink.svg')"
        type="image/svg+xml"
      ></object>
    </slot>
  </a>
</template>

<script>
// refer router-link
export default {
  name: "Permalink",
  props: {
    to: String,
    showIcon: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="stylus">
.permalink
    display inline-flex
    align-items center
    cursor pointer
    object
        width 1rem
        height 1rem
        margin-left 0.25rem
</style>
