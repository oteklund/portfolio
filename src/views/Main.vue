<template>
  <div class="main">
    <Hero v-bind:backgroundColors="this.backgroundColors.hero" />
    <Navigation />
    <Footer />
    <Introduction/>
    <Projects v-bind:backgroundColors="this.backgroundColors.projects" />
    <Contact />
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import Navigation from "../components/Navigation.vue";
import Introduction from "../components/Introduction.vue";
import Projects from "../components/Projects.vue";
import Contact from '../components/Contact.vue'
import Footer from "../components/Footer.vue";
export default {
  name: "Main",
  components: {
    Hero,
    Navigation,
    Introduction,
    Projects,
    Footer,
    Contact
  },
  data() {
    return {
      colors: {
        background: "#010326",
        blue: "#020659",
        violet: "#4B32A6",
        purple: "#290640",
        pink: "#BF5AAE",
        lightpurple: "#ece0f5",
        lightpink: "#fde5f9",
        lightblue: "#eeedfc"
      },
      backgroundColors: {
        hero: ["#290640", "#4B32A6", "#020659", "#BF5AAE", "#010326"],
        projects: ["#1118", "#020659", "#fff8"]
      }
    }
  }
};
</script>

<style lang="sass">
</style>