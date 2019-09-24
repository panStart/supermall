<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <home-swiper :lunbotuList="lunbotuList" />
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control class="tab-control" :titles="['流行','新款','精选']" 
      @tabClick="tabClick"/>
      <goods-list :goods="goods[currentType].list"/>


      <li>1</li><li>1</li><li>1</li><li> 1</li><li>1</li><li>1</li><li>1</li>
      <li>2</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li>
      <li>3</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li>
      <li>4</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li>
      <li>5</li>
      <li>6</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

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
      currentType:"数电实验"
    };
  },
  components: {
    NavBar,
    TabControl,
    GoodsList,

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
        // console.log(this.lunbotuList)
      })
    },
    getHomeGoods(type){
      getHomeGoods(type).then(res =>{
      this.goods[type].list = JSON.parse(res);
      console.log(this.goods[type].list);
      
    })
    }
  }
}

</script>


<style scoped>
#home {
   padding-bottom: 50px;
   padding-top: 44px;

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

li {
  list-style: none;
}
</style>