<template>
  <div id="app">
    <Nav />

    <Nuxt />

    <Footer />
  </div>
</template>

<script>
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default {
  components: {
    Nav,
    Footer,
  },
  mounted() {
    if (this.$route.hash) {
      const id = this.$route.hash.substring(1) // location.hash without the '#'

      setTimeout(() => {
        const el = document.getElementById(id)

        if (el) {
          el.scrollIntoView()
          el.focus()
        }
      }, 0)
    }
  },
}
</script>

<style lang="scss">
#app {
  background-color: $c-background;
  padding: 0 $padding-sm;
  height: 100%;
}

@media screen and (min-width: $bp-large) {
  #app {
    padding: 0 $padding-lg;
  }
}
</style>
