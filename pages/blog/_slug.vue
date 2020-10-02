<template>
  <div class="a-container">
    <div v-if="isIndex" class="posts">
      <SectionHeader text="My articles" />

      <template v-for="post in pageData">
        <PostDetails :key="post.slug" :details="post" />
      </template>
    </div>

    <div v-else class="article">
      <span class="article-date">{{
        new Date(pageData.date).toDateString()
      }}</span>
      <h2 class="article-title">{{ pageData.title }}</h2>
      <h3 class="article-desc">{{ pageData.description }}</h3>

      <img
        v-if="pageData.featureImage"
        :src="pageData.featureImage.fields.file.url"
        :alt="pageData.featureImage.fields.title"
        class="article-featured-img"
      />

      <VueMarkdown
        :source="pageData.content"
        :postrender="postRender"
        class="article-content"
      />
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown/src/VueMarkdown'

import SectionHeader from '~/components/SectionHeader'
import PostDetails from '~/components/PostDetails'

import getSinglearticle from '~/api/getSinglePost'
import getBlogPosts from '~/api/getBlogPosts'

export default {
  components: {
    VueMarkdown,
    SectionHeader,
    PostDetails,
  },
  async fetch() {
    const slug = this.$route.params.slug

    if (slug) {
      await getSinglearticle(slug, this)
    } else {
      await getBlogPosts(undefined, this)
    }
  },
  data() {
    return {
      isLoading: true,
      pageData: {},
    }
  },
  computed: {
    isIndex() {
      return !this.$route.params.slug
    },
  },
  methods: {
    postRender(html) {
      const parsed = html
        .replace(/<p><img/g, '<img')
        .replace(/(\/><\/p>)/g, '/>')
      window.st = html
      return parsed
    },
  },
}
</script>

<style lang="scss">
.a-container {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, arial;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  color: $c-light-shades;
  min-height: 100vh;
  position: relative;
  padding-top: 95px;
  padding-bottom: $space-lg;
}

.posts {
  display: flex;
  flex-wrap: wrap;
  padding-top: $space-xl;
}

.article {
  min-height: 100vh;
  position: relative;
  padding-bottom: $space-lg;
  color: $c-white;

  &-date {
    font-size: 12px;
    color: $c-dark-accent;
  }

  &-title {
    margin-bottom: $space-md;
  }

  &-desc {
    font-size: 14px;
    font-weight: 400;
  }

  &-date,
  &-title,
  &-desc {
    display: block;
    text-align: center;
  }

  &-featured-img {
    width: 100%;
    object-fit: cover;
    margin: $space-md 0;
  }

  &-content {
    h2,
    h3,
    h4 {
      margin: $space-sm 0;
      margin-top: $space-lg;
    }

    p {
      width: fit-content;
      margin: $space-sm 0;
    }

    img {
      display: block;
      height: auto;
      width: 100%;
      /* even more control with max-width */
      max-width: 300px;
      margin: $space-md auto;
    }

    pre {
      background-color: $c-dark-shades;
      padding: $space-sm;
      white-space: pre-wrap;
      overflow-x: scroll;
    }

    a {
      color: $c-brand;
      text-decoration: none;

      &:hover {
        color: $c-dark-accent;
      }
    }
  }
}

@media screen and (min-width: $bp-tablet) {
  .a-container {
    display: flex;
    flex-direction: column;
    padding: $space-xl $padding-lg;
    padding-top: 100px;
    max-width: $site-width / 1.2;
    margin: 0 auto;
  }

  .article {
    display: flex;
    flex-direction: column;
    max-width: $site-width;
    margin: 0 auto;

    &-content {
      img {
        max-width: 720px;
      }
    }
  }
}
</style>
