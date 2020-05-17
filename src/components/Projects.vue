<template>
  <div class="projects-container" id="projects">
  <div class="projects-background-filter"></div>
    <div class="projects-content">
      <h2>Projects</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects"
}
</script>

<style lang="sass" scoped>
@use "../sass/_base"
.projects-container
  height: 100vh
  width: 100%
  background: url("../assets/whiteclouds.jpg")
  background-attachment: fixed
  background-size: cover
  .projects-background-filter
    position: absolute
    height: 100%
    width: 100%
    left: 0
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
.clouds
  height: 100vh
  object-fit: cover
  position: absolute
  top: 0
  z-index: -2
</style>