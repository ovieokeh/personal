<template>
  <div class="social-icons">
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
    <a
      class="link"
      href="https://blog.logrocket.com/author/ovieokeh"
      aria-label="Blog icon"
      ><font-awesome-icon class="icon" :icon="['fas', 'pen']"
    /></a>
  </div>
</template>

<script>
export default {
  name: 'SocialIcons',
}
</script>

<style lang="scss" scoped>
.social-icons {
  display: flex;
  flex-direction: column;
  height: 200px;
  position: fixed;
  bottom: 0;
  right: $space-sm;
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
}

.link {
  color: $c-dark-accent;
  font-size: 1em;
}

.icon {
  color: inherit;
  cursor: pointer;
  margin: $space-xs 0;
}

@media screen and (min-width: 768px) {
  .social-icons {
    height: 350px;
    right: $padding-lg;
  }

  .link {
    font-size: 1.5em;
    transition: transform 250ms ease 50ms, color ease 300ms;

    &:hover {
      color: $c-white;
      transform: scale(1.5);
    }
  }

  .icon {
    margin: $space-xs 0;
  }
}
</style>
