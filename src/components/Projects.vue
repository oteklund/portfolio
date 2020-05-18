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
  background: linear-gradient(to bottom, transparent, base.$blue)
  &::after
    content: ""
    position: absolute
    z-index: -2
    top: 200vh
    width: 100%
    height: 100%
    background: url("../assets/whiteclouds.jpg") fixed
    background-size: cover
    will-change: transform
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