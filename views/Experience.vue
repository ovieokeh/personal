<template>
  <section id="experience" class="container">
    <SectionHeader text="Where I've worked" :index="2" />
    <ExperienceTab :experience="experience" />
  </section>
</template>

<script>
import SectionHeader from '~/components/SectionHeader'
import ExperienceTab from '~/components/ExperienceTab'

export default {
  components: {
    SectionHeader,
    ExperienceTab,
  },
  props: {
    experience: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  font-family: 'Poppins';
  margin-top: 200px;
  padding-top: $space-xxl;
}

@media screen and (min-width: $bp-tablet) {
  .container {
    padding-top: $space-xxxl;
  }
}
</style>
