<template>
  <div class="main">
    <Hero />
    <Navigation />
    <Footer />
    <About/>
    <Projects />
    <Contact />
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import Navigation from "../components/Navigation.vue";
import About from "../components/About.vue";
import Projects from "../components/Projects.vue";
import Contact from '../components/Contact.vue'
import Footer from "../components/Footer.vue";
export default {
  name: "Main",
  components: {
    Hero,
    Navigation,
    About,
    Projects,
    Footer,
    Contact
  }
};
</script>

<style lang="sass">
</style>