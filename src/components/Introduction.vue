<template>
  <div class="introduction-container">
    <div class="introduction-content">
      <h3>introduction</h3>
      <section>
        <h4>Otto Eklund</h4>
        <h5 id="introduction-subtitle">Web Developer</h5>
        <p>Hello! My name is Otto and I am starting a career as a web developer. I love working with Vue and React and enjoy learning new things. I am currently looking for work, so if you are looking to grow your team, let me know!</p>
        <p>To learn more, select one of the items from the <span class="introduction-text-highlight">topics menu</span>. Thanks for visiting!</p>
        <h5 style="margin-top: 20px">
          <em>-Otto</em>
        </h5>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduction",
  components: {}
};
</script>

<style lang="sass">
@use "../sass/_base"
.introduction-container
  height: 100%
  margin: 15px auto 50px auto
  .introduction-content
    max-width: 600px
    h3
      text-align: right
    height: 100%
    p
      margin-top: 15px
      font-family: base.$sans-serif
    h5
      font-family: base.$sans-serif
      color: base.$pink
      margin-bottom: 10px
    #introduction-subtitle
      margin-bottom: 30px
    section
      display: flex
      flex-direction: column
      justify-content: center
      margin: 30px auto
      position: relative
      z-index: 2
      background: url("../assets/lime.jpg") no-repeat
      background-size: cover
      width: 100%
      max-width: 600px
      height: 100%
      max-height: 600px
      padding: 50px
      border-radius: 50%
      transition: border-radius 0.3s
      &::before
        padding: 1px
        content: ""
        top: 0
        left: 0
        transform: translate(-1px, -1px)
        position: absolute
        z-index: -1
        background: linear-gradient(to right, #4B32A6ff, #4B32A6aa)
        width: 100%
        height: 100%
        border-radius: 50%
        transition: border-radius 0.3s
      .introduction-text-highlight
        text-shadow: 0px 0px 4px white
@media screen and (max-aspect-ratio: 2/3)
  .introduction-content 
    section
      background-position-x: center !important      
@media screen and (max-height: 700px)
  .introduction-container
    margin: 15px auto
    .introduction-content
      #introduction-subtitle
        margin-bottom: 10px
@media screen and (max-width: 700px), (max-height: 850px)
  section, section::before
    border-radius: 0 !important
</style>