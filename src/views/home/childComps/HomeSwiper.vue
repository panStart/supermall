<template>
  <div>
      <swiper>
        <swiper-item v-for="item in lunbotuList">
           <img :src="'http://47.106.248.143/app/img/'+item.img_src" alt="">
        </swiper-item>
      </swiper>
  </div>
</template>
<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
  name:'',
  props: {
      lunbotuList:{
          type:Array,
          default(){
              return []
          }
      }
  },
  data () {
    return {
    };
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {}
}
</script>


<style scoped>
</style>