<template>
  <main class="home">
    <Introduction
      :name="name"
      :short-intro="shortIntro"
      :long-intro="longIntro"
      :roles="roles"
    />

    <About :technologies="technologies" />

    <Experience :experience="experience" />
  </main>
</template>

<script>
import Introduction from '../page-sections/index/Introduction'
import About from '../page-sections/index/About'
import Experience from '../page-sections/index/Experience'

import data from './data'

export default {
  components: {
    Introduction,
    About,
    Experience,
  },
  data() {
    return data
  },
}
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  position: relative;
  padding-top: 90px;
  padding-bottom: $space-lg;
  padding-right: $padding-sm;
}

@media screen and (min-width: $bp-large) {
  .home {
    display: flex;
    flex-direction: column;
    padding: 120px $padding-lg;
    max-width: 1200px;
    margin: 0 auto;
  }
}
</style>
