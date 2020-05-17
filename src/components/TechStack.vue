<template>
  <div class="tech-stack-container">
    <h3>Tech Stack</h3>
    <div class="tech-stack-grid">
      <p style="color: #F7DF1E; background: #F7DF1E11">JavaScript</p>
      <p style="color: #187ABF; background: #187ABF11">TypeScript</p>
      <p style="color: #689F63; background: #689F6311">Node.js</p>
      <p style="color: #41B883; background: #41B88311">Vue.js</p>
      <p style="color: #61DAFB; background: #61DAFB11">React</p>
      <p style="color: #DD0330; background: #DD033011">Angular</p>
      <p style="color: #E34F26; background: #E34F2611">HTML 5</p>
      <p style="color: #2897D1; background: #2897D111">CSS 3</p>
      <p style="color: #F05033; background: #F0503311">Git</p>
      <p style="color: #EC912D; background: #EC912D11">Amazon AWS</p>
      <p style="color: #ddd; background: #ddd1">SQL</p>
      <p style="color: #aaa; background: #aaa1">NoSQL</p>
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
  margin: 15px auto 50px auto
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
      font-family: base.$monospace
      font-size: 22px
      font-weight: 500
      transition: transform 0.2s
      &:hover
        transform: scale(0.98)
        opacity: 1
  @media screen and (max-width: 525px)
    .tech-stack-grid
      grid-template: repeat(6, 1fr) / repeat(2, 1fr)
</style>