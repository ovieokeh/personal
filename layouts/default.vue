<template>
  <div id="app">
    <Nav />
    <SocialIcons />

    <Nuxt />
  </div>
</template>

<script>
import Nav from '../components/Nav'
import SocialIcons from '../components/SocialIcons'

export default {
  components: {
    Nav,
    SocialIcons,
  },
}
</script>

<style lang="scss">
#app {
  background-color: $c-accent-dark;
  height: 100%;
}

@media screen and (min-width: $bp-large) {
  #app {
    padding: 0 $padding-lg;
  }
}
</style>
