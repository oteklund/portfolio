<template>
  <div class="introduction-container" id="section-two">
    <AboutMenu v-on:select-content="selected = $event" />
    <div class="introduction-content">
      <h2>About</h2>
      <article>
        <h3>{{selected.name}}</h3>
      </article>
    </div>
  </div>
</template>

<script>
import AboutMenu from "./AboutMenu.vue";
export default {
  name: "Introduction",
  components: {
    AboutMenu
  },
  data() {
    return {
      name: "introduction",
      selected: ""
    };
  }
};
</script>

<style lang="sass">
@use "../sass/base"
.introduction-container
  width: 100%
  height: 100vh
  background: linear-gradient(to bottom, base.$background, base.$violet)
  color: base.$lightblue
.introduction-content
  margin: auto
  padding: 10px
  background: #3333
  width: 90%
  height: 100%
  position: relative
  z-index: 1
  h2
    text-align: right
    margin: auto
article
  margin: 50px 0 0 250px
</style>