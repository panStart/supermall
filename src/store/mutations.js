import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutation-types'

export default {
    //mutations唯一的目的就是修改state的状态
    //mutations中的方法尽量简单 单一
   
    // addCart(state, payload) {
    //     let flag = false
    //     state.cartList.some(item => {
    //         if(item.iid == payload.iid){
    //             item.count += 1
    //             flag = true
    //             return true
    //         }
    //     })
    //     if(!flag){
    //         payload.count = 1
    //         state.cartList.push(payload)
    //     }
    // }
    [ADD_COUNTER](state, payload){
        payload.count++
        localStorage.setItem('cartList',JSON.stringify(state.cartList))
    },
    [ADD_TO_CART](state, payload){
        payload.checked = true
        
        state.cartList.push(payload)
        localStorage.setItem('cartList',JSON.stringify( state.cartList))
    }
}