<template>
  <div class="contact-container" id="contact">
    <div class="contact-background">
      <div class="contact-content">
        <h2>contact</h2>
        <ul>
          <li>
            <p>
              <b>email</b>
            </p> 
            <p>
              ottoeklund(at)gmail.com
            </p>
          </li>
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
      color: base.$lightblue
      font-family: base.$sans-serif
      margin: auto
      padding: 30px
      font-size: 1.2rem
      list-style: none
      li
        display: flex
        flex-direction: column
        align-items: center
        margin: 50px auto
@media screen and (max-height: 650px)
  .contact-content 
    li
      margin: 10px auto !important
</style>