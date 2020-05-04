<template>
  <div class="projects-container" id="section-three">
    <Background class="projects-clouds" v-bind:backgroundColors="this.backgroundColors" v-bind:name="this.name" />
    <div class="projects-content">
      <h2>Projects</h2>
    </div>
  </div>
</template>

<script>
import Background from './Background'
export default {
  name: "Projects",
  components: {
    Background
  },
  props: ["backgroundColors"],
  data() {
    return {
      name: "projects"
    }
  }
}
</script>

<style lang="sass" scoped>
@use "../sass/_base"
.projects-container
  height: 100vh
  width: 100%
  background: linear-gradient(to bottom, transparentize(#020659, 0.5), #020659)
  .projects-content
    position: relative
    z-index: 1
    margin: auto
    height: 90%
    width: 80%
    h2
      padding-top: 20px
      text-align: center
      color: base.$lightpurple
  .background-clouds *
    z-index: -1

</style>