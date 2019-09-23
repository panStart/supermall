<template>
  <div>
      <div class="recommend">
          <div v-for="item in recommends" class="recommend-item">
              <img src="~assets/img/home/yasuo.jpeg" alt="">
              <div>{{item.title}}</div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name:'',
  props: {
      recommends:{
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
  components: {},
  methods: {}
}
</script>
<style scoped>
.recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    padding: 15px 0 20px;
    border-bottom: 8px solid #eee;
}
.recommend-item {
    flex: 1
}

.recommend-item img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-bottom: 10px;
}
</style>