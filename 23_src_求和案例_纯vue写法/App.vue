<template>
  <div>
    <Count/>
  </div>
</template>

<script>
//引入组件
import Count from "./components/Count";
export default {
  name: "App",
  components: {Count},
};
</script>

<style lang="css">
button{
  margin-left: 5px;
}
</style>


