<template>
<div>
  <h1>人员列表</h1>
  <h3 style="color:red">上方组件的求和为{{sum}}</h3>
  <input type="text" placeholder="请输入名字" v-model="name">
  <button @click="add">添加</button>
  <ul>
    <li v-for="(p) in persons" :key="p.id">{{p.name}}</li>
  </ul>
</div>
</template>

<script>
import {mapState} from 'vuex'
import {nanoid} from 'nanoid'
export default {
  name: "Person",
  data(){
    return{
      name:''
    }
  },
  computed:{
    ...mapState(["persons", "sum"])
  },
  methods:{
    add(){
      const person = {id: nanoid(), name:this.name}
      this.$store.commit('ADD', person)
      this.name = ''
    }
  },
}
</script>

<style scoped>

</style>