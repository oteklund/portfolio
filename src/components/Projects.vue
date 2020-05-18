<template>
  <div class="projects-container" id="projects">
    <div class="projects-content">
      <h2>projects</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects"
};
</script>

<style lang="sass" scoped>
@use "../sass/_base"
.projects-container
  height: 100vh
  width: 100%
  background: url("../assets/whiteclouds.jpg")
  background-attachment: fixed
  background-size: cover
  box-shadow: inset 0 0 0 1000px transparentize(base.$blue, 0.3)
  .projects-content
    height: 100%
    position: relative
    z-index: 1
    padding: 30px
    display: flex
    flex-direction: column
    margin: auto
    max-width: 600px
    h2
      margin: 30px auto
      color: base.$lightpurple
@media screen and (max-width: 1600px)
  .projects-container
    background-attachment: scroll
</style>