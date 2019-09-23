<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <home-swiper :lunbotuList="lunbotuList" />
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="['流行','新款','精选']"/>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/Feature'

import {getHomeMultidata} from 'network/home'

export default {
  name:'home',
  data () {
    return {
      lunbotuList:[],
      recommends:[
        {title:"数电实验"},
        {title:"数电实验"},
        {title:"数电实验"},
        {title:"数电实验"}
        ]
    };
  },
  components: {
    NavBar,
    TabControl ,

    HomeSwiper,
    RecommendView,
    FeatureView
  },
  created () {
    //1.请求多个数据
    getHomeMultidata().then(res => {
      // console.log(res);
      var arr = JSON.parse(res);
      this.lunbotuList = arr;
      // console.log(this.lunbotuList)
    })
  },
  methods: {}
}

</script>


<style scoped>
#home {
   padding-bottom: 50px;
  padding-top: 44px
}
.home-nav{
  background-color: var(--color-tint);
  color:#fff;

  position: fixed;
  left: 0;
  right: 0; 
  top: 0; 
  z-index: 9;
 
}
</style>