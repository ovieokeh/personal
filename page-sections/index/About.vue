<template>
  <section id="about" class="container">
    <h2 class="header">About me</h2>

    <div class="content">
      <div>
        <p class="text">
          Hello! I'm Ovie, a frontend developer by mistake.
          <br /><br />
          I build stuff that can be accessed via the web, from websites, dynamic
          components, or technical articles. I care deeply about performance and
          best practices and sometimes I can spend more time on a feature to get
          it juuuust right.
          <br /><br />
          While I do not have a university degree, I feel my skills and my
          appetite for learning should more than make up for it. Just don't ask
          me to solve Gödel's Incompleteness Theorem with JavaScript thanks.
          <br /><br />
          I'm currently not looking for new opportunities but if you think you
          have an offer I can't refuse, get in touch! Here are a few
          technologies I've been working with recently:
        </p>

        <ul class="technologies">
          <li v-for="tech in technologies" :key="tech" class="tech">
            {{ tech }}
          </li>
        </ul>
      </div>

      <a class="photo-container" href="https://github.com/ovieokeh">
        <img
          src="~/assets/images/home-photo.jpg"
          class="photo"
          alt="Grayscale photo of Ovie Okeh"
        />
      </a>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    technologies: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 200px;
  padding-top: $space-xxl;
  min-height: 100vh;
}

.header {
  display: flex;
  align-items: center;
  color: $c-main;
  position: relative;
  margin-bottom: $space-xxxl;
  width: 100%;
  white-space: nowrap;
  -webkit-box-align: center;

  &::before {
    align-self: flex-end;
    counter-increment: section 1;
    content: '0' counter(section) '.';
    font-size: 18px;
    margin-right: 10px;
    color: $c-navy-light;
    position: relative;
    bottom: 2px;
  }

  &::after {
    content: '';
    display: inline-block;
    width: 100%;
    max-width: 300px;
    height: 1px;
    background-color: $c-main;
    position: relative;
    margin-left: $space-xs;
    opacity: 0.5;
  }
}

.text {
  color: $c-main;
  font-family: 'Poppins';
}

.technologies {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  padding: 0px;
  margin: 20px 0px 0px;
  list-style: none;
}

.tech {
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-size: 13px;
  color: $c-main;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: $c-accent-light;
    font-size: 14px;
    line-height: 12px;
  }
}

.photo {
  width: 100%;
  height: 100%;
  object-fit: contain;

  &-container {
    display: block;
    width: 250px;
    height: 250px;
    margin: $space-xl 0;
    position: relative;
    z-index: 0;

    &::before {
      content: '';
      display: block;
      width: inherit;
      height: inherit;
      background-color: $c-navy-light;
      position: absolute;
      mix-blend-mode: multiply;
      transition: opacity $transition 250ms;
    }

    &::after {
      content: '';
      display: block;
      width: inherit;
      height: inherit;
      border: 2px solid $c-main;
      position: absolute;
      top: 25px;
      left: 25px;
      z-index: -1;
      transition: top $transition 250ms, left $transition 250ms;
    }
  }
}

@media screen and (min-width: $bp-large) {
  .container {
    padding-top: $space-xxxl;
  }

  .content {
    display: flex;
  }

  .text {
    margin-right: $space-xl;
  }

  .photo {
    &-container {
      margin: 0;
      min-width: 250px;

      &:hover,
      &:active {
        &::before {
          opacity: 0;
          transition: opacity $transition 250ms;
        }

        &::after {
          border-color: $c-navy-light;
          top: 20px;
          left: 20px;
          transition: top $transition 250ms, left $transition 250ms;
        }
      }
    }
  }
}
</style>
