<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <button @click="go">测试一下go</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods:{
    back(){
      this.$router.back()
    },
    forward(){
      this.$router.forward()
    },
    go(){
      //参数为正，表示前进几步，参数为负，表示后退几步
      this.$router.go(2)
    }
  }
}
</script>

<style scoped>

</style>