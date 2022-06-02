<template>
  <div>
    <div class="row">
      <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--原始html中我们使用a标签实现标签的跳转-->
          <!--<a class="list-group-item active" href="./about.html">About</a>-->
          <!--<a class="list-group-item" href="./home.html">Home</a>-->

          <!--vue中借助router-link实现路由的切换-->
          <!--
            replace控制路由跳转时操作浏览器历史记录的模式
            浏览器的历史记录有两种模式，push和replace，push是追加历史记录，replace为替换当前记录，路由跳转默认push模式
            开启replace模式只要在router-link标签中加入replace属性
          -->
          <router-link replace class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link replace class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!--指定组件的呈现位置-->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//引入组件
import Banner from "./components/Banner";
export default {
  name: "App",
  components: {Banner},
};
</script>

<style>
</style>


