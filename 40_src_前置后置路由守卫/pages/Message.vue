<template>
  <div>
    <ul>
      <li v-for="msg in messageList" :key="msg.id">
        <!--跳转路由并携带param参数，to的字符串写法-->
        <!--<router-link :to="`/home/message/detail/${msg.id}/${msg.title}`">{{msg.title}}</router-link>&nbsp;&nbsp;-->
        <!--跳转路由并携带param参数，to的对象写法，必须使用name，不能使用path-->
        <!--<router-link :to="{-->
        <!--  name:'xiangqing',-->
        <!--  params:{-->
        <!--    id:msg.id,-->
        <!--    title:msg.title-->
        <!--  }-->
        <!--query请求-->
        <router-link :to="{
          name:'xiangqing',
          query:{
            id:msg.id,
            title:msg.title
          }
        }">
          {{msg.title}}
        </router-link>
        <button @click="pushShow(msg)">push查看</button>
        <button @click="replaceShow(msg)">replace查看</button>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data(){
    return{
      messageList:[
        {id:'001', title:'消息001'},
        {id:'002', title:'消息002'},
        {id:'003', title:'消息003'},
      ]
    }
  },
  methods:{
    pushShow(msg){
      this.$router.push({
        name:'xiangqing',
        query:{
          id:msg.id,
          title:msg.title
        }
      })
    },
    replaceShow(msg){
      this.$router.replace({
        name:'xiangqing',
        query:{
          id:msg.id,
          title:msg.title
        }
      })
    }
  }
}
</script>

<style scoped>

</style>