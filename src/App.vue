<template>
  <div id="app">  
    <router-view/>
  </div>
</template>

<script>
export default {
  watch: {
      '$route':{
        handler: (to) => {
          document.title = to.meta.title || 'Otto Eklund'
        },
         immediate: true
      }
    }
}
</script>

<style lang="sass">
@use "./sass/base"
</style>
