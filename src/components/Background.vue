<template>
  <div class="background-clouds">
    <div :id="this.cloudId"></div>
    <svg width="0">
      <filter :id="filterId">
        <feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="10">
          <!-- <animate attributeName="baseFrequency" calcMode="paced" begin="0s" dur="120s" values=".01;.015;.01;" repeatCount="indefinite"/> -->
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="240" />
      </filter>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Background",
  props: ["backgroundColors", "name"],
  data() {
    return {
      cloudId: "cloud-" + this.name,
      filterId: "cloud-filter-" + this.name
    };
  },
  methods: {
    randomNumber(from, to) {
      return Math.floor(Math.random() * (to - from + 1)) + from;
    },

    randomColor(colors) {
      return colors[this.randomNumber(1, colors.length) - 1];
    },

    boxShadows(max) {
      let shadowOptions = [];
      for (let i = 0; i < max; ++i) {
        shadowOptions.push(`
      ${this.randomNumber(1, 100)}vw 
      ${this.randomNumber(1, 100)}vh 
      ${this.randomNumber(20, 40)}vmin 
      ${this.randomNumber(1, 20)}vmin
      ${this.randomColor(this.backgroundColors)}
    `);
      }
      return shadowOptions.join(",");
    },

    update() {
      document.querySelector(
        "#" + this.cloudId
      ).style.boxShadow = this.boxShadows(100);
      document.querySelector(
        "#" + this.cloudId
      ).style.filter = `url(#${this.filterId})`;
    }
  },
  mounted() {
    this.update();
  }
};
</script>

<style lang="sass">
.background-clouds *
  position: relative
  z-index: -1
  transform: translate(-100%, -100%)
  overflow: hidden
  width: 1px
  height: 1px
  border-radius: 50%
</style>