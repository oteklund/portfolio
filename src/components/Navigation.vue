<template>
  <div class="nav-container">
    <nav class="hidden" v-on:click="this.toggleNav">
      <ul id="navlinks">
        <li v-on:click="scrollTo('home')">start</li>
        <li v-on:click="scrollTo('about')">about</li>
        <li v-on:click="scrollTo('projects')">projects</li>
        <li v-on:click="scrollTo('contact')">contact</li>
      </ul>
    </nav>
    <div class="burger" v-on:click="this.toggleNav">
      <font-awesome-icon id="compass" :icon="['fas', 'compass']" />
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
      const nav = document.querySelector("nav");
      if (this.navIsActive) {
        nav.classList.remove("hidden");
      } else {
        nav.classList.add("hidden");
      }
    },
    scrollTo(id) {
      document.getElementById(id).scrollIntoView(true);
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
  background: #0005
  overflow: hidden
  width: 70%
  margin: auto
  #navlinks
    position: relative
    display: flex
    justify-content: space-evenly
    align-items: center
    list-style: none
    text-decoration: none
    li
      font-family: base.$monospace
      color: base.$lightblue
      font-size: 22px
      transition: filter 200ms
      cursor: pointer
      &:hover
        opacity: 1
        filter: drop-shadow(0px 0px 1px white)
.burger
  cursor: pointer
  position: absolute
  display: none
  right: 15px
  top: 15px
#compass
  font-size: 3rem
  color: transparentize(base.$blue, 0.5) 
  background: transparentize(base.$lightpurple, 0.5)
  border-radius: 50%
@media screen and (max-width: 800px)
  .nav-container
    top: 0
    z-index: 4
  .burger
    display: block
    z-index: 5
  nav
    width: 100%
    transition: visibility 0s, opacity 0.2s ease
    #navlinks
      background: transparentize(base.$background, 0.2)
      z-index: 4
      width: 100%
      height: 100vh
      flex-direction: column
      li
        max-padding: 45px
      a
        width: 100%
        cursor: pointer
        text-align: center
  .hidden
    visibility: hidden
    opacity: 0
@media screen and (min-width: 801px)
  .hidden
    visibility: visible
    opacity: 1
</style>