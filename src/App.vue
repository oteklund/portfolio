<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Main</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="sass">
@use "./sass/base"
#nav
  z-index: 1
  position: sticky
  top: 10px
</style>
