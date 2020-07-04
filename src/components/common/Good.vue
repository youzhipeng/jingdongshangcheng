<template>
    <div class="good" @click="touchstart(newList._id)">
        <img class="img" :src="newList.img" alt="">
        <p v-text="'品牌：'+newList.name"></p>
        <p v-text="newList.price+'￥'"></p>
    </div>
</template>

<script>
export default {
  name: "good",
  props:{
    newList:{
      type:Object,
      required:true
    }
  },
  methods:{
    touchstart(id) {
      // console.log("hhh ",id)
      this.$router.push(`/detail/${id}`)
    }
  },
  mounted() {
    // console.log(this.newList)
  }
};
</script>

<style lang="scss" scpoed>
.good {
  display: inline-block;
  width: 5rem;
  height: 5rem;
  border: 1px solid orange;
  box-sizing: border-box;
  &>img{
    width: 100%;
    height: 3.8rem;
    background: red;
  }
  &>p{
    font-size: 12px;
    margin-left: 0.2667rem
  }
  &>p:last-child{
    font-size: 14px;
    color: red;
  }
}
</style>
