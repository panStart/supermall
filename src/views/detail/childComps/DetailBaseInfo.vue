<template>
    <div v-if="Object.keys(goods).length !== 0" class="base-info">
        <div class="info-title">{{goods.title}}</div>
    </div>
</template>

<script>
export default {
    props:{
        goods:{
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
     .base-info {
        margin-top: 15px;
        padding: 0 8px;
        color: #999;
        border-bottom: 5px solid #f2f5f8;
        height: 100px;
     }
     .info-title {
        color: #222
    }
</style>