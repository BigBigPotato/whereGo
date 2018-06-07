<template>
  <ul>
    <li class="border-bottom list" v-for="(item,index) in categoryList" :key="index">
      <span></span>{{item.title}}
        <div v-if="item.children" class="children">
            <detail-content 
            :categoryList="item.children" 
          ></detail-content>
        </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'detailContent',
  props: {
    categoryList: Array
  }
}
</script>

<style scoped>
  .list{
    padding: 0.2rem;
  }
  .list span{
    display: inline-block;
    width: 0.36rem;
    height: 0.36rem;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -0.4rem no-repeat;
    background-size: cover;
    position: relative;
    top: 0.11rem;
    margin-right: 0.1rem;
  }
  .children li:before{border:none;}
</style>