<template>
  <div class="hero">
    <Title />
    <Background />
  </div>
</template>

<script>
import Title from "./Title.vue";
import Background from "./Background.vue";
export default {
  name: "Hero",
  components: {
    Title,
    Background
  },
  methods: {
    calculatePathLengths() {
      const letters = document.querySelectorAll("#logo path");
      for (let i = 0; i < letters.length; i++) {
        console.log(
          `Letter ${i} has a length of ${letters[i].getTotalLength()}`
        );
      }
    }
  },
  mounted() {
    this.calculatePathLengths();
  }
};
</script>

<style lang="sass">
@use "../sass/_base"
.hero #logo
  z-index: 5
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
    stroke-dasharray: 606px
    stroke-dashoffset: 606px
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

@keyframes line-anim
  to
    stroke-dashoffset: 0
@keyframes fill
  from
    fill: transparent
    opacity: 0.5
  to
    fill: base.$lightpurple
    opacity: 1
</style>