<template>
  <div class="swiper">
    <swiper :options="swiperOption" v-if="show">
      <!-- slides -->
      <swiper-slide v-for="item in list" :key="item.id">
        <img :src="item.imgUrl" class="swiper_img" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: 3000,
        loop: true,
        pagination: '.swiper-pagination'
      },
      
    }
  },
  computed: {
    show () {
      return this.list.length
    }
  }
}
</script>

<style scoped>
  .swiper >>> .swiper-pagination-bullet{
    opacity:1;
    background:#ccc;
  }
  .swiper >>> .swiper-pagination-bullet-active{
    background:#fff;
  }
  .swiper-slide{
    overflow: hidden;
    width:100%;
    height:0;
    padding-bottom:31.25%;
  }
  .swiper-slide img{width:100%;}
  .swiper_img{
    background:#ccc;
  }
</style>
