<template>
  <div>
    <div class="search">
      <input v-model="keyword" type="text" placeholder="请输入城市或拼音"/>
    </div>
    <div ref="res" class="search_result" v-show="keyword">
      <ul>
        <li 
          class="border-bottom" 
          v-for="item in list" 
          :key="item.id"
          @click="changeCity(item.name)"
        >
          {{item.name}}
        </li>
        <li v-show="show">找不到数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState,mapMutations } from 'vuex'

export default {
  name: 'citySearch',
  data () {
    return {
      list: [],
      keyword: ''
    }
  },
  computed: {
    show () {
      return !this.list.length
    }
  },
  props: {
    cities: Object
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.res)
  },
  methods: {
    changeCity (city) {
      this.toChangeCity(city)
      this.$router.push('/')
      this.keyword = ''
    },
    ...mapMutations(['toChangeCity'])
  },
  watch: {
    keyword (value) {
      let search_data = []
      for (let i in this.cities){
        this.cities[i].forEach((item,index) =>{
          if(value){
            if(item.name.indexOf(value) > -1 || item.spell.indexOf(value) > -1){
              search_data.push(item)
            }
          }else{
            this.list = []
          }
        })
      }
      this.list = search_data
    }
  }
}
</script>

<style scoped>
  .search{
    background: #00bcd4;
    line-height: 0.64rem;
    height:0.64rem;
    font-size: 0;
    padding: 0.08rem;
  }
  input{
    width: 100%;
    height: 100%;
    font-size: 0.26rem;
    color:#666;
    border-radius: 0.06rem;
    padding: 0 0.05rem;
    box-sizing: border-box;
    text-align: center;
  }
  .search_result{
    font-size: 0.24rem;
    background: #eee;
    color: #666;
    position: absolute;
    top: 1.64rem;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
  }
  li{line-height: 0.64rem;text-indent: 0.1rem;background: #fff;}
</style>
