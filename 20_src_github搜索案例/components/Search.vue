<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Search',
  data(){
    return{
      keyWord:''
    }
  },
  methods:{
    searchUsers(){
      //请求前更行List中的数据
      this.$bus.$emit('updateListData', {isFirst:false, isLoading:true, errorMsg:'', users:[]})
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          response => {
            //请求成功后更新数据
            console.log("请求成功了")
            this.$bus.$emit('updateListData', {isLoading:false, errorMsg:'', users:response.data.items})
          },
          error => {
            //请求失败后更新数据
            console.log("请求失败了")
            this.$bus.$emit('updateListData', {isLoading:false, errorMsg:error.message, users:[]})
          }
      )
    }
  }
}
</script>

<style scoped>

</style>