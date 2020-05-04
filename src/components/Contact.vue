<template>
  <div class="contact-container" id="section-four">
    <div class="contact-background">
      <div class="contact-content">
        <h2>Contact me</h2>
        <ul>
          <li><b>email</b> | ottoeklund@gmail.com</li>
          <li><b>mobile</b> | (+358) 40 552 4403</li>
          <li><b>linkedin</b> | https://bit.ly/2YuMjPy</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style lang="sass">
@use "../sass/_base"
.contact-container
  height: 100vh
  width: 100%
  overflow: hidden
  .contact-background
    position: relative
    z-index: 0
    background: url("../assets/tower-of-power.jpg")
    background-size: cover
    height: 100vh
    width: 100%
    filter: blur(0)
    max-width: 200%
    // opacity: 0.5
    box-shadow: inset 0 0 0 1000px transparentize(base.$pink, 0.3)
  .contact-content
    width: 80%
    padding: 30px
    ul
      font-family: base.$sans-serif
      margin: auto
      padding: 30px
      li
        margin: 50px auto
</style>