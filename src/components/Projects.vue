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
  &::after
    position: absolute
    z-index: 0
    content: ""
    left: 0
    height: 100%
    width: 100%
    background: linear-gradient(to bottom, transparentize(#020659, 0.5), #020659)
  .projects-content
    position: relative
    z-index: 1
    padding: 30px
    display: flex
    flex-direction: column
    margin: auto
    max-height: 10%
    max-width: 600px
    h2
      margin: 30px auto
      color: base.$lightpurple
@media screen and (max-width: 700px)
  .projects-container
    background-attachment: scroll
</style>