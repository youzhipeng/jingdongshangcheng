<template>
 <div class="detail">
       <!-- 顶部返回 -->
        <van-nav-bar
         :title="info.name"
         left-text="返回"
         right-text="..."
         left-arrow
         @click-left="onClickLeft"
         @click-right="onClickRight"
        >
        <template #right>
         <van-icon name="ellipsis" size="20" />
        </template>
        </van-nav-bar>
   <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
  <van-swipe-item>
    <img class="img" :src="info.img" alt="">
  </van-swipe-item>
    <van-swipe-item>
    <img class="img" :src="info.img" alt="">
  </van-swipe-item>
    <van-swipe-item>
    <img class="img" :src="info.img" alt="">
  </van-swipe-item>
</van-swipe>
<p v-text="'商品名：'+info.name" class="p1"></p>
<p v-text="info.desc" class="p2"></p>
<p v-text="'价格：'+info.price+'￥'" class="p3"></p>
   <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" dot />
  <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
  <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
  <van-goods-action-button type="warning" text="加入购物车" @click="addToCarts"/>
  <van-goods-action-button type="danger" text="立即购买" />
 </van-goods-action>
   </div>
</template>

<script>
// import $ from "jquery";
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Swipe,
  SwipeItem,
  NavBar,
  Icon
} from "vant";
export default {
  name: "deatil",
  data() {
    return {
      info: {}
    };
  },
  components: {
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [NavBar.name]:NavBar,
    [Icon.name]:Icon
  },
  mounted() {
    // this.info =
    // console.log(this.$route.params.id,"9999id")
 this.getList()
  },
  methods: {
    getList() {
         let params = {
      good_id: this.$route.params.id
    };
    // console.log(good_id)
    this.$http.getGoodDetail(params).then(res => { //获取详情页数据
      this.info = res.data[0];
      // console.log(res.data)
    });
    },
    addToCarts() {
      let data = {
        num: 1,
        good_id: this.info._id
      };
      this.$http.addToCart(data).then(res => { //添加购物车
        setTimeout(() => {
          console.log(res)
          this.$router.push("/cart");
        }, 1000);
      });
      // console.log("lao ")
    },
    // 顶部返回按钮
    onClickLeft() {
      this.$router.back()
    },
  // 顶部右边按钮
  onClickRight() {
    console.log("")
  }
  }
};
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  text-align: center;
}
.detail {
  .img {
    width: 100%;
    height: 100%;
    background: red;
  }
  .p1 {
    font-size: 20px;
    margin-left: 0.3rem;
  }
  .p2 {
    width: 9rem;
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 0.3rem;
  }
  .p3 {
    font-size: 24px;
    margin-left: 0.3rem;
    color: red;
  }
}
</style>
