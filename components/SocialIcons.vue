<template>
  <div :class="className">
    <a
      class="link"
      href="https://linkedin.com/in/ovieokeh"
      aria-label="Linkedin icon"
      ><font-awesome-icon class="icon" :icon="['fab', 'linkedin']"
    /></a>
    <a class="link" href="https://github.com/ovieokeh" aria-label="Github icon"
      ><font-awesome-icon class="icon" :icon="['fab', 'github']"
    /></a>
    <a
      class="link"
      href="https://twitter.com/ovieokeh"
      aria-label="Twitter icon"
      ><font-awesome-icon class="icon" :icon="['fab', 'twitter']"
    /></a>
    <nuxt-link class="link" to="/blog" aria-label="Blog icon"
      ><font-awesome-icon class="icon" :icon="['fas', 'pen']"
    /></nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'SocialIcons',
  computed: {
    className() {
      return this.$route.name === 'index' ? 'social-icons' : 'social-icons norm'
    },
  },
}
</script>

<style lang="scss" scoped>
.social-icons {
  display: flex;
  position: relative;
  margin-bottom: $space-sm;
  bottom: 0;

  .link {
    color: $c-dark-accent;
    font-size: 1.5em;

    &:last-of-type .icon {
      margin-right: 0;
    }

    .icon {
      color: inherit;
      cursor: pointer;
      margin-right: $space-sm;
    }
  }
}

@media screen and (min-width: $bp-tablet) {
  .social-icons:not(.norm) {
    position: fixed;
    flex-direction: column;
    height: 350px;
    bottom: 0;
    left: $padding-lg;
    margin-bottom: 0;
    z-index: 1;

    &::after {
      content: '';
      display: block;
      background-color: $c-dark-accent;
      width: 1px;
      height: 100%;
      margin: 0 auto;
      margin-top: $space-sm;
    }

    .link {
      color: $c-dark-accent;
      font-size: 1.5em;
      transition: transform 250ms ease 50ms, color ease 300ms;

      &:hover {
        color: $c-white;
        transform: scale(1.5);
      }
    }

    .icon {
      color: inherit;
      cursor: pointer;
      margin: $space-xs 0;
    }
  }
}
</style>
