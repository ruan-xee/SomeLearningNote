<template>
  <!--组件的结构-->
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="sendSchoolName">发送学校姓名</button>
  </div>
</template>

<script>
//组件交互相关的代码（数据、方法等等）
export default {
  name:'School',
  data(){
    return {
      name:'pd',
      address:'fz'
    }
  },
  props:['getSchoolName'],
  methods: {
    sendSchoolName(){
      this.getSchoolName(this.name)
    }
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