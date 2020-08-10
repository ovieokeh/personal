<template>
  <section id="intro" class="introduction">
    <h3 class="hi">Hi, my name is</h3>
    <h2 class="name">{{ name }}.</h2>
    <h2 class="short-intro">{{ shortIntro }}</h2>

    <p class="intro">
      {{ longIntro }}
    </p>

    <ul class="roles">
      <li v-for="role in roles" :key="role" class="role">{{ role }}</li>
    </ul>

    <a href="mailto:kevinokeh@gmail.com" class="friendly">Get In Touch</a>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    shortIntro: {
      type: String,
      required: true,
    },
    longIntro: {
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
  color: $c-brand;
  margin: $space-sm 0;
}

.name,
.short-intro,
.intro,
.role,
.friendly {
  font-family: 'Poppins';
  color: $c-light-shades;
}

.name {
  font-size: 42px;
  font-weight: 600;
  margin: 0;
}

.short-intro {
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

@media screen and (min-width: $bp-large) {
  .name,
  .short-intro {
    font-size: 70px;
  }

  .short-intro {
    font-size: 62px;
  }

  .roles {
    margin-bottom: 0;
  }

  .friendly {
    font-size: 18px;

    &:hover {
      background-color: $c-brand;
      border-color: $c-brand;
      color: $c-background;
    }
  }
}
</style>
