<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
    <scroll class="content" ref="scroll"
      :probe-type="3" 
      @scroll="contentScroll"
    >
        <detail-swiper :detailList="detailList" />
        <detail-base-info :goods="goods"/>
        <detail-shop-info />
        <!-- <detail-goods-info :detailInfo="detailInfo"  @imageLoad="imageLoad"/> -->
        <detail-goods-info :detailInfo="detailInfo"  />
        <detail-param-info ref="params"/>
        <detail-comment-info ref="comment"/>
        <goods-list :goods="recommends" ref="recommends"/>
        
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li>31</li>
          <li>32</li>
          <li>33</li>
          <li>34</li>
          <li>35</li>
          <li>36</li>
          <li>37</li>
          <li>38</li>
          <li>39</li>
          <li>40</li>
          <li>41</li>
          <li>42</li>
          <li>43</li>
          <li>44</li>
          <li>45</li>
          <li>46</li>
          <li>47</li>
          <li>48</li>
          <li>49</li>
          <li>50</li>
          <li>51</li>
          <li>52</li>
          <li>53</li>
          <li>54</li>
          <li>55</li>
          <li>56</li>
          <li>57</li>
          <li>58</li>
          <li>59</li>
          <li>60</li>
          <li>61</li>
          <li>62</li>
          <li>63</li>
          <li>64</li>
          <li>65</li>
          <li>66</li>
          <li>67</li>
          <li>68</li>
          <li>69</li>
          <li>70</li>
          <li>71</li>
          <li>72</li>
          <li>73</li>
          <li>74</li>
          <li>75</li>
          <li>76</li>
          <li>77</li>
          <li>78</li>
          <li>79</li>
          <li>80</li>
        </ul>
        
    </scroll>
     <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
    <detail-bottom-bar @addToCart="addToCart"/>
  </div>
</template>
<script>
import DetailSwiper from './childComps/DetailSwiper'
import DetailNavBar from './childComps/DetailNavBar'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailBottomBar from './childComps/DetailBottomBar'



import Scroll from 'components/common/scroll/Scroll'
//商品推荐
import GoodsList from 'components/content/goods/GoodsList'



import {getDetail,getDetailGoods,Goods} from 'network/detail'
import {itemListenerMixin,backTopMIxin} from "common/mixin"
// import { log } from 'util'
import { mapActions } from 'vuex'
export default {
  name:'Detail',
  mixins:[itemListenerMixin,backTopMIxin],
  data () {
    return {
      flag:null,
      detailList:[],
      goods:{},
      detailInfo:[],
      recommends:[],
      themeTopYs:[],
      currentIndex:0,
      
    };
  },
  created () {
    this.flag = this.$route.params.flag  
    console.log(this.flag);
    
    this.getDetailSwiperdata()
    this.getDetailGoods(this.flag)

    //在渲染完成后获取最后的数据
    // this.$nextTick(() => {
    //   this.themeTopYs = [];
    //   this.themeTopYs.push(0);
    //   this.themeTopYs.push(this.$refs.params.$el.offsetTop);
    //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
    //   this.themeTopYs.push(this.$refs.recommends.$el.offsetTop);
    //   console.log(this.themeTopYs);
    // })
   
  },
  mounted(){
  },
  updated(){
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommends.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);
      console.log(this.themeTopYs);
  },
  destroyed() {
      this.$bus.$off('itemImageLoad',this.itemImgListener)
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailCommentInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    GoodsList,
    DetailBottomBar,
    Scroll,
  },
  methods: {
    ...mapActions(['addCart']),
    getDetailSwiperdata(){
      getDetail().then(res => {
        // console.log(res);
        var arr = JSON.parse(res);
        this.detailList = arr;
        this.detailInfo = arr;
        this.recommends = arr;
        // console.log(this.detailList)
      })
    },
    getDetailGoods(type){
      getDetailGoods(type).then(res => {
        var arr = JSON.parse(res);
        this.goods = new Goods(arr) 
        // console.log(this.goods);
        
      })
    },
    // imageLoad(){
    //   // this.$refs.scroll.refresh();
    //   // this.themeTopYs = []
    //   // this.themeTopYs.push(0);
    //   // this.themeTopYs.push(this.$refs.params.$el.offsetTop);
    //   // this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
    //   // this.themeTopYs.push(this.$refs.recommends.$el.offsetTop);
    //   // console.log(this.themeTopYs);
    // }, 
    contentScroll(position){
      const positionY = -position.y
      //问题 下面这种方式的i为字符串
      // for(let i in this.themeTopYs){
      //   console.log(typeof(i));//字符串  
      // }
      const length = this.themeTopYs.length
      // for(let i = 0; i < length; i++){
      //   if(this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) 
      //   || (i === length - 1 && positionY >= this.themeTopYs[i]))){
      //     // console.log(i);
      //     this.currentIndex = i
      //     this.$refs.nav.currentIndex = this.currentIndex
      //   }
      // }
      for(let i = 0; i < length-1; i++){
        if(this.currentIndex !== i && 
        (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) 
        ){
          // console.log(i);
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }

      //显示是否回顶部
      this.listenSHopBackTop(position)
    },
    //点击到相应位置
    titleClick(index){
      // console.log(index);
      //scroll运动的值为负值
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100) 
    },
    addToCart(){
      const product = {}
      product.image = this.detailList[0].img_src
      product.title = this.goods.title
      product.price = 56
      product.iid = this.flag//必须的独立标识
      console.log('123')
      // this.$store.commit('addCart', product)
      // this.$store.dispatch('addCart', product).then(res => {
      //     console.log(res)
      // })
      this.addCart(product).then(res => {
          console.log(res);
          
      })
    }
  }    
    
}
</script>


<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav{
  /* position: relative; */
  /* z-index: 9; */
  background-color: #fff;
}
/* .content{
  overflow: hidden;
  height: calc(100% - 44px);
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