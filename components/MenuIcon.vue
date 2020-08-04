<template>
  <button class="menu" type="button" @click="onClick">
    <span :class="barClassname"></span>
    <span :class="barClassname"></span>
    <span :class="barClassname"></span>
  </button>
</template>

<script>
export default {
  name: 'MenuIcon',
  props: {
    isToggled: Boolean,
    onClick: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    barClassname() {
      return this.isToggled ? 'bar active' : 'bar'
    },
  },
}
</script>

<style lang="scss" scoped>
.menu {
  background-color: transparent;
  width: 25px;
  height: 22px;
  border: none;
  padding: 0;
  position: relative;
  z-index: 1;
  cursor: pointer;
  outline: none;
}

.bar {
  display: block;
  position: absolute;
  height: 3px;
  width: 25px;
  background-color: $c-accent;
  border-radius: 12px;
  opacity: 1;
  left: 0;
  transform-origin: left center;
  pointer-events: none;
  transition: 300ms ease-in-out;

  &:nth-child(1) {
    top: 0;
  }
  &:nth-child(2) {
    top: 9px;
  }
  &:nth-child(3) {
    top: 18px;
  }

  &.active {
    opacity: 0.6;
    transition: 300ms ease-in-out;

    &:nth-child(1) {
      transform: rotate(45deg);
      left: 3.5px;
    }
    &:nth-child(2) {
      width: 0%;
      opacity: 0;
    }
    &:nth-child(3) {
      transform: rotate(-45deg);
      left: 3.5px;
    }
  }
}

@media screen and (min-width: 768px) {
  .menu {
    display: none;
  }
}
</style>
