<template>
  <div class="contact-container" id="contact">
    <div class="contact-background">
      <div class="contact-content">
        <h2>contact</h2>
        <ul>
          <li><b>email</b> ottoeklund(at)gmail.com</li>
          <li><b>mobile</b>(+358) 40 552 4403</li>
          <li><a href="https://bit.ly/2YuMjPy"><b>linkedin</b></a></li>
          <li><a href="https://www.github.com/oteklund"><b>github</b></a></li>
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
    box-shadow: inset 0 0 0 1000px transparentize(base.$pink, 0.3)
  .contact-content
    padding: 30px
    margin: auto
    display: flex
    flex-direction: column
    color: #000c
    width: 100%
    max-width: 600px
    h2
      margin: 30px auto
    ul
      display: flex
      flex-direction: column

      font-family: base.$sans-serif
      margin: auto
      padding: 30px
      font-size: 1.2rem
      list-style: none
      li
        margin: 50px auto
@media screen and (max-height: 650px)
  .contact-content 
    li
      margin: 10px auto !important
</style>