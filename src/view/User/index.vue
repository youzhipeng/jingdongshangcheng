<template>
    <div class="user">个人中心
        <TabBer></TabBer>
    </div>
</template>

<script>
export default {
  name: "user",
  components: {
    TabBer: () => import("@/components/common/TabBer")
  }
};
</script>

<style>
</style>
