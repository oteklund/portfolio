<template>
  <div class="about-container" id="about">
    <AboutMenu v-on:select-content="selected = $event" />
    <div class="about-content">
      <h2 class="about-title">About</h2>
      <Introduction v-if="this.selected === 'introduction'" />
      <Education v-if="this.selected === 'education'" />
      <TechStack v-if="this.selected === 'tech stack'" />
    </div>
  </div>
</template>

<script>
import AboutMenu from "./AboutMenu.vue";
import Introduction from './Introduction.vue'
import Education from './Education.vue'
import TechStack from './TechStack.vue'
export default {
  name: "About",
  components: {
    AboutMenu,
    Introduction,
    Education,
    TechStack
  },
  data() {
    return {
      selected: "introduction"
    };
  }
};
</script>

<style lang="sass">
@use "../sass/base"
.about-container
  width: 100%
  height: 100vh
  background: linear-gradient(to bottom, base.$background, base.$violet)
  color: base.$lightblue
.about-content
  margin: auto
  display: flex
  flex-direction: column
  padding: 30px
  background: #3333
  // width: 90%
  height: 100%
  position: relative
  z-index: 1
  .about-title
    max-width: 600px
    text-align: right
    margin: 30px auto
@media screen and (max-width: 600px), (max-height: 800px)
  .about-content
    overflow-y: scroll
    scrollbar-width: thin
    scrollbar-color: #5555, #aaaa
    &::-webkit-scrollbar
      width: 8px
    &::-webkit-scrollbar-track
      background: linear-gradient(to bottom, #BF5AAE55, #4B32A655)
    &::-webkit-scrollbar-thumb
      background-color: #7777
      border-radius: 6px
      border: 1px solid transparent
</style>