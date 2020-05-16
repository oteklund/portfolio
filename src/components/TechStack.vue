<template>
  <div class="tech-stack-container">
    <h3>Tech Stack</h3>
    <div class="tech-stack-grid">
      <p style="background-color: #F7DF1Eaa; color: #222">JavaScript</p>
      <p style="background-color: #187ABFaa">TypeScript</p>
      <p style="background-color: #689F63aa">Node.js</p>
      <p style="background-color: #41B883aa">Vue.js</p>
      <p style="background-color: #61DAFBaa; color: #222">React</p>
      <p style="background-color: #DD0330aa">Angular</p>
      <p style="background-color: #E34F26aa">HTML 5</p>
      <p style="background-color: #2897D1aa">CSS 3</p>
      <p style="background-color: #F05033aa">Git</p>
      <p style="background-color: #EC912Daa">Amazon AWS</p>
      <p style="background-color: #444a">SQL</p>
      <p style="background-color: #aaaa; color: #222">NoSQL</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TechStack"
};
</script>

<style lang="sass">
@use "../sass/_base"
.tech-stack-container
  width: 100%
  max-width: 600px
  height: 100%
  max-height: 600px
  margin: 0px auto 50px auto
  h3
    text-align: right
  .tech-stack-grid
    margin-top: 30px
    display: grid
    height: 100%
    width: 100%
    grid-template: repeat(4, 1fr) / repeat(3, 1fr)
    gap: 5px
    p
      display: flex
      align-items: center
      justify-content: center
      font-family: base.$sans-serif
      font-size: 20px
      transition: transform 0.2s
      &:hover
        transform: scale(0.98)
  @media screen and (max-width: 525px)
    .tech-stack-grid
      grid-template: repeat(6, 1fr) / repeat(2, 1fr)
</style>