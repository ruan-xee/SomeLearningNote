<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="rz" appear>
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
  data(){
    return{
      isShow:true,
    }
  }
}
</script>

<style scoped>
  h1{
    background-color: orange;
  }

  .v-enter-active{
    animation: slide 1s;
  }
  .v-leave-active{
    animation: slide 1s reverse;
  }

  .rz-enter-active{
    animation: slide 1s;
  }
  .rz-leave-active{
    animation: slide 1s reverse;
  }

  @keyframes slide {
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0px);
    }
  }
</style>