<template>
	<div class="header">
    <router-link 
      class="header_abs iconfont" 
      v-show="show_abs"
      to="/"
      tag="div"
    >
      &#xe624;
    </router-link>
    <div class="header_fixed" v-show="!show_abs" :style="opacity">
      <router-link 
        class="iconfont back_icon" 
        to="/"
        tag="div"
      >
        &#xe624;
      </router-link>
      <h1>景点详情</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailHeader',
  data () {
    return {
      show_abs: true,
      opacity: {
        opacity: 0
      }
    }
  },
  methods: {
    changeHeader () {
      const m_top = document.documentElement.scrollTop
      if(m_top > 40){
        this.show_abs = false
        let opacity = m_top / 120
        opacity = opacity > 1 ? 1 :opacity
        this.opacity = {
          opacity: opacity
        }
      }else{
        this.show_abs = true
      }
    }
  },
  mounted () {
    window.addEventListener("scroll",this.changeHeader)
  },
  unmounted () {
    window.removeEventListener("scroll",this.changeHeader)
  }
}
</script>

<style scoped>
  .header{color:#fff;}
  .header_abs{
    position: absolute;
    left: 0.1rem;
    top: 0.1rem;
    width:0.6rem;
    height: 0.6rem;
    line-height: 0.6rem;
    border-radius:50%;
    background:rgba(0,0,0,0.7);
    text-align: center;
    font-size: 0.26rem;
  }
  .header_fixed{
    background: #00bcd4;
    line-height: 0.84rem;
    height:0.84rem;
    text-align: center;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
  }
  .back_icon{width:10%;position: absolute;left: 0;}
</style>