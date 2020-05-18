<template>
  <div class="hero" id="home" v-on:click="this.scrollToContent">
      <Title />
    <Parallax :speedFactor="0.2" breakpoint="(min-width: 80px)" direction="down" :sectionHeight="100">
      <img id="hero-clouds" src="../assets/purpleclouds.jpg" alt="purple clouds">
    </Parallax>
    <div class="hero-background"></div>
  </div>
</template>

<script>
import Title from "./Title.vue";
import Parallax from 'vue-parallaxy'
export default {
  name: "Hero",
  components: {
    Title,
    Parallax
  },
  methods: {
    scrollToContent() {
      document.querySelector("#about").scrollIntoView()
    },
    showPage() {
      document.body.classList.remove("js-loading")
    }
  },
  mounted(){
    const img = document.querySelector("#hero-clouds")
    document.body.classList.add("js-loading")
    img.addEventListener("load", this.showPage)
  }
};
</script>

<style lang="sass">
@use "../sass/_base"
.js-loading *, .js-loading *::before, .js-loading *::after
  animation-play-state: paused !important
.hero
  height: 100vh
.hero-background
  position: absolute
  top: 0
  z-index: -1
  height: 100vh
  width: 100%
  background-image: linear-gradient(to top, transparentize(base.$background, 0.6), transparentize(base.$purple, 0.1))
  color: base.$lightpink
  animation: opacity 4s ease-out
#hero-clouds
  animation: grow 4s ease forwards
.hero #logo
  z-index: 1
  position: absolute
  max-width: 90%
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  animation: fill 2s ease-in forwards
  
  path:nth-child(1)
    stroke-dasharray: 594px
    stroke-dashoffset: 594px
    animation: line-anim 1s ease forwards
  path:nth-child(2)
    stroke-dasharray: 402px
    stroke-dashoffset: 402px
    animation: line-anim 1s ease forwards 0.1s
  path:nth-child(3)
    stroke-dasharray: 401px
    stroke-dashoffset: 401px
    animation: line-anim 1s ease forwards 0.2s
  path:nth-child(4)
    stroke-dasharray: 594px
    stroke-dashoffset: 594px
    animation: line-anim 1s ease forwards 0.3s
  path:nth-child(5)
    stroke-dasharray: 607px
    stroke-dashoffset: 607px
    animation: line-anim 1s ease forwards 0.4s
  path:nth-child(6)
    stroke-dasharray: 588px
    stroke-dashoffset: 588px
    animation: line-anim 1s ease forwards 0.5s
  path:nth-child(7)
    stroke-dasharray: 387px
    stroke-dashoffset: 387px
    animation: line-anim 1s ease forwards 0.6s
  path:nth-child(8)
    stroke-dasharray: 562px
    stroke-dashoffset: 562px
    animation: line-anim 1s ease forwards 0.7s
  path:nth-child(9)
    stroke-dasharray: 781px
    stroke-dashoffset: 781px
    animation: line-anim 1s ease forwards 0.8s
  path:nth-child(10)
    stroke-dasharray: 632px
    stroke-dashoffset: 632px
    animation: line-anim 1s ease forwards 0.9s
@keyframes opacity
  from
    opacity: 0
  to
    opacity: 1
@keyframes line-anim
  to
    stroke-dashoffset: 0
@keyframes fill
  from
    fill: transparent
    opacity: 0.5
  to
    fill: transparentize(base.$lightpurple, 0.3)
    opacity: 1
@keyframes grow
  from
    transform: scale(1)
    filter: blur(0)
  to
    transform: scale(1.05)
    filter: blur(3px)
</style>