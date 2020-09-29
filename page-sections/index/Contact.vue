<template>
  <section id="contact" class="container">
    <h3 class="container-header">04. Get in touch</h3>

    <div class="form-container">
      <h2 class="form-intro">I would love to hear from you.</h2>

      <p class="form-description">
        I love meeting new people. Even if you don't have anything to say, just
        say hi. My inbox is always open. I guarantee I'll reply you.
      </p>

      <a href="mailto:kevinokeh@outlook.com" class="form-button">Say Hello</a>
    </div>
  </section>
</template>

<script>
export default {
  props: {},
}
</script>

<style lang="scss" scoped>
.container {
  font-family: 'Poppins';
  margin-top: 200px;
  padding-top: $space-xxl;

  &-header {
    font-size: 14px;
    color: $c-dark-accent;
    font-weight: 300;
  }
}

.form {
  &-intro {
    color: $c-light-shades;
    margin: $space-sm 0;
    margin-bottom: $space-xl;
  }

  &-description {
    color: $c-white;
    opacity: 0.7;
    margin: $space-md 0;
  }

  &-button {
    text-decoration: none;
    display: block;
    color: $c-light-shades;
    border: 1px solid $c-light-shades;
    padding: $space-xs $space-md;
    text-align: center;
    max-width: 200px;
    margin: $space-md 0;
    margin-top: $space-xl;
  }
}

@media screen and (min-width: $bp-large) {
  .container {
    padding-top: $space-xxxl;

    &-header {
      text-align: center;
    }
  }

  .form {
    &-intro,
    &-description {
      text-align: center;
    }

    &-container {
      max-width: 500px;
      margin: auto;
    }

    &-button {
      margin: $space-md auto;
      margin-top: $space-xl;
      max-width: 40%;
      transition: background-color ease 200ms 50ms, border-color ease 250ms 50ms,
        color ease 300ms;

      &:hover {
        border-color: $c-light-shades;
        background-color: $c-light-shades;
        color: $c-background;
        cursor: pointer;
      }
    }
  }
}
</style>
