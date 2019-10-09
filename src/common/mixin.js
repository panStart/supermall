import {debounce} from './utils.js'
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