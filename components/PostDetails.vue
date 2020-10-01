<template>
  <nuxt-link class="p-container" :to="`blog/${details.slug}`">
    <span class="p-date">{{ new Date(details.date).toDateString() }}</span>
    <h2 class="p-title">{{ details.title }}</h2>
    <h3 class="p-description">{{ details.description }}</h3>

    <svg width="100%" height="100%" v-html="makeRects(700, 350)" />
  </nuxt-link>
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
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    margin: $space-xs;
    height: 300px;
    max-height: 350px;
    flex: 1 300px;
    padding: $space-sm;
    position: relative;
    text-decoration: none;

    &:hover {
      box-shadow: none;

      svg {
        opacity: 0.1;
      }
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
