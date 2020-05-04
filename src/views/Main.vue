<template>
  <div class="main">
    <Hero />
    <Introduction />
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import Introduction from "../components/Introduction.vue";
export default {
  name: "Main",
  components: {
    Hero,
    Introduction
  }
};
</script>

<style lang="sass">

</style>