<template>
  <div id="app">
    <Nav />

    <Nuxt />

    <Footer />
  </div>
</template>

<script>
import Nav from '~/components/Nav'
import Footer from '~/components/Footer'

export default {
  components: {
    Nav,
    Footer,
  },
}
</script>

<style lang="scss">
#app {
  background-color: $c-background;
  padding: 0 $padding-sm;
  height: 100%;
}

@media screen and (min-width: $bp-tablet) {
  #app {
    padding: 0 $padding-lg;
  }
}
</style>
