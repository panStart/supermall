import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)

var cartList = JSON.parse(localStorage.getItem('cartList')||'[]')
const state = {
    //用一个变量存储
    cartList: cartList
}
const store = new Vuex.Store({
    state, 
    mutations,
    actions,
    getters
})

export default store