<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="">
      <!-- slides -->
      <swiper-slide v-for="(items,index) in pages" :key="index">
        <div class="icon_item" v-for="item in items" :key="item.id">
      		<img :src="item.imgUrl" />
      		<p>{{item.desc}}</p>
      	</div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false,
        loop: false
      }
    }
  },
  computed: {
    pages () {
      var page = [],
      		self=this
      self.list.forEach(function (item, index) {
        var pageFor = Math.floor(index / 8)
        if (!page[pageFor]) {
          page[pageFor] = []
        }
        page[pageFor].push(self.list[index])
      })
      return page
    }
  }
}
</script>

<style scoped>
	.icons{font-size: 0;}
  .icon_item{
  	width:25%;
  	text-align:center;
  	font-size: 0.1rem;
  	float: left;
  }
  .icon_item img{width: 40%;margin: 0.25rem 0 0.1rem;}
</style>
