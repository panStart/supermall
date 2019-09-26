<template>
  <div>
      {{flag}}
  </div>
</template>
<script>
export default {
  name:'',
  data () {
    return {
    };
  },
  created () {
    this.flag = this.$route.params.flag  
  },
  components: {},
  methods: {}
}
</script>
<style scoped>
</style>