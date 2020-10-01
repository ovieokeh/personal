<template>
  <footer class="footer">
    <span class="footer-text"
      >Built by Ovie Okeh &copy;{{ new Date().getFullYear() }}</span
    >
    <span class="footer-text"
      >Thanks to
      <a class="footer-text-link" href="https://brittanychiang.com"
        >Brittany Chiang's design</a
      ></span
    >

    <span class="footer-text footer-powered"
      >Powered by <a href="https://buttercms.com"> <ContentfulLogo /></a
    ></span>

    <SocialIcons />
  </footer>
</template>

<script>
import ContentfulLogo from './ContentfulLogo'
import SocialIcons from './SocialIcons'

export default {
  components: {
    ContentfulLogo,
    SocialIcons,
  },
}
</script>

<style lang="scss" scoped>
.footer {
  min-height: 80px;
  display: flex;
  flex-direction: column;
  color: $c-dark-accent;
  margin-top: $space-xxl;
  opacity: 0.7;

  &-text {
    font-size: 14px;
    font-family: 'Poppins';
    margin-bottom: $space-sm;

    &-link {
      text-decoration: none;
      color: $c-light-accent;

      &:hover {
        color: $c-white;
      }
    }
  }

  &-powered {
    display: flex;
    align-items: center;
  }

  svg {
    min-width: 40px;
    padding-left: $space-xs;

    &:hover {
      filter: grayscale(100);
    }
  }
}

@media screen and (min-width: $bp-large) {
  .footer {
    align-items: center;
  }
}
</style>
