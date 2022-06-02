<template>
  <div class="container">
    <Search/>
    <List/>
  </div>
</template>

<script>
//引入组件
import Search from "./components/Search";
import List from "./components/List";
export default {
  name: "App",
  components: {List, Search},
};
</script>

