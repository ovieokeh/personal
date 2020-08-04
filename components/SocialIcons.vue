<template>
  <div class="social-icons">
    <a class="link" href="https://linkedin.com/in/ovieokeh"
      ><font-awesome-icon class="icon" :icon="['fab', 'linkedin']" size="1x"
    /></a>
    <a class="link" href="https://github.com/ovieokeh"
      ><font-awesome-icon class="icon" :icon="['fab', 'github']" size="1x"
    /></a>
    <a class="link" href="https://twitter.com/ovieokeh"
      ><font-awesome-icon class="icon" :icon="['fab', 'twitter']" size="1x"
    /></a>
    <a class="link" href="https://blog.logrocket.com/author/ovieokeh"
      ><font-awesome-icon class="icon" :icon="['fas', 'pen']" size="1x"
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
  display: none;
}

@media screen and (min-width: 768px) {
  .social-icons {
    display: flex;
    flex-direction: column;
    height: 350px;
    position: fixed;
    bottom: 0;
    left: $padding-lg;
    z-index: 1;

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

    &:hover {
      color: $c-navy-light;
    }
  }

  .icon {
    color: inherit;
    cursor: pointer;
    margin: $space-sm 0;
  }
}
</style>
