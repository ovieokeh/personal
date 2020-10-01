<template>
  <a class="p-container" :href="`blog/${details.slug}`">
    <span class="p-date">{{ new Date(details.date).toDateString() }}</span>
    <h2 class="p-title">{{ details.title }}</h2>
    <h3 class="p-description">{{ details.description }}</h3>

    <svg width="100%" height="100%" v-html="makeRects(300, 300)" />
  </a>
</template>

<script>
import { makeRects } from '~/utils/makeSVGBg'

export default {
  props: {
    details: {
      type: Object,
      required: true,
    },
  },
  methods: {
    makeRects,
  },
}
</script>

<style lang="scss" scoped>
.p {
  &-container {
    color: $c-white;
    border: 3px solid $c-dark-shades;
    height: 300px;
    width: 300px;
    margin: 1px;
    max-width: 350px;
    max-height: 350px;
    flex-grow: 1;
    padding: $space-sm;
    position: relative;
    text-decoration: none;

    &:hover svg {
      opacity: 0.1;
    }

    svg {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      opacity: 0.3;
      pointer-events: none;
      transition: opacity $transition 300ms;
    }
  }

  &-date {
    color: $c-brand;
    font-size: 12px;
    margin-bottom: $space-xs;
  }

  &-title {
    margin-bottom: $space-xs;
  }

  &-description {
    font-size: 14px;
  }
}
</style>
