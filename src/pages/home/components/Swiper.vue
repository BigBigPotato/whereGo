<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
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
  data () {
    return {
      swiperOption: {
        autoplay: 3000,
        loop: true,
        pagination: '.swiper-pagination'
      },
      swiperList: [
        {
          'id': '0001',
          'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg'
        },
        {
          'id': '0002',
          'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg'
        }
      ]
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
