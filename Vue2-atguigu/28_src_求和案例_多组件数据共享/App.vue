<template>
  <div>
    <Count/>
    <hr>
    <Person/>
  </div>
</template>

<script>
//引入组件
import Count from "./components/Count";
import Person from "./components/Person";
export default {
  name: "App",
  components: {Count, Person},
};
</script>

<style lang="css">
button{
  margin-left: 5px;
}
</style>


