<template>
  <div class="header">
    <div class="header_left iconfont">&#xe624;</div>
    <div class="header_input">
      <span class="iconfont">&#xe632;</span>
      <input type="text" placeholder="输入城市/经典/游玩古迹">
    </div>
    <router-link to="/city">
      <div class="header_right iconfont">
        <span>{{city}}</span>&#xe64a;
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'homeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/css/varStylus.styl';

  .header
    background:$bgColor
    line-height:0.84rem
    height:0.84rem
    color:#fff
    text-align:center
    display:flex
    .header_left
      float:left
      width:10%
    .header_input
      flex:1
      float:left
      background:#fff
      color:#ccc
      width:73%
      text-align:left
      line-height:0.64rem
      height:0.64rem
      margin-top:0.1rem
      border-radius:0.05rem
      padding-left:0.1rem
      input
        position:relative
        top:-0.07rem
    .header_right
      float:right
      min-width:15%
      font-size:0.24rem
      color:#fff
      padding:0 0.15rem
</style>
