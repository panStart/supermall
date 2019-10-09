<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length !== 0">
      <div class="info-list">
          <img v-for="item in detailInfo" :src="'http://47.106.248.143/app/img/'+item.img_src" alt="" @load="imgLoad">
      </div>
  </div>
</template>

<script>
export default {
   name: "DetailGoodsInfo",
    props: {
      detailInfo: {
        type: Array,
      }
    },
    data() {
	  return {
          counter:0,
          imagesLength:0
      }
    },
    methods:{
        imgLoad(){
           if(++this.counter === this.imagesLength){
               this.$emit('imageLoad')
           }  
        }
     
    },
    watch:{
        detailInfo(){
            this.imagesLength = this.detailInfo.length
        }
    }
}
</script>

<style>
    .info-list img {
        width: 100%;
    }
</style>