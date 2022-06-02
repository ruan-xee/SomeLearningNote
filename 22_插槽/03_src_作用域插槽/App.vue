<template>
  <div class="container">
    <Category title="游戏">
      <template scope="games">
        <ul>
          <li v-for="(item,index) in games.games" :key="index">{{item}}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <!--结构赋值scope=“{}”-->
      <template scope="{games}">
        <ol>
          <li v-for="(item,index) in games" :key="index">{{item}}</li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <!--效果等同scope=“”-->
      <template v-slot:haha={games}>
        <h4 v-for="(item,index) in games" :key="index">{{item}}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
//引入组件
import Category from "./components/Category";
export default {
  name: "App",
  components: {Category},
};
</script>

<style>
  .container, .foot{
    display: flex;
    justify-content: space-around;
  }
  video{
    width: 100%;
  }
  img{
    width: 100%;
  }
</style>

