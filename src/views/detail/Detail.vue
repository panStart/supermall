<template>
  <div>
    <detail-nav-bar/>
    <detail-swiper :detailList="detailList"/>
  </div>
</template>
<script>
import DetailSwiper from './childComps/DetailSwiper'
import DetailNavBar from './childComps/DetailNavBar'
import {getDetail} from 'network/detail'
export default {
  name:'',
  data () {
    return {
      flag:null,
      detailList:null
    };
  },
  created () {
    // this.flag = this.$route.params.flag  
    this.getDetailSwiperdata()
    
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
  }
}
</script>
<style scoped>
</style>