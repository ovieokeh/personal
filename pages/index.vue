<template>
  <main class="home">
    <h3 class="hi">Hi, my name is</h3>
    <h2 class="name">{{ name }}.</h2>
    <h2 class="short-intro">{{ shortIntro }}</h2>

    <p class="intro">
      I'm a frontend developer based in Utrecht, NL specializing in building
      (and occasionally designing) highly dynamic websites, applications, and
      everything in between.
    </p>

    <ul class="roles">
      <li v-for="role in roles" :key="role" class="role">{{ role }}</li>
    </ul>

    <a href="mailto:kevinokeh@gmail.com" class="friendly">Get In Touch</a>
  </main>
</template>

<script>
export default {
  data() {
    return {
      name: 'Ovie Okeh',
      shortIntro: 'I guzzle gasoline & sauce',
      roles: ['Software Developer', 'Technical Writer', 'B. Pepper'],
    }
  },
}
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  position: relative;
  padding: 90px $padding-sm;
  padding-bottom: $space-lg;
}

.hi {
  font-size: 14px;
  color: $c-accent;
  margin: $space-sm 0;
}

.name,
.short-intro,
.intro,
.friendly {
  font-family: 'Roboto';
  color: $c-main;
}

.name {
  font-size: 50px;
  font-weight: 600;
  margin: 0;
}

.short-intro {
  font-size: 38px;
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
  color: $c-main;
  margin: $space-sm 0;
}

.friendly {
  display: block;
  color: $c-accent;
  background-color: transparent;
  border: 1px solid $c-accent;
  border-radius: 3px;
  padding: $space-sm;
  margin-top: $space-xl;
  width: fit-content;
  font-size: 16px;

  -webkit-text-decoration: none;
  text-decoration: none;

  -webkit-transition: all 250ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 250ms cubic-bezier(0.645, 0.045, 0.355, 1);
}
.friendly:hover {
  background-color: $c-accent;
  border-color: $c-accent;
  color: $c-white;
}

@media screen and (min-width: $bp-large) {
  .home {
    display: flex;
    flex-direction: column;
    margin: 0 $padding-lg;
    padding-top: 120px;
  }

  .name,
  .short-intro {
    font-size: 70px;
    color: $c-main;
  }

  .short-intro {
    font-size: 62px;
  }

  .roles {
    margin-bottom: 0;
  }

  .friendly {
    font-size: 18px;
  }
}
</style>
