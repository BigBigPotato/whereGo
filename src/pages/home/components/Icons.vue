<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(items,index) in pages" :key="index">
        <div class="icon_item" v-for="item in items" :key="item.id">
      		<img :src="item.url" />
      		<p>{{item.title}}</p>
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
  data () {
    return {
      swiperOption: {
        autoplay: false,
        loop: false
      },
      iconList: [
        {
          title: '景点门票',
          id: 1,
          url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        },
        {
          title: '踏青赏花',
          id: 2,
          url: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png'
        },
        {
          title: 'Q+精选',
          id: 3,
          url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        },
        {
          title: '景点门票',
          id: 4,
          url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        },
        {
          title: '踏青赏花',
          id: 5,
          url: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png'
        },
        {
          title: '景点门票',
          id: 6,
          url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        },
        {
          title: '踏青赏花',
          id: 7,
          url: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png'
        },
        {
          title: '景点门票',
          id: 8,
          url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        },
        {
          title: '景点门票',
          id: 9,
          url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        },
        {
          title: '景点门票',
          id: 10,
          url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        },
        {
          title: '景点门票',
          id: 11,
          url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        },
        {
          title: '踏青赏花',
          id: 12,
          url: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png'
        }
      ]
    }
  },
  computed: {
    pages () {
      var page = [],
      		self=this
      self.iconList.forEach(function (item, index) {
        var pageFor = Math.floor(index / 8)
        if (!page[pageFor]) {
          page[pageFor] = []
        }
        page[pageFor].push(self.iconList[index])
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
