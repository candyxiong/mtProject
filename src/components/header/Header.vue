<template>
  <div class="header">
    <h2>{{poiInfo.name}}</h2>
  </div>
</template>

<script>
  export default {
    props:{
      poiInfo:{
        type:Object,
        default:{}
      }


    }
  }
</script>

<style scoped>

</style>
