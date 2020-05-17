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
      <font-awesome-icon id="questionmark" :icon="['fas', 'question-circle']" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMenu",
  data() {
    return {
      aboutMenuIsActive: false,
      topics: [
        "introduction",
        "tech stack",
        "education",
        "skills",
        // "additional info"
        ]
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
  position: relative
  z-index: 3
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
  z-index: 2
  display: none
  left: 15px
  top: 15px
#questionmark
  font-size: 3rem
  color: transparentize(base.$lightpurple, 0.5)
  background-color: transparentize(base.$pink, 0.5)
  border-radius: 50%
@media screen and (max-width: 800px)
  .about-menu
    background: linear-gradient(to bottom, transparentize(base.$pink, 0.05 ), transparentize(base.$violet, 0.05 ))
@media screen and (max-width: 700px)
  .about-menu-container
    max-width: 100%
  .about-hidden
    transform: translateX(-100%)
  .tab-text
    display: none
  .about-burger
    display: block
  .projects-list
    height: 100vh
    display: flex
    flex-direction: column
    justify-content: space-evenly
    list-style: none
    align-items: center
</style>