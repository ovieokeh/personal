<template>
  <div class="tabs">
    <ul role="tablist" aria-label="Experience tabs" class="tabs-list">
      <li v-for="(role, index) in experience" :key="role.company" role="tab">
        <button
          :id="`tab-${index}`"
          :class="
            role.company === selectedExperience.company
              ? 'tabs-button selected'
              : 'tabs-button'
          "
          type="button"
          @click="selectExperience(role, index)"
        >
          <span>{{ role.company }}</span>
        </button>
      </li>

      <span class="highlight" :style="highlightStyle"></span>
    </ul>

    <div role="tabpanel" class="tabs-panel">
      <h2 class="tabs-roletitle">
        {{ selectedExperience.designation }}
        <a :href="selectedExperience.url" class="tabs-roletitle--company">
          @
          {{ selectedExperience.company }}
        </a>
      </h2>
      <p class="tabs-date">{{ selectedExperience.date }}</p>

      <ul class="tabs-roles">
        <li
          v-for="role in selectedExperience.roles"
          :key="role"
          class="tabs-roles-role"
        >
          {{ role }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    experience: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedExperience: this.experience[0],
      activeTabId: 0,
    }
  },
  computed: {
    highlightStyle() {
      const mq = window.matchMedia('(max-width: 768px)')
      const translate = mq.matches
        ? `translateX(${this.activeTabId > 0 ? this.activeTabId * 150 : 0}px);`
        : `translateY(${this.activeTabId > 0 ? this.activeTabId * 40 : 0}px);`

      return `transform: ${translate}`
    },
  },
  methods: {
    selectExperience(experience, tabId) {
      this.selectedExperience = experience
      this.activeTabId = tabId
    },
  },
}
</script>

<style lang="scss" scoped>
.tabs {
  display: block;
  position: relative;
  min-height: 300px;

  &-list {
    display: flex;
    position: relative;
    width: calc(100% + (2 * #{$padding-sm}));
    padding: 0;
    margin: 0;
    margin-left: -#{$padding-sm};
    margin-bottom: $space-md;
    list-style: none;
    overflow-x: scroll;
    z-index: 3;

    &:first-of-type {
      margin-left: 0;
    }
  }

  &-panel {
    min-height: 360px;
  }

  &-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    width: 150px;
    background-color: transparent;
    color: $c-white;
    font-size: 14px;
    height: 40px;
    padding: 0 $space-sm;
    transition: $transition;
    border-style: none;
    border-bottom: 2px solid $c-brand;
    border-radius: 0;
    white-space: nowrap;
    outline: none;
    opacity: 0.6;
    transition: all 250ms $transition 0s;

    &:hover,
    &.selected {
      background-color: transparentize($color: $c-brand, $amount: 0.9);
      opacity: 1;
    }
  }

  &-roletitle {
    color: $c-light-shades;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: $space-xs;

    &--company {
      color: $c-white;
      text-decoration: none;
    }
  }

  &-date {
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 0.05em;
    color: $c-brand;
    margin-bottom: $space-md;
  }

  &-roles {
    color: $c-white;
    font-size: 16px;
    font-weight: 300;
    list-style: none;
    padding-left: 0;

    &-role {
      line-height: 20px;
      margin-bottom: $space-sm;
      padding-left: $space-md;
      position: relative;

      &::before {
        content: '▹';
        position: absolute;
        left: 0;
        font-size: 18px;
        line-height: 20px;
      }
    }
  }
}

.highlight {
  display: block;
  background: $c-light-shades;
  height: 2px;
  border-radius: 5px;
  position: absolute;
  left: 0;
  transition: transform 250ms $transition;
  transition-delay: 0.1s;
  z-index: 10;
  width: 100%;
  max-width: 150px;

  top: auto;
  bottom: 0;
  margin-left: 0;
}

@media screen and (min-width: $bp-large) {
  .tabs {
    display: flex;

    &-list {
      display: block;
      border-bottom: 0;
      min-width: max-content;
      width: initial;
      margin-right: $space-xxl;
      overflow-x: hidden;
    }

    &-button {
      justify-content: flex-start;
      width: 200px;
      border-bottom: 0;
      border-left: 2px solid $c-brand;
      white-space: normal;
      cursor: pointer;
    }

    &-roletitle--company:hover {
      color: $c-light-shades;
    }

    &-roles {
      font-size: 16px;
      font-weight: 300;
      opacity: 0.8;

      &-role {
        line-height: normal;

        &::before {
          font-size: 16px;
        }
      }
    }
  }

  .highlight {
    display: block;
    background: $c-light-shades;
    width: 2px;
    height: 40px;
    border-radius: 3px;
    left: 0;
    top: 0;
  }
}
</style>
