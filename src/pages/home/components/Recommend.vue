<template>
  <div>
    <h4 class="title">热门推荐</h4>
    <ul>
      <li class="border-bottom clearfix list" v-for="item in itemList" :key="item.id">
        <img :src="item.ImageUrl" class="list_img" />
        <div class="info">
          <p class="info_title font_hidden">{{item.title}}</p>
          <p class="info_desc font_hidden">{{item.desc}}</p>
          <button type="button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'indexRecommend',
  data () {
    return {
      itemList: [
        {
          id: '001',
          ImageUrl: 'http://img1.qunarzz.com/sight/p0/201301/11/dd368e9b8629027693835fbb.jpg_200x200_8e79864a.jpg',
          desc: '大明宫大明宫大明',
          title: '大明宫'
        },
        {
          id: '002',
          ImageUrl: 'http://img1.qunarzz.com/sight/p0/201301/11/dd368e9b8629027693835fbb.jpg_200x200_8e79864a.jpg',
          desc: '大明宫大明宫大明',
          title: '大明宫'
        },
        {
          id: '003',
          ImageUrl: 'http://img1.qunarzz.com/sight/p0/201301/11/dd368e9b8629027693835fbb.jpg_200x200_8e79864a.jpg',
          desc: '大明宫大明宫大明',
          title: '大明宫'
        },
        {
          id: '004',
          ImageUrl: 'http://img1.qunarzz.com/sight/p0/201301/11/dd368e9b8629027693835fbb.jpg_200x200_8e79864a.jpg',
          desc: '大明宫大明宫大明',
          title: '大明宫'
        },
        {
          id: '005',
          ImageUrl: 'http://img1.qunarzz.com/sight/p0/201301/11/dd368e9b8629027693835fbb.jpg_200x200_8e79864a.jpg',
          desc: '大明宫大明宫大明',
          title: '大明宫'
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
  .list{padding:0.1rem;}
  .list_img{width:1.5rem;height: 1.5rem;float: left;margin-right: 0.3rem;}
  .info{float: left;}
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
