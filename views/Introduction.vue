<template>
  <section id="intro" class="introduction">
    <h3 class="hi">Hi, my name is</h3>
    <h2 class="name">{{ name }}.</h2>
    <h2 class="tagline">{{ tagline }}</h2>

    <p class="intro">
      {{ intro }}
    </p>

    <ul class="roles">
      <li v-for="role in roles" :key="role" class="role">
        {{ role }}
      </li>
    </ul>

    <a :href="`mailto:${email}`" class="friendly">Get In Touch</a>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    tagline: {
      type: String,
      required: true,
    },
    intro: {
      type: String,
      required: true,
    },
    roles: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.hi {
  font-size: 14px;
  margin: $space-sm 0;
}

.name,
.tagline,
.intro,
.role,
.friendly {
  font-family: 'Poppins';
  color: $c-light-shades;
}

.hi,
.name {
  color: $c-dark-accent;
}

.name {
  font-size: 42px;
  font-weight: 600;
  margin: 0;
}

.tagline {
  color: $c-light-accent;
  font-size: 24px;
  opacity: 0.7;
  margin: 0;
}

.intro {
  line-height: 28px;
  max-width: 450px;
  margin-top: $space-sm;
}

.roles {
  margin-top: $space-xl;
  margin-bottom: 0;
  padding-left: 20px;
}

.role {
  color: $c-white;
  margin: $space-sm 0;
}

.friendly {
  display: block;
  color: $c-light-shades;
  background-color: transparent;
  border: 1px solid $c-light-shades;
  border-radius: 3px;
  padding: $space-sm;
  margin-top: $space-xl;
  width: fit-content;
  font-size: 16px;
  text-decoration: none;
  transition: background-color ease 250ms 50ms, border-color ease 250ms 50ms,
    color ease 300ms;
}

@media screen and (min-width: $bp-tablet) {
  .name,
  .tagline {
    font-size: 70px;
  }

  .tagline {
    font-size: 62px;
  }

  .roles {
    margin-bottom: 0;
  }

  .friendly {
    font-size: 18px;

    &:hover {
      background-color: $c-light-shades;
      border-color: $c-light-shades;
      color: $c-background;
    }
  }
}
</style>
