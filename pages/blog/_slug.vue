<template>
  <div class="a-container">
    <transition name="fade">
      <div v-if="!isLoading" class="article">
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

        <script
          src="https://utteranc.es/client.js"
          repo="ovieokeh/personal"
          issue-term="url"
          label="comment"
          theme="dark-blue"
          crossorigin="anonymous"
          same-site="none"
          secure
          async
        ></script>

        <nuxt-link to="/blog" class="back">Back to all posts</nuxt-link>
      </div>
    </transition>

    <transition name="fade">
      <Loader v-if="isLoading" />
    </transition>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown/src/VueMarkdown'

import getSinglearticle from '~/api/getSinglePost'
import Loader from '~/components/Loader'

export default {
  components: {
    VueMarkdown,
    Loader,
  },
  async fetch() {
    const slug = this.$route.params.slug
    await getSinglearticle(slug, this)
  },
  data() {
    return {
      isLoading: true,
      pageData: {},
    }
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
  head() {
    const title = `${this.pageData.title} | Ovie Okeh's Blog`
    const desc = this.pageData.description
    const featuredImage = this.pageData.featureImage?.fields.file.url
    const url = `https://ovie.dev${this.$route.path}`

    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: desc,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: url,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: desc,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: featuredImage,
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:url',
          property: 'twitter:url',
          content: url,
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: title,
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: desc,
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: featuredImage,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.a-container {
  min-height: 100vh;
  padding-top: 95px;
  padding-bottom: $space-lg;
}

.article {
  color: $c-white;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, arial;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  position: relative;
  padding-bottom: $space-lg;

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
    width: 100vw;
    margin: $space-md 0;
    margin-left: -$padding-sm;
    object-fit: cover;
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

  .back {
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
}

@media screen and (min-width: $bp-tablet) {
  .a-container {
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

    &-featured-img {
      width: 100%;
      margin-left: 0;
    }

    &-content {
      img {
        max-width: 720px;
      }
    }

    .back {
      margin: $space-lg auto;
      transition: background-color ease 250ms 50ms, color ease 300ms;
      width: 150px;

      &:hover {
        background-color: $c-light-shades;
        color: $c-dark-shades;
      }
    }
  }
}
</style>
