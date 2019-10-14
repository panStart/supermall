<template>
  <div class="bottom-bar">
      <div class="check-content">
          <check-button class="check-btn"></check-button>
          <span>全选</span>
      </div>
      <div>总计：{{totalPrice}}</div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
    components:{
        CheckButton
    },
    computed: {
        totalPrice(){
            return "￥" + this.$store.state.cartList.filter(item => {
                return item.checked
            }).reduce((preValue,item) => {
                return preValue + item.price * item.count
            },0)
        }
    }
}
</script>

<style scoped>
    .bottom-bar{
        position: relative;
        display: flex;

        height: 49px;
        line-height: 49px;
        /* bottom: 40px */

        background-color:#eee;
        
        
        
       
    }
    .check-content{
        display: flex;
        align-items:center;
        margin-left: 10px;
        font-size: 18px
    }
    .check-btn{
        width: 22px;
        height: 22px;
        line-height: 22px;
        margin-right: 5px;
    }
</style>