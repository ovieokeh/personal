<template>
  <div class="b-container">
    <SectionHeader text="My latest blog posts" />

    <div class="posts">
      <template v-for="post in pageData">
        <PostDetails :key="post.slug" :details="post" />
      </template>
    </div>

    <div>
      <a href="/blog" class="all-posts">
        All blog posts
      </a>
    </div>
  </div>
</template>

<script>
import getBlogPosts from '~/api/getBlogPosts'
import SectionHeader from '~/components/SectionHeader'
import PostDetails from '~/components/PostDetails'

export default {
  components: {
    SectionHeader,
    PostDetails,
  },
  data() {
    return {
      isLoading: true,
      pageData: {},
    }
  },
  created() {
    getBlogPosts(6, this)
  },
}
</script>

<style lang="scss" scoped>
.b-container {
  margin-top: $space-xxl;
}

.posts {
  display: flex;
  flex-wrap: wrap;
}

.all-posts {
  display: inline-block;
  background-color: transparent;
  color: $c-light-shades;
  border: 1px solid $c-light-shades;
  border-radius: 4px;
  font-size: 14px;
  text-decoration: none;
  margin: $space-sm 0;
  padding: $space-xs $space-sm;
}

@media screen and (min-width: $bp-large) {
  .all-posts {
    margin-right: $space-xs;
    transition: background-color ease 250ms 50ms, color ease 300ms;

    &:hover {
      background-color: $c-light-shades;
      color: $c-dark-shades;
    }
  }
}
</style>
