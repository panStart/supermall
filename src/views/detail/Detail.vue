<template>
  <div>
    <detail-nav-bar/>
    <detail-swiper :detailList="detailList"/>
  </div>
</template>
<script>
import DetailSwiper from './childComps/DetailSwiper'
import DetailNavBar from './childComps/DetailNavBar'
import {getDetail,getDetailGoods,Goods} from 'network/detail'
export default {
  name:'',
  data () {
    return {
      flag:null,
      detailList:null,
      goods:null
    };
  },
  created () {
    this.flag = this.$route.params.flag  
    this.getDetailSwiperdata()
    this.getDetailGoods(this.flag)
  },
  components: {
    DetailNavBar,
    DetailSwiper
  },
  methods: {
    getDetailSwiperdata(){
      getDetail().then(res => {
        // console.log(res);
        var arr = JSON.parse(res);
        this.detailList = arr;
        //  console.log(this.detailList)
      })
    },
    getDetailGoods(type){
      getDetailGoods(type).then(res => {
        var arr = JSON.parse(res);
        this.goods = new Goods(arr) 
        // console.log(this.goods);
        
      })
    }
  }
}
</script>
<style scoped>
</style>