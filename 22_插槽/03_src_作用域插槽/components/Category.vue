<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <slot :games="games">我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot>
    <slot name="haha" :games="games"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props:['title'],
  data(){
    return{
      games:['红警','LOL','穿越火线','炉石传说','酒馆战旗','QQ飞车'],
    }
  }
}
</script>

<style scoped>
  .category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }
  h3{
    text-align: center;
    background-color: orange;
  }
</style>