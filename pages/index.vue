<template>
  <main class="home">
    <template v-if="!isLoading">
      <Introduction
        :name="pageData.name"
        :email="pageData.email"
        :intro="pageData.intro"
        :roles="pageData.roles"
        :tagline="pageData.tagline"
      />

      <About :technologies="pageData.technologies" />

      <Experience :experience="pageData.experience.data" />

      <Work :projects="pageData.projects.data" />

      <Contact />
    </template>
  </main>
</template>

<script>
import getData from '../api/getData'

import Introduction from '../page-sections/index/Introduction'
import About from '../page-sections/index/About'
import Experience from '../page-sections/index/Experience'
import Work from '../page-sections/index/Work'
import Contact from '../page-sections/index/Contact'

export default {
  components: {
    Introduction,
    About,
    Experience,
    Work,
    Contact,
  },
  data() {
    return {
      isLoading: true,
      pageData: {},
    }
  },
  created() {
    getData('37jZbmQSggC4cQCNrjIXYI', this)
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
