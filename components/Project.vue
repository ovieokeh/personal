<template>
  <div :class="className">
    <div class="project-content">
      <span class="project-content-type">{{ project.type }}</span>

      <h3 class="project-content-name">{{ project.name }}</h3>
      <p class="project-content-description">{{ project.description }}</p>

      <span class="project-content-tag">
        {{ project.tags.join(', ') }}
      </span>

      <div class="project-content-links">
        <a
          :href="project.demo"
          name="Demo Link"
          class="project-content-links-link"
        >
          <font-awesome-icon class="icon" :icon="['fa', 'external-link-alt']" />
        </a>
        <a
          :href="project.source"
          name="Source Link"
          class="project-content-links-link"
        >
          <font-awesome-icon class="icon" :icon="['fab', 'github']" />
        </a>
      </div>
    </div>

    <a :href="project.demo" class="project-image-container">
      <img
        :src="`/images/${project.image}`"
        :alt="`Project ${project.name}'s Screenshot`"
        class="project-image"
      />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
    isFlipped: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    className() {
      return this.isFlipped ? 'project alternate' : 'project'
    },
  },
}
</script>

<style lang="scss" scoped>
$project-height: 380px;

.project {
  background-color: #3b225d1a;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  height: $project-height;
  min-height: $project-height;
  margin: $space-xl 0;
  padding: 0 $space-md;
  position: relative;
  z-index: 0;

  &-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    color: $c-main;

    &-type {
      font-family: 'Source Code Pro';
      color: $c-navy-light;
      display: block;
      margin: $space-xs 0;
    }

    &-name {
      margin: $space-xs 0;
    }

    &-description {
      margin: $space-sm 0;
      line-height: 28px;
      opacity: 0.7;
    }

    &-tag {
      display: block;
      font-size: 14px;
      margin: $space-sm 0;
      opacity: 0.5;
    }

    &-links {
      &-link {
        color: $c-main;
        font-size: 24px;
        margin-right: $space-xs;
      }
    }
  }

  &-image {
    height: 100%;
    width: 100%;
    object-fit: cover;

    &-container {
      height: $project-height;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      opacity: 0.1;
    }
  }
}

@media screen and (min-width: $bp-large) {
  .project {
    background-color: transparent;
    box-shadow: unset;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    grid-auto-rows: 450px;
    align-items: center;
    min-height: unset;
    height: unset;

    &.alternate {
      direction: rtl;
    }

    &.alternate &-image-container {
      transform: perspective(1000px) rotateY(25deg);
    }

    &.alternate &-content-description {
      border-radius: 8px 0 0 8px;
      direction: ltr;
      text-align: right;
    }

    &-content {
      &-description {
        border-radius: 0 8px 8px 0;
        background-color: rgba(0, 0, 0, 0.2);
        color: $c-white;
        padding: $space-sm $space-md;
        opacity: 1;
        width: 130%;
      }
    }

    &-image {
      box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
      object-fit: contain;
      object-position: 0 0;

      &-container {
        box-shadow: unset;
        height: auto;
        width: auto;
        position: relative;
        opacity: 1;
        filter: grayscale(100%);
        transform: perspective(1000px) rotateY(-25deg);
        transition: filter 300ms $transition 50ms;

        &:hover {
          filter: unset;
        }
      }
    }
  }
}
</style>
