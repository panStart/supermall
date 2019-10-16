import {
    ADD_COUNTER,
    ADD_TO_CART
}  from './mutation-types'


export default {//就收方法:this.$store.dispatch('',参数)
addCart(context, payload) {
    return new Promise((resolve,reject) => {
        let flag = false
        context.state.cartList.some(item => {
            if(item.iid == payload.iid){
                // item.count += 1
                context.commit(ADD_COUNTER, item)
                resolve("此商品数量+1")
                flag = true
                return true
            }
        })
       
        
        if(!flag){
            payload.count = 1
            // context.
            context.commit(ADD_TO_CART, payload)
            resolve('添加了新商品')
        }
    })
}
}