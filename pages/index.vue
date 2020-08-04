<template>
  <main class="home">
    <Introduction
      :name="name"
      :short-intro="shortIntro"
      :long-intro="longIntro"
      :roles="roles"
    />

    <About :technologies="technologies" />
  </main>
</template>

<script>
import Introduction from '../page-sections/index/Introduction'
import About from '../page-sections/index/About'

export default {
  components: {
    Introduction,
    About,
  },
  data() {
    return {
      name: 'Ovie Okeh',
      shortIntro: 'I guzzle gasoline & sauce',
      longIntro: `I'm a frontend developer based in Utrecht, NL specializing in building
      (and occasionally designing) highly dynamic websites, applications, and
      everything in between.`,
      roles: ['Software Developer', 'Technical Writer', 'B. Pepper'],
      technologies: [
        'HTML & CSS',
        'JavaScript',
        'TypeScript',
        'React',
        'Vue',
        'Node.js',
      ],
    }
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
