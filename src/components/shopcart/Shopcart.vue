<template>
  <div class="shopcart-wrapper">
    <!-- 底部左侧 -->
    <div class="content-left">
      <div class="logo-wrapper">
        <span class="icon-shopping_cart logo"></span>
      </div>
      <div class="desc-wrapper">
        <p class="tip">另外{{poiInfo.shipping_fee_tip}}</p>
      </div>
    </div>

    <!-- 底部右侧 -->
    <div class="content-right">
      {{poiInfo.min_price_tip}}
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    props:{
      poiInfo:{
        type:Object,
        default:{}
      }
    }
  }
</script>

<style>
  @import url(../../common/css/icon.css);

  .shopcart-wrapper{
    width: 100%;
    height: 51px;
    background: #514f4f;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    z-index: 99;
  }

  .shopcart-wrapper .content-left{
    flex: 1;
  }

  .shopcart-wrapper .content-right{
    flex: 0 0 110px;

    font-size: 15px;
    color: #BAB9B9;
    line-height: 51px;
    text-align: center;
    font-weight: bold;
  }

  .shopcart-wrapper .content-left .logo-wrapper{
    width: 50px;
    height: 50px;
    background: #666666;
    border-radius: 50%;
    position: relative;
    top: -14px;
    left: 10px;
    text-align: center;
    float: left;
  }

  .shopcart-wrapper .content-left .logo-wrapper .logo{
    font-size: 28px;
    color: #c4c4c4;
    line-height: 50px;
  }

  .shopcart-wrapper .content-left .desc-wrapper{
    float: left;
    margin-left: 13px;
  }

  .shopcart-wrapper .content-left .desc-wrapper .tip{
    font-size: 12px;
    color: #bab9b9;
    line-height: 51px;
  }


  .shopcart-wrapper .content-left .logo-wrapper.highligh{
    background: #ffd161;
  }
  .shopcart-wrapper .content-left .logo-wrapper .logo.highligh{
    color: #2D2B2A;
  }
  .shopcart-wrapper .content-left .logo-wrapper .num{
    width: 15px;
    height: 15px;
    line-height: 15px;
    border-radius: 50%;
    font-size: 9px;
    color: white;
    background: red;
    position: absolute;
    right: 0;
    top: 0;
  }
  .shopcart-wrapper .content-left .desc-wrapper .tip.highligh{
    line-height: 12px;
  }


  .shopcart-wrapper .content-right.highligh{
    background: #FFD161;
    color: #2D2B2A;
  }

  .shopcart-wrapper .content-left .desc-wrapper .total-price {
    font-size: 18px;
    line-height: 33px;
    color: white;
  }
</style>
