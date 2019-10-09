<template>
    <swiper>
        <swiper-item v-for="item in detailList">
           <img :src="'http://47.106.248.143/app/img/'+item.img_src" alt="" >
        </swiper-item>
    </swiper>
</template>
<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name:'',
  props: {
      detailList:{
          type:Array,
          default(){
              return []
          }
      }
  },
  data () {
    return {
      isLoad:false
    };
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {        
    

  }
}
</script>


<style scoped>

</style>