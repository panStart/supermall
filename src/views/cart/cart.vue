<template>
  <div class="cart">
      <nav-bar class="nav_bar">
          <div slot="center">购物车({{cartLength}})</div>
      </nav-bar>
      <!-- 商品列表 -->
      <cart-list></cart-list>
      <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'
//vuex里的getters转化成计算属性
import { mapGetters } from 'vuex'
export default {
  name:'Cart',
  data () {
    return {
    };
  },
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    //1.计算属性
    // cartLength(){
    //   return this.$store.state.cartList.length
    // }
    //2.两种语法
    ...mapGetters(['cartLength'])
    // ...mapGetters({
    //   length:'cartLength'
    // })
  },
  methods: {}
}

</script>


<style scoped>
.cart{
  height: 100vh;
}
.nav_bar{
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}

</style>