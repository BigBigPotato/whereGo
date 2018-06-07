<template>
  <div class="header">
  	<router-link class="iconfont back_icon" to="/" tag="div">&#xe624;</router-link>
    <h1>选择城市</h1>
  </div>
</template>

<script>
export default {
  name: 'cityHeader'
}
</script>

<style scoped>
	.header{
    background: #00bcd4;
    line-height: 0.84rem;
    height:0.84rem;
    color: #fff;
    text-align: center;
    position: relative;
  }
  .back_icon{width:10%;position: absolute;left: 0;}
</style>
