import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        //用一个变量存储
        cartList: []
    },
    mutations: {
        addCart(state, payload) {
            let flag = false
            state.cartList.some(item => {
                if(item.iid == payload.iid){
                    item.count += 1
                    flag = true
                    return true
                }
            })
            if(!flag){
                payload.count = 1
                state.cartList.push(payload)
            }
        }
    }
})

export default store