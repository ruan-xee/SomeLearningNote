<template>
<div>
  <h1>人员列表</h1>
  <h3 style="color:red">上方组件的求和为{{sum}}</h3>
  <h3>列表中第一个人的名字是{{firstPersonName}}</h3>
  <input type="text" placeholder="请输入名字" v-model="name">
  <button @click="add">添加</button>
  <button @click="addWang">添加一个姓王的人</button>
  <ul>
    <li v-for="(p) in persons" :key="p.id">{{p.name}}</li>
  </ul>
</div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import {nanoid} from 'nanoid'
export default {
  name: "Person",
  data(){
    return{
      name:''
    }
  },
  computed:{
    ...mapState('b',["persons"]),
    ...mapState('a',["sum"]),
    firstPersonName() {
      return this.$store.getters['b/firstPersonName']
    },
    //...mapGetters('b', ["firstPersonName"]),
  },
  methods:{
    add(){
      const person = {id: nanoid(), name:this.name}
      this.$store.commit('b/ADD', person)
      this.name = ''
    },
    addWang(){
      const person = {id: nanoid(), name:this.name}
      this.$store.dispatch('b/addPersonWang', person)
      this.name = ''
    }
  },
}
</script>

<style scoped>

</style>