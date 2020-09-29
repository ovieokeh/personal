<template>
  <footer class="footer">
    <span class="footer-text"
      >Built by Ovie Okeh &copy;{{ new Date().getFullYear() }}</span
    >
    <span class="footer-subtext"
      >Thanks to
      <a class="footer-subtext-link" href="https://brittanychiang.com"
        >Brittany Chiang's design</a
      ></span
    >

    <span class="footer-powered"
      >Powered by <a href="https://buttercms.com"> <ContentfulLogo /></a
    ></span>
  </footer>
</template>

<script>
import ContentfulLogo from './ContentfulLogo'

export default {
  components: {
    ContentfulLogo,
  },
}
</script>

<style lang="scss" scoped>
.footer {
  min-height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: $c-brand;
  margin-top: $space-xxl;
  opacity: 0.7;

  &-text {
    font-family: 'Poppins';
  }

  &-subtext {
    font-size: 14px;
    margin: $space-sm 0;

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
    margin: $space-sm 0 $space-xl;
  }

  svg {
    min-width: 40px;
    padding-left: $space-xs;

    &:hover {
      filter: grayscale(100);
    }
  }
}
</style>
