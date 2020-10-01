<template>
  <main class="home">
    <transition name="fade">
      <div v-if="!isLoading">
        <Introduction
          :name="pageData.name"
          :email="pageData.email"
          :intro="pageData.intro"
          :roles="pageData.roles"
          :tagline="pageData.tagline"
        />

        <About :technologies="pageData.technologies" />

        <Experience :experience="pageData.experience.data" />

        <Projects :projects="pageData.projects.data" />

        <Posts />

        <Contact />
      </div>
    </transition>

    <transition name="fade">
      <Loader v-if="isLoading" />
    </transition>
  </main>
</template>

<script>
import getData from '~/api/getData'

import Introduction from '~/page-sections/index/Introduction'
import About from '~/page-sections/index/About'
import Experience from '~/page-sections/index/Experience'
import Projects from '~/page-sections/index/Projects'
import Posts from '~/page-sections/index/Posts'
import Contact from '~/page-sections/index/Contact'
import Loader from '~/components/Loader'

export default {
  components: {
    Introduction,
    About,
    Experience,
    Projects,
    Posts,
    Contact,
    Loader,
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
}

@media screen and (min-width: $bp-large) {
  .home {
    display: flex;
    flex-direction: column;
    padding: 120px $padding-lg;
    max-width: $site-width;
    margin: 0 auto;
  }
}
</style>
