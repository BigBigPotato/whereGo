<template>
	<div>
    <banner 
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    >
    </banner>
    <detail-header></detail-header>
    <detail-content :categoryList="categoryList"></detail-content>
  </div>
</template>

<script>
import Banner from './components/Banner'
import detailHeader from './components/Header'
import detailContent from './components/Content'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    Banner,
    detailHeader,
    detailContent
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  mounted () {
    let self = this
    axios.get('./static/data/detail.json',{
      params: {
        id: this.$route.params.id
      }
    }).then(function (res) {
      let rs=res.data
      if(rs.ret){
        self.sightName = rs.data.sightName
        self.bannerImg = rs.data.bannerImg
        self.gallaryImgs = rs.data.gallaryImgs
        self.categoryList = rs.data.categoryList
      }
    })
  }
}
</script>

<style scoped>
</style>