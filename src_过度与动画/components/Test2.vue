<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="rz" appear>
      <h1 v-show="isShow" key="1">你好啊！</h1>
      <h1 v-show="isShow" key="2">我好啊！</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test2",
  data(){
    return{
      isShow:true,
    }
  }
}
</script>

<style scoped>
  h1{
    background-color: deepskyblue;
  }
  .rz-enter,.rz-leave-to{
    transform: translateX(-100%);
  }
  .rz-enter-to,.rz-leave{
    transform: translateX(0px);
  }
  .rz-enter-active, .rz-leave-active{
    transition: 1s linear;
  }


</style>