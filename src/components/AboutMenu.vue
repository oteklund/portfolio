<template>
  <div class="about-menu-container">
    <div class="about-menu about-hidden" v-on:click="this.toggleAboutMenu">
      <p class="tab-text">topics</p>
      <ul class="projects-list">
        <li
          v-for="(topic, index) in this.topics"
          v-on:click="$emit('select-content', topic)"
          v-bind:key="index"
        >{{topic}}</li>
      </ul>
    </div>
    <div class="about-burger" v-on:click="this.toggleAboutMenu">
      <div class="about-burger-line-1"></div>
      <div class="about-burger-line-2"></div>
      <div class="about-burger-line-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMenu",
  data() {
    return {
      aboutMenuIsActive: false,
      topics: ["introduction", "tech stack", "education", "work experience", "about me"]
    };
  },
  methods: {
    toggleAboutMenu() {
      const menu = document.querySelector(".about-menu");
      const tabText = document.querySelector(".tab-text");
      if (this.aboutMenuIsActive) {
        menu.classList.add("about-hidden");
        menu.style.zIndex = 2;
        tabText.style.filter = "none";
        document
          .querySelector(".about-content")
          .removeEventListener("click", this.toggleAboutMenu);
      } else {
        menu.classList.remove("about-hidden");
        menu.style.zIndex = 3;
        tabText.style.filter = "drop-shadow(0px 0px 2px white)";
        document
          .querySelector(".about-content")
          .addEventListener("click", this.toggleAboutMenu);
      }
      this.aboutMenuIsActive = !this.aboutMenuIsActive;
    }
  }
};
</script>

<style lang="sass">
@use "../sass/base"
.about-menu-container
  position: absolute
  height: 100vh
  width: 300px
  max-width: 70%
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
  transform: translateX(0%)
  height: 100%
  width: 100%
  background: linear-gradient(to bottom, transparentize(base.$pink, 0.4 ), transparentize(base.$violet, 0.4 ))
  top: 0px
  transition: 0.3s
.about-hidden
  transform: translateX(-90%)
.projects-list
  margin: 50px 20
  padding: 0 5px
  width: 100%
  font-family: base.$sans-serif
  color: base.$lightblue
  li
    margin: 15px
    padding: 15px
    cursor: pointer
    &:hover
      filter: drop-shadow(1px 0px 2px white)
.about-burger
  cursor: pointer
  position: absolute
  padding: 7px 15px
  border-radius: 50%
  display: none
  left: 15px
  top: 15px
  background: base.$pink
.about-burger div
  border-radius: 50%
  width: 3px
  height: 3px
  background: base.$lightpurple
  margin: 4px
@media screen and (max-width: 800px)
  .about-menu-container
    z-index: 2
  .about-menu
    background: linear-gradient(to bottom, transparentize(base.$pink, 0.05 ), transparentize(base.$violet, 0.05 ))
@media screen and (max-width: 700px)
  .about-menu-container
    max-width: 100%
    z-index: 2
  .about-hidden
    transform: translateX(-100%)
  .tab-text
    display: none
  .about-burger
    display: block
    z-index: -1
</style>