<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <scroll class="content" ref="scroll" 
      :probe-type="3" 
      :pull-up-load="true"
      @scroll="contentScroll"
     
      >
        <home-swiper :lunbotuList="lunbotuList" />
        <recommend-view :recommends="recommends"/>
        <feature-view/>
        <tab-control class="tab-control" :titles="['流行','新款','精选']" 
        @tabClick="tabClick"/>
        <goods-list :goods="showGoods"/>
      </scroll>
      <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/Feature'

import {getHomeMultidata,
        getHomeGoods
} from 'network/home'

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
        ],
      goods:{
        "数电实验":{list:[]},
        "EDA实验":{list:[]},
        "信号分析":{list:[]}
      },
      currentType:"数电实验",
      isShowBackTop:false
    };
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,

    HomeSwiper,
    RecommendView,
    FeatureView
  },
  created () {
    //1.请求多个数据
    this.getHomeMultidata()
    //2.请求商品信息
    this.getHomeGoods("数电实验")
    this.getHomeGoods("EDA实验")
    this.getHomeGoods("信号分析")

  },
  mounted () {
      const refresh = this.debounce(this.$refs.scroll.refresh,500)
      this.$bus.$on('itemImageLoad',() => {
          refresh()
          // console.log("123")
      })
  },
  methods: {
     /**
     * 事件监听
     * 
     */
    debounce(func,delay){
      let timer = null
      return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, args)
        })
      } 
    },
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = "数电实验"
          break
        case 1:
          this.currentType = "EDA实验"
          break
        case 2:
          this.currentType = "信号分析"
          break    
      }
      
    },    
    backTop(){  
      // console.log(this.$refs.scroll.message);
      this.$refs.scroll.scrollTo(0,0)
    },
    contentScroll(position){
      // console.log(position);
      this.isShowBackTop = (position.y) < -250 ;
    },
    // loadMore(){
    //  this.getHomeGoods(this.currentType)
    // //滑动不好下滑，图片问题
    // // this.$refs.scroll.scrollRefresh()
    // },
    /**
     * 网络请求
     * 
     */
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        // console.log(res);
        var arr = JSON.parse(res);
        this.lunbotuList = arr;
        // console.log(this.lunbotuList)
      })
    },
    getHomeGoods(type){
      getHomeGoods(type).then(res =>{
        // push数组的方法--es6
      this.goods[type].list.push(...JSON.parse(res));  
      
      // this.$refs.scroll.finishPullUp()
    })
    }
  }
}

</script>


<style scoped>
#home {
   /* padding-bottom: 50px; */
   padding-top: 44px;
   /* vh属性--可视化界面大小 */
   height: 100vh;
   position: relative;
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

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
/* .content {
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0
}

</style>