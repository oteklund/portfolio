<template>
  <div class="about-menu-container">
    <div class="about-menu">
      <p class="tab-text">menu</p>
      <ul class="projects-list">
        <li v-for="topic in this.topics" v-on:click="$emit('select-content', topic)" v-bind:key="topic.id">{{topic.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMenu",
  data() {
    return {
      topics: [
        {name: "education", id: 1},
        {name: "tech stack", id: 2},
        {name: "work experience", id: 3},
        {name: "personality", id: 4}
      ]
    }
  },
  methods: {

  }
};
</script>

<style lang="sass">
@use "../sass/base"
.about-menu-container
  position: absolute
  height: 100vh
  width: 300px
  left: 0
  z-index: 2
.tab-text
  font-weight: bold
  font-size: 20px
  letter-spacing: 0
  color: base.$lightpink
  position: absolute
  right: -35px
  top: 50%
  transform: rotate(90deg)
  font-family: base.$sans-serif
  text-shadow: 4px 4px 6px base.$purple
.about-menu
  padding: 10px
  transform: translateX(-90%)
  height: 100%
  width: 100%
  background: linear-gradient(to bottom, transparentize(base.$pink, 0.4 ), transparentize(base.$violet, 0.4 ))
  z-index: 2
  top: 0px
  transition: 0.3s
  &:hover
    transform: translateX(0%)
.projects-list
  margin: 50px auto
  font-family: base.$sans-serif
  color: base.$lightblue
  li
    margin: 15px
    padding: 15px
    cursor: pointer
// @media (max-width: 1000px)
//   .about-menu
//     display: none
</style>