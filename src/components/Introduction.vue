<template>
  <div class="introduction-container">
    <div class="introduction-content">
      <h3>introduction</h3>
      <section>
        <h4>Otto Eklund</h4>
        <h5>Web Developer</h5>
        <p>Hello! My name is Otto Eklund and I'm in the process of starting a career as a web developer. I love working with Vue and React and enjoy learning new things. I am currently looking for work, so if you are looking for a new team member, let me know!</p>
        <p>To learn more, select one of the topics from the menu. Thanks for visiting!</p>
        <h5>
          <em>-Otto</em>
        </h5>
      </section>
      <!-- <img src="../assets/lime.jpg" alt="standing in a green hallway" /> -->
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
  max-width: 600px
  height: 100%
  max-height: 600px
  margin: 50px auto
  background: url("../assets/lime.jpg") no-repeat
  background-size: cover
  .introduction-content
    // backdrop-filter: blur(2px)
    background: linear-gradient(to right, #4B32A6ff, #4B32A6aa)
    width: 100%
    height: 100%
    h3
      padding: 15px
      text-align: right
    height: 100%
    p
      margin-top: 15px
      font-family: base.$sans-serif
    h5
      font-family: base.$sans-serif
      color: base.$pink
      margin-bottom: 10px
    section
      margin: 25px
@media screen and (max-width: 600px)
  .introduction-container
    background-size: cover
</style>