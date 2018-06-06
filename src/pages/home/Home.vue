<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import homeHeader from './components/Header'
import homeSwiper from './components/Swiper'
import homeIcons from './components/Icons'
import homeRecommend from './components/Recommend'
import homeWeekend from './components/Weekend'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcons,
    homeRecommend,
    homeWeekend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods:{
  	getInfo () {
      let self = this
  		axios.get("./static/data/index.json")
  				.then(function(res){
  					if(res.data.ret){
              let rs = res.data.datas
              self.city = rs.city
              self.swiperList = rs.swiperList
              self.iconList = rs.iconList
              self.recommendList = rs.recommendList
              self.weekendList = rs.weekendList
            }
  				})
  	}
  },
  mounted () {
  	this.getInfo()
  }
}
</script>

<style>
</style>
