<template>
  <div class="additional-info-container">
    <h3>additional info</h3>
    <section>
      <h4>hello there!</h4>
    </section>
    <section>
      <h5>personality</h5>
    </section>
    <p>Can't find what you're looking for – or just curious? Send me a message at ottoeklund@gmail.com!</p>
  </div>
</template>

<script>
export default {
  name: "AdditionalInfo"
};
</script>

<style lang="sass">
@use "../sass/_base"
@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap')
.additional-info-container
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
  .additional-info-container
    margin: 15px auto
</style>