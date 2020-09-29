<template>
  <section id="posts" class="container">
    <SectionHeader text="My latest blog posts" :index="4" />

    <div class="posts">
      <!-- <template v-for="(project, index) in projects">
        <Project
          :key="project.source"
          :project="project"
          :is-flipped="index % 2 === 0"
        />
      </template> -->
    </div>

    <div>
      <a href="/blog" class="all-posts">
        All blog posts
      </a>
    </div>
  </section>
</template>

<script>
import getBlogPosts from '~/api/getBlogPosts'
import SectionHeader from '~/components/SectionHeader'

export default {
  components: {
    SectionHeader,
  },
  data() {
    return {
      isLoading: true,
      pageData: {},
    }
  },
  created() {
    getBlogPosts(5, this)
  },
}
</script>

<style lang="scss" scoped>
.container {
  font-family: 'Poppins';
  margin-top: 200px;
  padding-top: $space-xxl;
}

.all-posts {
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

@media screen and (min-width: $bp-large) {
  .container {
    padding-top: $space-xxxl;
  }

  .all-posts {
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
