<template>
  <div class="projects-container" id="projects">
    <div class="projects-background-filter">
      <div class="projects-content">
        <h2>projects</h2>
      </div>
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
    left:0
    height: 100%
    width: 100%
    background: linear-gradient(to bottom, transparentize(#020659, 0.5), #020659)
  .projects-content
    padding: 30px
    display: flex
    flex-direction: column
    margin: auto
    max-height: 10%
    max-width: 600px
    h2
      margin: 30px auto
      color: base.$lightpurple
</style>