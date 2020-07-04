<template>
    <!-- <div class="tabber"> 底部 -->
        <van-tabbar route active-color="#E43130">
         <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
         <van-tabbar-item icon="search" to="/classify" dot>分类</van-tabbar-item>
         <van-tabbar-item icon="friends-o" :badge="newList.length" to="/happy">惊喜</van-tabbar-item>
         <van-tabbar-item icon="setting-o" :badge="newList.length" to="/cart">购物车</van-tabbar-item>
         <van-tabbar-item icon="setting-o" :badge="newList.length" to="/user">未登入</van-tabbar-item>
        </van-tabbar>
    <!-- </div> -->
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
import {mapState} from 'vuex'
export default {
  name: "tabber",
  computed:{
    ...mapState("cart",["newList"])
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  mounted() {
    // console.log(this.newList)
    // console.log(Tabbar, TabbarItem);
  }
};
</script>

<style>
</style>
