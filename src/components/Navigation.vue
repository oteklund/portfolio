<template>
  <nav>
    <ul>
      <a href="#section-one">
        <li>start</li>
      </a>
      <a href="#section-two">
        <li>about</li>
      </a>
      <a href="#section-three">
        <li>projects</li>
      </a>
      <a href="#section-four">
        <li>contact</li>
      </a>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style lang="sass">
@use "../sass/_base"
nav
  position: sticky
  z-index: 3
  height: 0
  top: 0
  ul
    display: flex
    justify-content: space-evenly
    list-style: none
    text-decoration: none
    font-family: base.$sans-serif

    li
      fon
</style>