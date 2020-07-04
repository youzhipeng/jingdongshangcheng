<template>
    <div class="index">
        <router-view></router-view>
       <div class="box">
         <router-link to="/home">首页</router-link>
         <router-link to="/find">联系人</router-link>
          <router-link to="/my">我的</router-link>
       </div>
    </div>
</template>

<script>
export default {
  name: "index"
};
</script>

<style>
</style>
