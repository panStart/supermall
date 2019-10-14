<template>
    <div>
       <div id="shop-item">
            <div class="item-selector">
                <CheckButton :is-checked="product.checked" @click.native="checkClick"></CheckButton>
            </div>
            <div class="item-img">
                <img :src="'http://47.106.248.143/app/img/'+product.image" alt="商品图片">
            </div>
            <div class="item-info">
                <div class="item-title">{{ product.title}}</div>
                <div class="item-desc">商品描述: 真的好</div>
                <div class="info-bottom">
                    <div class="item-price left">¥{{product.price}}</div>
                    <div class="item-count right">x{{product.count}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
    props:{
        product:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    components:{
        CheckButton
    },
    methods:{
        checkClick(){
            this.product.checked = !this.product.checked 
        }
    }
}
</script>

<style scoped>
     #shop-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-title, .item-desc {
    overflow: hidden;
    /* 一行显示 */
    white-space: nowrap;
    /* 多余的显示点点 */
    text-overflow: ellipsis;
  }

  .item-img {
    padding: 5px;
    /*border: 1px solid #ccc;*/
  }

  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .item-info {
    flex:6;
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .info-bottom .item-price {
    color: orangered;
  }
</style>