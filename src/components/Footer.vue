<template>
  <div class="footer-container">
    <footer>
      <ul>
        <li>Otto Eklund 2020</li>
        <li>ottoeklund(at)gmail.com</li>
        <li>www.github.com/oteklund</li>
      </ul>
      
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="sass">
@use "../sass/_base"
.footer-container
  width: 100%
  position: absolute
  z-index: 2
footer
  padding: 10px
  width: 100%
  font-size: 0.8rem
  color: base.$lightpurple
  background: linear-gradient(to right, #0002, #0005)
  font-family: "Montserrat", sans-serif
  position: fixed
  bottom: 0
  height: 30px
  text-align: right
  ul
    display: flex
    align-items: center
    justify-content: space-evenly
    list-style: none
@media screen and (max-width: 800px)
  .footer-container
    display: none
</style>