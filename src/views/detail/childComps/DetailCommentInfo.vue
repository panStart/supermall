<template>
  <div class="comment-info">
      <p>评论</p>
      <p>{{time | showData}}</p>

  </div>
</template>

<script>
import {formatDate} from "common/utils"
export default {
    data() {
        return {
            time:1535694719
        }
    },
    filters:{
        showData(value){
            const date = new Date(value * 1000)
            return formatDate(date, 'yyyy/MM/dd hh:mm:ss')
        }
    }
}
</script>

<style scoped>
    .comment-info{
        height: 150px;
        background-color: aquamarine
    }
</style>