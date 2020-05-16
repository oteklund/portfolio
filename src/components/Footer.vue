<template>
  <div class="footer-container">
    <footer>
      <ul>
        <li>Otto Eklund 2020</li>
        <li>ottoeklund@gmail.com</li>
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
  color: base.$pink
  background: linear-gradient(to right, #2222, #5555)
  font-family: "Montserrat", sans-serif
  position: fixed
  bottom: 0
  height: 60px
  text-align: right
  ul
    list-style: none
@media screen and (max-width: 800px)
  .footer-container
    display: none
</style>