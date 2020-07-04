<template>
    <div class="cart">
        <!-- 顶部返回 -->
        <van-nav-bar
         title="购物车"
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

        <!-- 商品 -->
        <div class="center">
<div v-for="(item,index) in newList" :key="item._id" >
    <van-swipe-cell>
        <van-row type="flex" class="shangping" justify='center' align='center'>
         <van-col span="4">
            <!-- <van-radio-group v-model="radio" class="radio">
            <van-radio name="1"></van-radio> -->
         <!-- <van-radio name="2">单选框 2</van-radio> -->
            <!-- </van-radio-group> -->
            <van-cell>
            <van-checkbox @change="chck(index,$event)" v-model="item.checked"/>
          </van-cell>
        </van-col>
      <van-col span="20" class="right">
           <van-card
         :num="item.num"
         :price="item.good.price"
         :desc="item.good.desc"
         :title="item.good.name"
         :thumb="item.good.img"
        >
      <template #footer>
       <van-button size="mini" @touchstart="carName('num1',item)"><span class="reduce" >-</span></van-button>
       <van-button size="mini" @touchstart="carName('num2',item)"><span class="reduce"  >+</span></van-button>
      </template>
     </van-card>
     </van-col>
   </van-row>
     <template #right>
    <van-button square text="删除" type="danger" @touchstart="deleteToCart(item._id)" class="delete-button" />
  </template>
</van-swipe-cell>
</div>
</div>
        <!-- 底部提交 -->
<van-submit-bar :price="prices*100" button-text="提交订单" @submit="onSubmit">
  <van-checkbox v-model="fullChd" >全选</van-checkbox>
  <template #tip>
    你的收货地址不支持同城送, <span @click="onClickEditAddress" class="site">修改地址</span>
  </template>
</van-submit-bar>
        <TabBer></TabBer>
    </div>
</template>
<script>
import {
  SubmitBar,
  Checkbox,
  NavBar,
  Icon,
  Card,
  Button,
  RadioGroup,
  Radio,
  Col,
  Row,
  Cell,
  SwipeCell,
  Toast 
} from "vant";
import {mapState,mapActions,mapMutations,mapGetters} from 'vuex' //引入vuex中的state数据，
import { setTimeout } from 'timers';
export default {
  name: "cart",
  components: {
    TabBer: () => import("@/components/common/TabBer.vue"),
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]: Checkbox,
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Card.name]: Card,
    [Button.name]: Button,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    [Col.name]: Col,
    [Row.name]: Row,
    [Cell.name]: Cell,
    [SwipeCell.name]: SwipeCell,
    [Toast.name]:Toast
  },
  data() {
    return {
      a: false,
      radio: true,
      list:[],
      checked:false,
      fullChd:true
    };
  },
  computed:{
    ...mapState("cart",['newList']),
    ...mapGetters('cart',["prices","fullChds"])
  },
  methods: {
    ...mapActions('cart',["getCartList"]),
    ...mapMutations("cart",["upChecked","upFull"]),
    onSubmit() {
      //提交订单
      // console.log("hhh",this.newList);
      var str =''
      this.newList.map((item) =>{
        if(item.checked) {
          str += (';'+item._id)
        }
      })
     let data={
       goods:str
     }
     this.$http.submitToCart(data).then((res) =>{
      //  console.log(res)
      Toast(res.msg)
       setTimeout(()=>{
 this.$router.push("/user")
       },1000)
     })
    },
    onClickEditAddress() {
      //修改地址
      console.log("修改");
    },
    onClickLeft() {
      //顶部返回
      //   console.log("返回");
      this.$router.back();
      //   console.log(this.$route);
    },
    onClickRight() {
      //左边按钮
      // console.log("左边按钮");
    },
    deleteToCart(id) {
      console.log(id)
      let params ={
        id : id
      }
      this.$http.deleteToCart(params).then((res) =>{ //删除方法
        Toast(res.msg)
        this.getCartList({})
      })
    },
    carName(m,item) { //更改购物车商品数量
    // console.log('老弟',m,item._id)
    if(m=='num1' && item.num ==1) return Toast("商品数量不能小于1")
    let data ={
      num:m == 'num1'?item.num-1 : item.num +1,
      id:item._id
    }
    // console.log(data)
    this.$http.updateCartNum(data).then(() =>{
      this.getCartList({})
    })
    },
    chck(index,check) {
      console.log(check)
      // console.log(this.upChecked)
      this.fullChd = check
      this.upChecked({index,check})
    },
    // ch2(blo) {
    //   let a =blo =!blo
    //   console.log(a)
    //   //  this.upFull(false)
    // }
  },
  watch:{
    // checked:function(newVal) {
    //   // console.log(this.checked)
    //   console.log("21111111111")
    //   this.upFull(newVal)
    // },
    fullChd:function(newVal) {
      console.log(newVal,'99999999999999999999')
       this.upFull(newVal)
    }
  },
  mounted() {
      this.getCartList({})
      setTimeout(() =>{
        console.log(this.prices,'5555555555555')

      },1000)
  },
  updated() {
//  console.log(this.checked)
  }
};
</script>
<style lang="scss" scpoed>
.site {
  color: blue;
}
.center {
  margin-bottom: 1.3333rem;
  .shangping {
    border-bottom: 1px #ccc solid;

    .radio {
      display: block;
      text-align: center;
      line-height: 1.68rem;
    }
  }
  .delete-button {
    height: 100%;
  }
}

.reduce {
  font-size: 0.4rem;
}
.van-card {
  background: white;
}
</style>
