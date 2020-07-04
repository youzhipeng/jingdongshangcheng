<template>
  <div class="home">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <!-- 顶部通知栏 -->
      <van-notice-bar
        mode="closeable"
        background="#E43130"
        color="#ffffff"
        left-icon="volume-o"
        scrollable
      >{{ToText(msg)}}</van-notice-bar>
      <!--搜索框-->
      <van-search
        v-model="value"
        shape="round"
        show-action
        disabled
        background="#E43130"
        :placeholder="seekName"
      >
        <template #action>
          <div @click="seekClick" class="seek">搜索</div>
        </template>
        <!-- 左边分类 -->
        <template #left>
          <div @click="iconClick" class="icons" left-icon="wap-nav">
            <van-icon name="wap-nav" />
          </div>
        </template>
      </van-search>
      <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
        <van-swipe-item v-for="item in img" :key="item._id">
          <van-image
            :src="item.img"
          />
        </van-swipe-item>
      </van-swipe>
      <!-- 为你推荐 -->
      <van-divider hairline>
        <span class="live">为你推荐</span>
      </van-divider>
      <!-- 列表 -->
      <van-list
        class="box2"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        offset="50"
        :immediate-check="false"
        @load="onLoad"
      >
        <div v-for="i in len" :key="i" @click="getClick()">
          <Good :newList="list[2 * (i - 1)]"></Good>
          <Good :newList="list[2 * (i - 1) + 1]"></Good>
        </div>
      </van-list>
    </van-pull-refresh>
    <!-- 底部导航 -->
    <TabBer></TabBer>
  </div>
</template>
<script>
import {
  NoticeBar,
  Search,
  Icon,
  Divider,
  Swipe,
  SwipeItem,
  Image,
  List,
  PullRefresh
} from "vant";
export default {
  name: "home",
  components: {
    TabBer: () => import("@/components/common/TabBer.vue"),
    Good: () => import("@/components/common/Good.vue"),
    [NoticeBar.name]: NoticeBar,
    [Search.name]: Search,
    [Icon.name]: Icon,
    [Divider.name]: Divider,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Image.name]: Image,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh
  },
  data() {
    return {
      msg:"<div></div>",
      newList: [],
      value: "",
      list: [],
      page: 1,
      loading: false,
      finished: false,
      refreshing: false,
      total:'',//商品总数
      img:[] //录播图片
    };
  },
  computed: {
    // 将html转text
    seekName() {
      //搜索框的属性
      let list = ["笔记本电脑", "手机", "电饭煲", "烧水壶"];
      return list[Math.floor(Math.random() * 4)];
    },
    len() {
      return Math.floor(this.list.length / 2 );
    }
  },
  methods: {
    // 获取轮播图
    getSwp() {
      this.$http.getSwp({}).then((res) =>{
        // console.log(res)
        this.img = res.data
      })
    },
    // 将html文本转text
     ToText(HTML){
      var input = HTML;
      return input.replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi,'').replace(/<[^>]+?>/g,'').replace(/\s+/g,' ').replace(/ /g,' ').replace(/>/g,' ');  
    },
    // 获取公告内容
    getTet() {
      this.$http.getTet({}).then((res) =>{
        // console.log(res)
        let list = []
        var arr = res.data
        for(var i =0;i < arr.length;i++) {
          // var arr = res[i].length-1
          list.push(arr[i])
          // console.log(arr[i],'4444444')
        }
        let text = list.pop()
        this.msg = text.content
        // this.ToText(text.content)
      })
    },
    seekClick() {
      //搜索的点击事件
      //   action-text==false
      console.log("hhh");
    },
    iconClick() {
      //搜索框左侧分类
      console.log("分类");
    },
    //列表到底触发事件
    onLoad() {
      this.loading = true;
      this.page++;
      if(this.total > this.list.length) {
        this.getList();
      }
      console.log("到底了");
    },
    onRefresh() {
      this.page = 1;
      this.getList();
    },
    getList() {
      let params = {
        // hot:false,
        page: this.page,
        pagesize:10
      };
      this.$http.getList(params).then(res => {
        this.total = res.data.total
        if(res.data.list.length < 10) {
          this.finished = true
        }
        if (this.refreshing) {
          this.list = res.data.list
          
        } else {
          this.list = [...this.list, ...res.data.list];
          // console.log(res);
        }
        this.loading = false;
        this.refreshing = false;
        // this.finished = false;
      });
    },
    getClick() {
      console.log("老回回");
    }
  },
  mounted() {
    this.getList();
    this.getTet()
   this.getSwp()
  }
};
</script>
<style lang="scss" scoped>
.home {
  .seek {
    color: white;
  }
  .icons {
    margin-right: 0.3rem;
    color: white;
    font-size: 0.6667rem;
  }
  .live {
    font-size: 0.6667rem;
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 0.2667rem;
    width: 100%;
    height: 100%;
    // background: #cccccc;
  }
  .box2 {
    padding-bottom: 1.2rem;
    // background: red;
  }
}
</style>
