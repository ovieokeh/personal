<template>
  <div class="blog">
    <SectionHeader text="My articles" />

    <template v-for="post in pageData">
      <PostDetails :key="post.slug" :details="post" />
    </template>
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
  async fetch() {
    await getBlogPosts(undefined, this)
  },
  data() {
    return {
      isLoading: true,
      pageData: {},
    }
  },
  head() {
    return {
      title: "Frontend development articles | Ovie Okeh's blog",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Articles on JavaScript, TypeScript, and frontend development in general written by Ovie Okeh',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.blog {
  display: flex;
  flex-wrap: wrap;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, arial;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  min-height: 100vh;
  padding-top: 95px;
  padding-bottom: $space-lg;
}

@media screen and (min-width: $bp-tablet) {
  .blog {
    padding: $space-xl $padding-lg;
    padding-top: 100px;
    max-width: $site-width;
    margin: 0 auto;
  }
}
</style>
