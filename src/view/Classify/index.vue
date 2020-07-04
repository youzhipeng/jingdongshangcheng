<template>
  <div class="classify">
    <div class="left">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item :title="item.cate_zh" v-for="item in list" :key="item._id" />
      </van-sidebar>
    </div>
    <div class="right">
      <div v-for="i in arrs[activeKey]" :key="i._id">
        <span>618</span>
        <van-grid :column-num="3">
          <van-grid-item v-for="value in 6" :key="value">
            <template>
              <van-image :src="i.img" />
              <p class="fonts">{{i.name}}</p>
            </template>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <TabBer></TabBer>
  </div>
</template>

<script>
import { Sidebar, SidebarItem, Grid, GridItem, Image } from "vant";
import { mapState,mapMutations } from "vuex";
export default {
  name: "classify",
  components: {
    TabBer: () => import("@/components/common/TabBer.vue"),
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Image.name]: Image
  },
  data() {
    return {
      list: [],
      activeKey: 0,
      c:{},
      arr:{}
      
    };
  },
  watch:{
    activeKey:function(newVal) {
      this.c = this.arrs
      let index =newVal
      console.log(index)
      if(this.arrs[newVal]) return
      this.getNewList()
       setTimeout(() =>{
         this.arr = this.c[index]
       },0)
    }
  },
  computed: {
    ...mapState("classy", ["arrs"])
  },
  methods: {
    ...mapMutations("classy",["mutList"]),
    async getList() {
      let arr = await this.$http.getAllCates({});
      this.list = arr.data;
      this.getNewList();
    },
    getNewList() {
      // console.log();
      let params = {
        cate: this.list[this.activeKey].cate
      };
      this.$http.getCateGoodList(params).then(res => {
        console.log(res)
        let payload = {
          idx:this.activeKey,
          val:res.data
        }
        this.mutList(payload)
      });
      //   this.getList();
      //  setTimeout(() =>{
      //     this.getCateGoodList(item.cate);
      //  },1000)
      //   console.log(this.arrs)
    }
  },
  mounted() {
    this.getList();
    console.log(this.c)
  }
};
</script>

<style lang="scss" scpoed>
.classify {
  .left {
    position: absolute;
    top: 0;
    left: 0;
    width: 2.2667rem;
    bottom: 1.4rem;
    overflow: auto;
    overflow-scrolling: touch;
  }
  .right {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 1.4rem;
    // width: 7.3333rem;
    left: 2.2rem;
    overflow: auto;
    overflow-scrolling: touch;
    .fonts {
      font-size: 14px;
    }
    .van-grid {
    }
  }
}
</style>
