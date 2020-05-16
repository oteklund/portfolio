<template>
  <div class="contact-container" id="contact">
    <div class="contact-background">
      <div class="contact-content">
        <h2>Contact</h2>
        <ul>
          <li><b>email</b><br>ottoeklund@gmail.com</li>
          <li><b>mobile</b><br>(+358) 40 552 4403</li>
          <li><b>linkedin</b><br><a href="https://bit.ly/2YuMjPy">https://bit.ly/2YuMjPy</a></li>
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
    z-index: 2
    background: url("../assets/tower-of-power.jpg")
    background-size: cover
    height: 100vh
    width: 100%
    filter: blur(0)
    max-width: 200%
    // opacity: 0.5
    box-shadow: inset 0 0 0 1000px transparentize(base.$pink, 0.3)
  .contact-content
    color: #000c
    width: 80%
    max-width: 600px
    padding-top: 10vh
    margin-left: 15vw
    ul
      font-family: base.$sans-serif
      margin: auto
      padding: 30px
      font-size: 1.2rem
      li
        margin: 50px auto
@media screen and (max-height: 650px)
  .contact-content 
    li
      margin: 10px auto !important
</style>