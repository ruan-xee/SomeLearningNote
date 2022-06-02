<template>
  <!--组件的结构-->
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
//组件交互相关的代码（数据、方法等等）
export default {
  name:'School',
  data(){
    return {
      name:'pd',
      address:'fz'
    }
  },
  mounted(){
    this.pubId = pubsub.subscribe('hello', (msg,data)=>{
      console.log('有人发布了一条数据', this,data)
    })
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId)
  },
}
</script>

<style>
/*组件的样式*/
.school{
  background: orange;
  padding: 5px;
}
</style>