<template>
  <div>
      <swiper>
        <swiper-item v-for="item in lunbotuList">
           <img :src="'http://47.106.248.143/app/img/'+item.img_src" alt="" @load="imageLoad">
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
      isLoad:false
    };
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imageLoad(){
      if(!this.isLoad){
          this.$emit('swiperImageLoad')
          this.isLoad = true
      }
      
      
    }

  }
}
</script>


<style scoped>
</style>