<template>
  <h2 class="header" :style="style">
    <span class="header-index">0{{ index }}. </span> {{ text }}
  </h2>
</template>

<script>
export default {
  name: 'SectionHeader',
  props: {
    text: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    style() {
      return { counterIncrement: this.index }
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  color: $c-main;
  font-size: 18px;
  position: relative;
  margin-bottom: $space-xxl;
  width: 100%;
  white-space: nowrap;
  -webkit-box-align: center;

  &-index {
    align-self: flex-end;
    counter-increment: section 1;
    font-size: 18px;
    margin-right: 10px;
    color: $c-accent;
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

@media screen and (min-width: $bp-large) {
  .header {
    font-size: 24px;

    &::after {
      max-width: 100%;
    }
  }
}
</style>
