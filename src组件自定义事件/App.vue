<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <School :getSchoolName='getSchoolName'/>
    <!-- 第一种写法 -->
    <!-- <Student @getStudent='getStudentName'/> -->
    <!-- 第二种写法 -->
    <Student ref="stu"/>
  </div>
</template>

<script>
//引入组件
import School from "./components/School";
import Student from "./components/Student";

export default{
  name:'App',
  components:{
    School,
    Student
  },
  data() {
    return {
      msg:'你好啊'
    }
  },
  methods: {
    getSchoolName(name){
      this.msg += name
    },
    getStudentName(name){
      this.msg += name
    }
  },
  mounted() {
    setTimeout(()=>{
      this.$refs.stu.$on('getStudent', this.getStudentName)
    }, 3000)
  },
}
</script>

<style scoped>
  .app{
    background-color: gray;
    padding: 5px;
  }
</style>