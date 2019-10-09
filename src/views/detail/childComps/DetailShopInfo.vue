<template>
  <div class="shop-info">
      <p>店铺信息</p>
      <h5>{{cSells | sellCountFilter}}</h5>
      <h5>{{sSells | sellCountFilter}}</h5>
  </div>
</template>

<script>
export default {
    name:"",
    data(){
        return{
            cSells:20032,
            sSells:9999
        }
    },
    filters:{
        sellCountFilter(value){
            let result = value;
            if(value > 10000){
                result = (result/10000).toFixed(1) + '万'
            }
            return result
        }
    }
}
</script>

<style scoped>
.shop-info{
    height: 100px;
    background-color: coral;
}
</style>