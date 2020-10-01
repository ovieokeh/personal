<template>
  <nav class="nav" :style="navStyle">
    <a class="logo" href="/" aria-label="Home">
      <Logo />
    </a>

    <MenuIcon :is-toggled="isToggled" :on-click="toggleMenu" />

    <div :class="linksClassname" :style="menuStyle">
      <a
        v-for="(link, index) in links"
        :key="link.link"
        :href="`/${link.link}`"
        :class="link.class ? link.class : 'link'"
        @click="toggleMenu"
        ><span v-if="!link.class" class="link-index">0{{ index + 1 }}. </span
        >{{ link.label }}</a
      >
    </div>
  </nav>
</template>

<script>
import { throttle } from '../utils'

import Logo from './Logo'
import MenuIcon from './MenuIcon'

const links = [
  {
    label: 'About',
    link: '#about',
  },
  {
    label: 'Experience',
    link: '#experience',
  },
  {
    label: 'Work',
    link: '#work',
  },
  {
    label: 'Blog',
    link: 'blog',
  },
  {
    label: 'Contact',
    link: '#contact',
  },
  {
    label: 'Resume',
    link: 'resume.pdf',
    class: 'link-button',
  },
]

const SCROLL_DELTA = 5
const NAV_HEIGHT = 100

export default {
  name: 'Nav',
  components: {
    Logo,
    MenuIcon,
  },
  data() {
    return {
      isToggled: false,
      isMounted: this.$route.path === '/',
      scrollDirection: 'none',
      lastScrollTop: 0,
      links,
    }
  },
  computed: {
    navStyle() {
      return {
        height: this.scrollDirection === 'none' ? '100px' : '70px',
        boxShadow:
          this.scrollDirection === 'up'
            ? '0 10px 30px -10px rgba(0, 0, 0, 0.3)'
            : 'none',
        transform:
          this.scrollDirection === 'down' ? 'translateY(-70px)' : 'none',
      }
    },
    menuStyle() {
      return {
        width: this.isToggled ? '68vw' : 0,
      }
    },
    linksClassname() {
      return this.isToggled ? 'links active' : 'links'
    },
  },
  mounted() {
    this.isMounted = true

    window.addEventListener('scroll', () => throttle(this.handleScroll()))
    window.addEventListener('resize', () => throttle(this.handleResize()))
    window.addEventListener('keydown', (e) => this.handleKeydown(e))
  },
  destroyed() {
    window.removeEventListener('scroll', () => this.handleScroll())
    window.removeEventListener('resize', () => this.handleResize())
    window.removeEventListener('keydown', (e) => this.handleKeydown(e))
  },
  methods: {
    toggleMenu(event) {
      let isToggled = false

      if (event && event.target.classList.contains('menu')) {
        isToggled = !this.isToggled
      }

      this.isToggled = isToggled

      isToggled
        ? document.body.classList.add('no-scroll')
        : document.body.classList.remove('no-scroll')
    },

    handleScroll() {
      const { isMounted, isToggled, scrollDirection, lastScrollTop } = this
      const fromTop = window.scrollY

      // Make sure they scroll more than SCROLL_DELTA
      if (
        !isMounted ||
        Math.abs(lastScrollTop - fromTop) <= SCROLL_DELTA ||
        isToggled
      )
        return

      if (fromTop < SCROLL_DELTA) this.scrollDirection = 'none'
      else if (fromTop > lastScrollTop && fromTop > NAV_HEIGHT) {
        if (scrollDirection !== 'down') this.scrollDirection = 'down'
      } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
        if (scrollDirection !== 'up') this.scrollDirection = 'up'
      }

      this.lastScrollTop = fromTop
    },

    handleResize() {
      if (window.innerWidth > 768 && this.isToggled) {
        this.toggleMenu()
      }
    },

    handleKeydown(e) {
      if (!this.isToggled) return

      if (e.which === 27 || e.key === 'Escape') {
        this.toggleMenu()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.nav {
  background-color: $c-background;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $space-md $padding-sm;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 250ms $transition;
  z-index: 9;
}

.logo {
  color: $c-light-shades;
  text-decoration: none;

  &:hover {
    color: $c-light-shades;
  }
}

.links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: $c-dark-shades;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  transition: width 250ms $transition;
  z-index: 999;

  &.active::after {
    content: '';
    display: block;
    background-color: transparentize($color: $c-background, $amount: 0.8);
    backdrop-filter: blur(2px);

    height: 100%;
    width: 32vw;
    position: fixed;
    left: 0;
    opacity: 0;
    animation: fade-in 250ms 200ms $transition forwards;
  }
}

.link {
  font-size: 16px;
  text-decoration: none;
  color: $c-white;
  padding: $space-md $space-sm;

  &-index {
    display: block;
    color: $c-dark-accent;
    pointer-events: none;
  }

  &-button {
    color: $c-light-shades;
    background-color: transparent;
    border: 1px solid $c-dark-accent;
    border-radius: 3px;
    padding: $space-xs $space-sm;
    margin: $space-xs $space-md;
    margin-top: $space-md;
    font-size: 18px;
    line-height: 1;
    text-decoration: none;
    transition: all 250ms $transition;
  }
}

@media screen and (min-width: $bp-large) {
  .nav {
    margin: 0 auto;
    padding: $padding-sm $padding-lg;
  }

  .links {
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    background-color: transparent;
    width: 100% !important;
  }

  .link {
    font-size: 14px;
    text-decoration: none;
    color: $c-light-shades;
    padding: $space-sm;

    &:hover,
    &:hover &-index {
      color: $c-dark-accent;
    }

    &-index {
      display: inline;
      color: $c-dark-accent;
    }

    &-button {
      font-size: 14px;
      margin: 0;
      margin-left: $space-sm;

      &:hover {
        color: $c-black;
        background-color: $c-dark-accent;
      }
    }
  }
}
</style>
