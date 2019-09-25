<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'',
    props: {
        probeType:{
            type:Number,
            default:0,
            
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data () {
        return {
        scroll:null,
        message:'123'
        };
    },                                          
    mounted () {
        // 1.创建对象
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true,
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad
        }),
        //监听滚动位置
        this.scroll.on("scroll",(position) => {
            // console.log(position);
            this.$emit('scroll',position)
        }),
        //监听上拉事件
        this.scroll.on("pullingUp",()=>{
            this.$emit('pullingUp')
            
        })
    },
    methods: {
        //滑动到顶部
       scrollTo(x,y,time=300) {
           this.scroll && this.scroll.scrollTo(x,y,time)
       },
       //上拉加载
       finishPullUp(){
           this.scroll.finishPullUp()
       },
       //刷新页面 重新计算cobtent高度
       refresh(){
           console.log('132')
           
           this.scroll && this.scroll.refresh()
       }
   }
}
</script>

<style>

</style>