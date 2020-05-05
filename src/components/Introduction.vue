<template>
  <div class="introduction-container" id="about">
    <AboutMenu v-on:select-content="selected = $event" />
    <div class="introduction-content">
      <article>
      <h2>About</h2>
        <h3>{{selected.name}}</h3>
        <p>{{ selected.content }}</p>
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
  padding: 30px
  background: #3333
  // width: 90%
  height: 100%
  position: relative
  z-index: 1
  h2
    text-align: right
    margin: 30px auto
article
  max-width: 600px
  margin: 50px auto
  text-align: right
  p
    text-align: justify
    font-family: base.$sans-serif
@media screen and (max-width: 500px)
  .introduction-content
    overflow-y: scroll
    scrollbar-width: thin
    scrollbar-color: #5555, #aaaa
    &::-webkit-scrollbar
      width: 5px
    &::-webkit-scrollbar-track
      background: linear-gradient(to bottom, #BF5AAE55, #4B32A655)
    &::-webkit-scrollbar-thumb
      background-color: #7777
      border-radius: 6px
      border: 1px solid transparent
</style>