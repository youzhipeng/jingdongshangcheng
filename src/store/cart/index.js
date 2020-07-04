import { getCartList } from '@/api/api'

export default  {
  namespaced: true,
  state: {
    newList: []
  },
  getters: {
    prices:(state) =>{
      var t = 0
      state.newList.map((item) =>{
        if(item.checked) {
          t += 1 *item.good.price 
        }
      })
      return t
    },
    fullChds(state) {
      // console.log(state.newList)
      // return state.newList
     let full = state.newList.filter((item) =>{
        return item.checked ==false
      })
      return full.length == 0? true : false
    }
  },
  mutations: {
    upFull(state,payload) {
      state.newList.map((item) =>{
        if(payload) {
          item.checked = true
        }else{
          item.checked = false
        }
      })
    },
    upChecked(state,payload){ //单选框的控制，修改newList里面的true
      // console.log(payload.check)
      state.newList[payload.index].checked = payload.check
    },
    updateList(state, payload) {//强行给newList加一个checked属性为true
      // console.log(payload)
      payload.map((item,index)=> {
        payload[index].checked = true
      })
      state.newList = payload
    },

  },
  actions: {
    getCartList(context, payload) {
      getCartList(payload).then(arr=>{
        console.log(arr.data,'0000000000000')
        context.commit('updateList', arr.data)
      })
    }
  }
}
