import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)

const state = {
    //用一个变量存储
    cartList: []
}
const store = new Vuex.Store({
    state, 
    mutations,
    actions,
    getters
})

export default store