<template>
	<div class="gallery" @click="hideGallery">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in imgArr" :key="index">
          <img :src="item" class="swiper_img" />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  props: {
    imgArr: Array
  },
  methods: {
    hideGallery () {
      this.$emit("toHide");
    }
  }
}
</script>

<style scoped>
	.gallery{
    position: absolute;
    left: 0;
    right:0;
    bottom: 0;
    top: 0;
    z-index: 10;
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .wrapper{
    height: 0;
    padding-bottom: 100%;
  }
  .wrapper >>> .swiper-container{overflow: inherit;}
  .swiper_img{width: 100%;}
  .swiper-pagination{color:#fff;bottom: -1rem;}
</style>