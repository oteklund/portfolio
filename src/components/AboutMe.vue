<template>
  <div class="about-me-container">
    <h3>additional info</h3>
    <section>
      <h4>hello there!</h4>
      <p>Still unsure whether or not I would the person for the job – or just curious? Here are some personal traits to help you know me better! Next, tell me a bit about yourself, send me a message at ottoeklund@gmail.com!</p>
    </section>
    <section>
      <h5>personality</h5>

    </section>
  </div>
</template>

<script>
export default {
  name: "AboutMe"
};
</script>

<style lang="sass">
@use "../sass/_base"
@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap')
.about-me-container
  margin: 50px auto
  width: 100%
  max-width: 600px
  height: 100%
  h3
    text-align: right
  h4
    font-family: "Caveat", cursive
    font-size: 2rem
  section
    margin-bottom: 15px
  p
    font-family: base.$sans-serif
@media screen and (max-width: 700px)
  .about-me-container
    margin: 15px auto
</style>