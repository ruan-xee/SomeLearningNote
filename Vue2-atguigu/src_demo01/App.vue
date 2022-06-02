<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <School></School>
    <MyStudent></MyStudent>
  </div>
</template>

<script>
//引入组件
import School from "./components/School";
import MyStudent from "./components/MyStudent";

export default{
  name:'App',
  components:{
    School,
    MyStudent
  }
}
</script>

<style>

</style>