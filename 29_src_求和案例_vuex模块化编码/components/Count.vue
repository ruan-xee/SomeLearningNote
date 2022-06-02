<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <h3>当前求和放大十倍为：{{bigSum}}</h3>
    <h3>我在{{school}}，学习{{subject}}</h3>
    <h3 style="color:red;">下方组件的总人数是：{{persons.length}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为为奇数再加</button>
    <button @click="incrementWait(n)">等几秒再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: "Count",
  data(){
    return{
      n:1,//用户选择的数字
    }
  },
  computed:{
    ...mapState('a', ['sum', 'school', 'subject']),
    ...mapState('b', ['persons']),
    ...mapGetters('a', ["bigSum"])
  },
  methods:{
    //对象写法
    ...mapMutations('a', {increment:'JIA', decrement:'JIAN'}),
    ...mapActions('a', {incrementOdd:'jiaOdd', incrementWait:'jiaWait'})
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>