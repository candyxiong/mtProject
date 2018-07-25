<template>
  <div class="nav">
    <router-link class="nav-item" to="/goods">点菜<i class="line"></i></router-link>
    <router-link class="nav-item" to="/ratings">评价<i class="line"></i></router-link>
    <router-link class="nav-item" to="/seller">商家<i class="line"></i></router-link>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .nav{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #e4e4e4;
  }
  .nav-item{
    flex:1;
    text-align: center;
    text-decoration:none;
    color: #666;
    position: relative;
  }

  .nav .active{
    color: #fb2;
  }
  .nav .active .line{
    width: 20px;
    height: 2px;
    display: inline-block;
    background: #fb2;

    position: absolute;
    left: 50%;
    bottom: 0;
    margin-left: -10px;

  }
</style>
