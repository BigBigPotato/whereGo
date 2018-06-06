<template>
  <div class="initial">
    <ul>
      <li v-for="(item,key) in cities" :key="key" @click="changeLetter">{{key}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cityInitial',
  props: {
    cities: Object
  },
  methods: {
    changeLetter (e) {
      this.$emit("toMove",e.target.innerHTML)
    }
  }
}
</script>

<style scoped>
  .initial{
    position: absolute;
    top:1.64rem;
    right:0;
    bottom:0;
    line-height: 0.4rem;
    color:#00bdf4;
    width: 0.6rem;
    text-align:center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: -1;
  }
</style>
