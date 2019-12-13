<template>
  <div class='MCarousel'>
    <img src="" alt="" srcset="">
    <div class="bottom">
      <p></p>
      <ul class="guider">
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      data:[]
    }
  }
}
</script>
<style lang="less" scoped>
 .MCarousel{
   img{
     height: 100%;
     width: 100%;
     .bottom{
       background-color: rgba(0, 0, 0, 0.2)
     }
   }
 }
</style>
