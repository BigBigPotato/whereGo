<template>
  <div ref="wrapper" class="list">
    <div>
      <section>
        <h1 class="border-topbottom">当前城市</h1>
        <ul class="list_wrapper">
          <li>{{city}}</li>
        </ul>
      </section>
      <section>
        <h1 class="border-topbottom">热门城市</h1>
        <ul class="list_wrapper">
          <li 
            v-for="item in hot" 
            :key="item.id"
            @click="changeCity(item.name)"
          >
            {{item.name}}
          </li>
        </ul>
      </section>
      <section v-for="(item,key) in cities" :key="key" :ref="key">
        <h1 class="border-topbottom">{{key}}</h1>
        <ul class="list_wrapper_v">
          <li 
            class="border-bottom" 
            v-for="city in item" 
            :key="city.id"
            @click="changeCity(city.name)"
          >
            {{city.name}}
          </li>
        </ul>
      </section>
  </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState } from 'vuex'

export default {
  name: 'cityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.scroll = new BScroll (this.$refs.wrapper)
  },
  methods: {
    changeCity (city) {
      this.$store.dispatch('toChangeCity',city)
      this.$router.push('/')
    }
  },
  watch: {
    letter () {
      const element = this.$refs[this.letter][0]
      this.scroll.scrollToElement(element)
    }
  }
}
</script>

<style scoped>
  .list{
    position: absolute;
    top: 1.62rem;
    right:0;
    left: 0;
    bottom:0;
    overflow: hidden;
    z-index: -1;
  }
  h1{
    line-height: 0.6rem;
    background: #eee;
    color: #666;
    text-indent: 0.2rem;
    font-size: 0.26rem;
  }
  ul{background: #fff;}
  .list_wrapper{padding:0.1rem 0.6rem 0.1rem 0;font-size: 0;;}
  .list_wrapper li{
    display: inline-block;
    width: 28%;
    border:0.02rem solid #ccc;
    text-align: center;
    padding: 0.06rem 0;
    border-radius: 0.06rem;
    font-size: 0.24rem;
    margin: 0.12rem 0.08rem;
  }
  .list_wrapper_v li{
    padding: 0.2rem 0.1rem;
  }
  .border-topbottom:before,
  .border-topbottom:after{border-color: #ccc;}
</style>
