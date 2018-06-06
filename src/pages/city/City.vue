<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hot="hot" :cities="cities"></city-list>
    <city-initial :cities="cities"></city-initial>
  </div>
</template>

<script>
import cityHeader from './components/Header'
import citySearch from './components/Search'
import cityList from './components/List'
import cityInitial from './components/Initial'
import axios from 'axios'

export default {
  name: 'City',
  components: {
    cityHeader,
    citySearch,
    cityList,
    cityInitial
  },
  data () {
    return {
      hot: [],
      cities: {}
    }
  },
  methods: {
    getCity () {
      let self = this
      axios.get('./static/data/city.json')
          .then(function(res) {
            if(res.data.ret){
              let rs = res.data.data
              self.hot = rs.hotCities
              self.cities = rs.cities
            }
          })
    }
  },
  mounted () {
    this.getCity()
  }
}
</script>

<style>
</style>
