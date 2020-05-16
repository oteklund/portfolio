<template>
  <div class="nav-container">
    <nav class="hidden" v-on:click="this.toggleNav">
      <ul id="navlinks">
        <a href="#home">
          <li>start</li>
        </a>
        <a href="#about">
          <li>about</li>
        </a>
        <a href="#projects">
          <li>projects</li>
        </a>
        <a href="#contact">
          <li>contact</li>
        </a>
      </ul>
    </nav>
    <div class="burger" v-on:click="this.toggleNav">
      <div id="burger-line-1"></div>
      <div id="burger-line-2"></div>
      <div id="burger-line-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      navIsActive: false
    };
  },
  methods: {
    toggleNav() {
      this.navIsActive = !this.navIsActive;
      const nav = document.querySelector("nav")
      if (this.navIsActive) {
        nav.classList.remove("hidden");
      } else {
        nav.classList.add("hidden")
      }
    }
  }
};
</script>

<style lang="sass">
@use "../sass/_base"
.nav-container
  position: sticky
  height: 0
  top: 10px
  z-index: 3
  width: 100%
nav
  background: #3333
  overflow: hidden
  width: 70%
  margin: auto
  #navlinks
    display: flex
    justify-content: space-evenly
    align-items: center
    list-style: none
    text-decoration: none
    li
      font-family: base.$monospace
      color: transparentize(base.$lightblue, 0.2)
      font-size: 22px
      &:hover
        color: opacify(base.$lightblue, 1 )
        filter: drop-shadow(0px 1px 3px white)
.burger
  cursor: pointer
  position: absolute
  padding: 7px 15px
  border-radius: 50%
  display: none
  right: 15px
  top: 15px
  background: #8888
.burger div
  border-radius: 50%
  width: 3px
  height: 3px
  background: base.$lightpurple
  margin: 4px
@media screen and (max-width: 800px)
  .nav-container
    top: 0
  .burger
    display: block
  nav
    width: 100%
    transition: visibility 0s, opacity 0.2s ease
    #navlinks
      background: transparentize(base.$background, 0.2)
      width: 100%
      height: 100vh
      flex-direction: column
      li
        padding: 45px
      a
        width: 100%
        text-align: center
  .hidden
    visibility: hidden
    opacity: 0
@media screen and (min-width: 801px)
  .hidden
    visibility: visible
    opacity: 1
</style>