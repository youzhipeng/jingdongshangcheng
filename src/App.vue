<template>
  <div id="app">
    <!-- <router-view name="aa"></router-view>
     -->
     <router-view></router-view>
  <!-- <div class="box">
      <router-link :to="{name:'aaa'}">首页</router-link>
    <router-link to="/b">联系人</router-link>
    <router-link to="/my">我的</router-link>
  </div> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import {mapActions} from 'vuex'
export default {
  mounted() {
    this.getCartList({})
  },
  methods: {
    ...mapActions('cart', ['getCartList'])
  }
}
</script>

<style >
*{
  margin: 0;
  padding: 0
}
html,body{
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
  position: relative;
}
.box{
position: absolute;
/* top: 0; */
right: 0;
left: 0;
bottom: 0;
height: 30px;
display: flex;
}
.box a{
  flex: 1;
  text-align: center;
  line-height: 30px;
}
</style>
