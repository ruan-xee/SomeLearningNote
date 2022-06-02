<template>
  <!--组件的结构-->
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <button @click="sendStudentName">发送学生姓名</button>
  </div>
</template>

<script>
//组件交互相关的代码（数据、方法等等）
export default {
  name:'Student',
  data(){
    return {
      name:'rzh',
      age:14
    }
  },
  methods: {
    sendStudentName(){
      //触发Student组件实例身上的getStudent事件
      this.$emit('getStudent', this.name)
    }
  },
}
</script>

<style lang="less" scoped>
  .student{
    background-color: pink;
    padding: 5px;
    margin-top: 30px;
  }
</style>