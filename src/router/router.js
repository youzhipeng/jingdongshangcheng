import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Home = () => import("../view/Home") //首页
const Classify = () => import("../view/Classify") //分类
const Happy = () => import("../view/Happy") //惊喜
const Cart = () => import("../view/Cart") //购物车
const Login = () => import("../view/Login") //登入页面
const Regi = () => import("../view/Regi") //注册页面
const Seek = () => import("../view/Seek") //搜索页面
const Detail = () => import("../view/Detail") //详细页面
const User = () => import("../view/User") //个人中心页面
const Fined = () => import("../view/404") //404页面
let router = new VueRouter({
    routes: [{
            path: "/home",
            component: Home, //首页
        },
        {
            path: "/classify",
            component: Classify, //分类
        },
        {
            path: "/happy",
            component: Happy, //惊喜
        },
        {
            path: "/cart",
            component: Cart, //购物车
        },
        {
            path: "/seek",
            component: Seek, //搜索
        },
        {
            path: "/login",
            component: Login, //登入
        },
        {
            path: '/regi',
            component: Regi
        },
        {
            path: "/detail/:id",
            component: Detail, //详情页
        },
        {
            path: '/user', //个人中心
            component: User
        },
        {
            path: "/404",
            component: Fined
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: "*",
            component: Fined
        }

    ]
})
router.beforeEach((to,from ,next)=>{
    if(to.fullPath == "/cart" || to.fullPath == "/user"){ //判断to.fullPath里面的地址是不是购物车页面和个人中心页面，如果是就需要做登入判断
        if(localStorage.getItem("token")){ //再次判断购物车和个人中心是够有tokend,有就表示登入了，没有就表示没有登入
            next()
        }else{ 
            next("/login") //如果没有token就打回到登入页面
        }
    }else{//如果要去的不是购物车和个人个人中心就直接放行
        next()
    }
})
export default router