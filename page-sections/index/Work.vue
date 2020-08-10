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

    <div class="more-containers">
      <a href="https://github.com/ovieokeh" class="more-projects">
        All publicly available projects
      </a>
      <a href="https://blog.logrocket.com/author/ovieokeh" class="more-posts">
        My blog posts
      </a>
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

.more {
  &-projects,
  &-posts {
    display: inline-block;
    background-color: transparent;
    color: $c-light-shades;
    border: 1px solid $c-light-shades;
    border-radius: 4px;
    font-size: 14px;
    text-decoration: none;
    margin: $space-xs 0;
    padding: $space-xs $space-sm;
  }
}

@media screen and (min-width: $bp-large) {
  .container {
    padding-top: $space-xxxl;
  }

  .more {
    &-projects,
    &-posts {
      margin: 0;
      margin-right: $space-xs;
      transition: background-color ease 250ms 50ms, color ease 300ms;

      &:hover {
        background-color: $c-light-shades;
        color: $c-dark-shades;
      }
    }
  }
}
</style>
