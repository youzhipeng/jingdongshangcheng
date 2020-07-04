import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 这就是一个store子模块
import cart from './cart/index'
import classy from './classIfy/index'

const store = new Vuex.Store({
  // modules这个选项用于把子module进行合并（带命名空间）
  modules: {
    cart,
    classy
  }
})

export default store