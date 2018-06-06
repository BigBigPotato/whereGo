<template>
  <div>
    <h4 class="title">周末去哪儿</h4>
    <ul>
      <li class="border-bottom clearfix list" v-for="item in itemList" :key="item.id">
        <div class="list_img" >
          <img :src="item.ImageUrl"/>
        </div>
        <div class="info">
          <p class="info_title font_hidden">{{item.title}}</p>
          <p class="info_desc font_hidden">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'indexWeekend',
  data () {
    return {
      itemList: [
        {
          id: '001',
          ImageUrl: 'http://img1.qunarzz.com/sight/source/1505/19/58f233e11df7ef.jpg_r_640x214_6b42c9fc.jpg',
          desc: '寻长安梦，开启穿越的圆梦之旅',
          title: '西安必游TOP10'
        },
        {
          id: '002',
          ImageUrl: 'http://img1.qunarzz.com/sight/source/1505/19/58f233e11df7ef.jpg_r_640x214_6b42c9fc.jpg',
          desc: '寻长安梦，开启穿越的圆梦之旅',
          title: '西安必游TOP10'
        },
        {
          id: '003',
          ImageUrl: 'http://img1.qunarzz.com/sight/source/1505/19/58f233e11df7ef.jpg_r_640x214_6b42c9fc.jpg',
          desc: '寻长安梦，开启穿越的圆梦之旅',
          title: '西安必游TOP10'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .title{
    background:#eee;
    height: 0.8rem;
    line-height: 0.8rem;
    text-indent: 0.2rem;
    margin-top: 0.25rem;
  }
  .list_img{overflow: hidden;width: 100%;height: 0;padding-bottom: 37.21%;}
  .list_img img{width:100%;}
  .info{padding:0.1rem;}
  .info_title{line-height: 0.54rem;font-size: 0.32rem;}
  .info_desc{line-height: 0.4rem;color: #ccc;}
  button{
    display:block;
    background-color: #ff9300;
    border-radius: 0.06rem;
    padding: 0 0.2rem;
    margin-top: 0.1rem;
    color: #FFF;
    height: 0.4rem;
    font-size: 0.2rem;
  }
</style>
