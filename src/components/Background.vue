<template>
  <div class="background-clouds">
    <div id="cloud"></div>
    <svg width="0">
      <filter id="cloud-filter">
        <feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="10" />
        <feDisplacementMap in="SourceGraphic" scale="240" />
      </filter>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Background",
  data() {
    return {};
  },
  methods: {
    randomNumber(from, to) {
      return Math.floor(Math.random() * (to - from + 1)) + from;
    },

    randomColor() {
      return arguments[this.randomNumber(1, arguments.length) - 1];
    },

    boxShadows(max) {
      let shadowOptions = [];
      for (let i = 0; i < max; ++i) {
        shadowOptions.push(`
      ${this.randomNumber(1, 100)}vw ${this.randomNumber(
          1,
          100
        )}vh ${this.randomNumber(20, 40)}vmin ${this.randomNumber(1, 20)}vmin
      ${this.randomColor("#290640", "#4B32A6", "#020659", "#BF5AAE", "#010326")}
    `);
      }
      return shadowOptions.join(",");
    },

    update() {
      document.querySelector("#cloud").style.boxShadow = this.boxShadows(100);
    }
  },
  mounted() {
    this.update();
  }
};
</script>

<style lang="sass">
#cloud
  z-index: -5
  overflow: hidden
  width: 1px
  height: 1px
  transform: translate(-100%, -100%)
  border-radius: 50%
  filter: url(#cloud-filter)
</style>