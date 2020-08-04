<template>
  <div class="social-icons">
    <a class="link" href="https://linkedin.com/in/ovieokeh"
      ><font-awesome-icon class="icon" :icon="['fab', 'linkedin']"
    /></a>
    <a class="link" href="https://github.com/ovieokeh"
      ><font-awesome-icon class="icon" :icon="['fab', 'github']"
    /></a>
    <a class="link" href="https://twitter.com/ovieokeh"
      ><font-awesome-icon class="icon" :icon="['fab', 'twitter']"
    /></a>
    <a class="link" href="https://blog.logrocket.com/author/ovieokeh"
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
  opacity: 0.5;

  &::after {
    content: '';
    display: block;
    background-color: $c-main;
    width: 1px;
    height: 100%;
    margin: 0 auto;
    margin-top: $space-sm;
  }
}

.link {
  color: $c-main;
  font-size: 1em;

  &:hover {
    color: $c-navy-light;
  }
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
    transition: transform 250ms $transition;

    &:hover {
      transform: scale(1.5);
    }
  }

  .icon {
    margin: $space-xs 0;
  }
}
</style>
