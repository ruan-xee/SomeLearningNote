<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="" slot="demo1">
      <a slot="demo2" href="https://www.baidu.com">更多美食</a>
    </Category>
    <Category title="游戏" :listData="games">
      <ul slot="demo1">
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
      <div class="foot" slot="demo2">
        <a href="https://www.baidu.com">单机游戏</a>
        <a href="https://www.baidu.com">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <video slot="demo1" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <template v-slot:demo2>
        <div class="foot">
          <a href="https://www.baidu.com">经典</a>
          <a href="https://www.baidu.com">热门</a>
          <a href="https://www.baidu.com">推荐</a>
        </div>
        <h4 class="foot">欢迎来到影院</h4>
      </template>
    <!-- http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4 -->
    </Category>
  </div>
</template>

<script>
//引入组件
import Category from "./components/Category";
export default {
  name: "App",
  components: {Category},
  data(){
    return{
      foods:['火锅','烧烤','冰淇淋','炸串'],
      games:['红警','LOL','穿越火线','炉石传说','酒馆战旗','QQ飞车'],
      films:['《教父》','《拆弹专家》','《你好，李焕英》','《酒神》','《盖世》']
    }
  }
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

