<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
    </Category>
    <Category title="游戏" :listData="games">
      <ul>
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
    </Category>
    <Category title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
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
  .container{
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

