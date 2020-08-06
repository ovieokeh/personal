<template>
  <section id="work" class="container">
    <SectionHeader text="What I've Built" :index="3" />

    <div class="projects">
      <template v-for="(project, index) in projects">
        <Project
          :key="project.source"
          :project="project"
          :is-flipped="index % 2 === 0"
        />
      </template>
    </div>
  </section>
</template>

<script>
import SectionHeader from '~/components/SectionHeader'
import Project from '~/components/Project'

export default {
  components: {
    SectionHeader,
    Project,
  },
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  font-family: 'Poppins';
  margin-top: 200px;
  padding-top: $space-xxl;
}

@media screen and (min-width: $bp-large) {
  .container {
    padding-top: $space-xxxl;
  }
}
</style>
