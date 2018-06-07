<template>
	<div>
    <div class="banner" @click="showGallery">
      <div class="img">
        <img :src="bannerImg" /> 
      </div>
      <div class="info">
        <h4 class="pull_left">{{sightName}}</h4>
        <div class="pull_right">
          <span class="iconfont banner_icon">&#xe692;</span>{{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fadeAnimation>
      <gallery 
        v-show="galleryFlag" 
        @toHide="toHideGallery" 
        :imgArr="gallaryImgs"
      ></gallery>
    </fadeAnimation>
  </div>
</template>

<script>
import Gallery from '@/pages/common/Gallery'
import fadeAnimation from '@/pages/common/Fade'

export default {
  name: 'Banner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    Gallery,
    fadeAnimation
  },
  data () {
    return {
      galleryFlag: false
    }
  },
  methods: {
    showGallery () {
      this.galleryFlag = true
    },
    toHideGallery () {
      this.galleryFlag = false
    }
  }
}
</script>

<style scoped>
  .banner{position: relative;}
	.img{
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
  }
  .img img{width: 100%;}
  .info{
    position: absolute;
    left: 0;
    right:0;
    bottom: 0;
    color:#fff;
    padding: 0.1rem;
    background:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8));
  }
  .banner_icon{font-size: 0.24rem;margin-right: 0.05rem;}
</style>