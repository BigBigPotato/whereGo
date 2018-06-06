<template>
  <div class="search">
  	<input type="text" placeholder="请输入城市或拼音" />
  </div>
</template>

<script>
export default {
  name: 'citySearch'
}
</script>

<style scoped>
  .search{
    background: #00bcd4;
    line-height: 0.64rem;
    height:0.64rem;
    padding: 0.08rem;
    font-size: 0;
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
</style>
