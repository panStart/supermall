<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

      <tab-control :titles="['流行','新款','精选']" 
        @tabClick="tabClick"
        ref="tabControl1"
       class="tab-control"
       v-show="this.isTabFixed"
        />  

      <scroll class="content" ref="scroll" 
      :probe-type="3" 
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
      
      >
        <home-swiper :lunbotuList="lunbotuList" @swiperImageLoad="swiperImageLoad" />
        <recommend-view :recommends="recommends"/>
        <feature-view/>
        <tab-control :titles="['流行','新款','精选']" 
        @tabClick="tabClick"
        ref="tabControl2"
       
        />
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
// import {debounce} from 'common/utils.js'
import {itemListenerMixin} from "common/mixin"

export default {
  name:'home',
  mixins:[itemListenerMixin],
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
      isShowBackTop:false,
      tabOffsetTop:0,//控制栏的位置
      isTabFixed:false,//判断模拟控制栏的显示
      saveY:0,//离开时保存的位置
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
    //1.图片加载
    
  },
  destroyed () {
    // console.log('home destroyed');
    
  },//切换路由时销毁
  //记录路由的活跃状态
  activated () {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated () {
    //1.保存滑动距离
    this.saveY = this.$refs.scroll.getScrollY()
    //2.离开home页面取消bus监听事件
    this.$bus.$off('itemImageLoad',this.itemImgListener)
  },
  methods: {
     /**
     * 事件监听
     * 
     */
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
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },    
    backTop(){  
      // console.log(this.$refs.scroll.message);
      this.$refs.scroll.scrollTo(0,0)
    },
    contentScroll(position){
      // console.log(position);
      // 1.判断BackTop是否显示
      this.isShowBackTop = (-position.y) > 250 ;
      //2.局等tabControl是否吸顶（position：fixed）
      this.isTabFixed = (-position.y) > this.tabOffsetTop ;
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
    //滑动不好下滑，图片问题
    // this.$refs.scroll.scrollRefresh()
    },
    swiperImageLoad(){
      //2.获取tab-control的offsetTop
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    /**
     * 网络请求
     * 
     */
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        // console.log(res);
        var arr = JSON.parse(res);
        this.lunbotuList = arr;
        console.log(this.lunbotuList)
      })
    },
    getHomeGoods(type){
      getHomeGoods(type).then(res =>{
        // push数组的方法--es6
      this.goods[type].list.push(...JSON.parse(res));  
      // 获取完数据重新启动上拉加载
      this.$refs.scroll.finishPullUp()
    })
    } 
  }
}

</script>


<style scoped>
#home {
   /* padding-bottom: 50px; */
   /* vh属性--可视化界面大小 */
   height: 100vh;
   position: relative;
}
.home-nav{
  background-color: var(--color-tint);
  color:#fff;

  /* position: fixed;
  left: 0;
  right: 0; 
  top: 0; 
  z-index: 9; */
 
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
.tab-control{
  position: relative;
  z-index: 9
}
/* .fixed {
  padding: fixed;
  left: 0;
  right: 0;
  top: 44px;
} */
</style>