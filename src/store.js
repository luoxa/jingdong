import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



let store = new Vuex.Store({
  state: {
    token:'',
    cartarr:JSON.parse(localStorage.getItem('cartarr')) || []
  },
  mutations: {
    setToken(state,token){
      state.token = token
      if(token!=''){
        localStorage.setItem('token',token)
      }else{
        localStorage.removeItem('token')
      }
    },
    toCart(state,tag){
      let goods = state.cartarr.find(v=>v.label==tag.label)
      if(goods){
        goods.num++
      }else{
        state.cartarr.push({
          label:tag.label,
          num:1
        })
      }
    },
    cartAdd(state,index){
      state.cartarr[index].num++
    },
    cartRemove(state,index){
      state.cartarr[index].num--
      if(state.cartarr[index].num==0){
        state.cartarr.splice(index,1)
      }
    },
    clearCart(state){
      state.cartarr = []
    }
  },
  actions: {

  },

  getters:{
      cartsum:state=>{
        let sum = 0
        state.cartarr.forEach(v=>{
          sum+=v.num
        })
        return sum
      }

  }
})

store.subscribe((mutataions,state)=>{
  localStorage.setItem('cartarr',JSON.stringify(state.cartarr))
})


export default store