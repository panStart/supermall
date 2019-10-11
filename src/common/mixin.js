import {debounce} from './utils.js'
import BackTop from 'components/content/backTop/BackTop'
import {BACKTOP_DISTANCE} from './const.js'

export const itemListenerMixin = {
    data(){
        return{
            itemImgListener:null
        }
    },
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh,500)
        this.itemImgListener = () => {
            refresh()
            // console.log("123")
        }
        this.$bus.$on('itemImageLoad',this.itemImgListener)
        console.log("我是混入的内容");
        
    }
}

export const backTopMIxin = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop:false,
        }
    },
    methods: {
        backTop(){  
            // console.log(this.$refs.scroll.message);
            this.$refs.scroll.scrollTo(0,0,300)
          },
        // 1.判断BackTop是否显示
        listenSHopBackTop(position){
            this.isShowBackTop = (-position.y) > BACKTOP_DISTANCE ;
        },  
    }
}