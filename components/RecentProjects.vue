<template>
  <div>
    <template v-for="(project, index) in projects">
      <Project
        :key="project.source"
        :project="project"
        :is-flipped="index % 2 === 0"
      />
    </template>

    <a href="https://github.com/ovieokeh" class="more-projects">
      All publicly available projects
    </a>
  </div>
</template>

<script>
import Project from '~/components/Project'

export default {
  components: {
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
.more-projects {
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

@media screen and (min-width: $bp-tablet) {
  .more-projects {
    margin: 0;
    margin-right: $space-xs;
    transition: background-color ease 250ms 50ms, color ease 300ms;

    &:hover {
      background-color: $c-light-shades;
      color: $c-dark-shades;
    }
  }
}
</style>
