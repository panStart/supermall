<template>
  <div class="toast" v-show="isshow">
      {{message}}
  </div>
</template>
<script>
export default {
  name:'',
  data () {
    return {
        message:'',
        isshow:false
    };
  },
//   props: {
//       message:{
//           type:String,
//           default: ''
//       },
//       isshow:{
//           type:Boolean,
//           default:false
//       }
//   },
  components: {},
  methods: {
      show(message,durtion=2000){
          this.isshow = true
          this.message = message

          setTimeout(() => {
              this.isshow = false
              this.message = ''
          },durtion)
      }
}
}
</script>
<style scoped>
.toast{
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 10px 15px;
    transform: translate(-50%, -50%);
    color: #ffffff;
    background-color:rgba(0, 0, 0, .75);
    z-index: 999
}
</style>