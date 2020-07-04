import fetch from '../utils/fetch'

export function regist(data) {//注册
    return fetch({
        url:"/users/regist",
        method:"POST",
        data
    })
}
export function login(data) { //登入
    return fetch({
        url:"/users/login",
        method:"POST",
        data
    })
}
export function getList(params) { //获取首页
    return fetch({
        url:"/goods/all",
        method:"GET",
        params
    })
}
export function getGoodDetail(params) { //获取商品详情
    return fetch({
        url:"/goods/datail",
        method:"GET",
        params
    })
}
export function addToCart(params) { //添加购物车
    return fetch({
        url:"/carts/add",
        method:"GET",
        params
    })
}
export function getCartList(params) { //添加购物车
    return fetch({
        url:"/carts/list",
        method:"GET",
        params
    })
}
export function deleteToCart(params) {
    return fetch({
        url:"/carts/deleteToCart",
        method:"GET",
        params
    })
}
export function updateCartNum(data) {
    return fetch({
        url:"/jd/updateCartNum",
        method:"POST",
        data
    })
}
export function submitToCart(data) {
    return fetch({
        url:"/jd/submitToCart",
        method:"POST",
        data
    })
}
export function getAllCates(params) {
    return fetch({
        url:"/jd/getAllCates",
        method:"GET",
        params
    })
}
export function getCateGoodList(params) {
    return fetch({
        url:"/jd/getCateGoodList",
        method:"GET",
        params
    })
}
export function getTet(params) {
    return fetch({
        url:"/textuse/fid",
        method:"GET",
        params
    })
}
export function getSwp(params) {//获取轮播图
    return fetch({
        url:"/goods/swpall",
        method:"GET",
        params
    })
}
export default{
    regist,
    login,
    getList,
    getGoodDetail,
    addToCart,
    getCartList,
    deleteToCart,
    updateCartNum,
    submitToCart,
    getAllCates,
    getCateGoodList,
    getTet,
    getSwp
}