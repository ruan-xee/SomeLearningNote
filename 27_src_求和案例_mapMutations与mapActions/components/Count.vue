<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <h3>当前求和放大十倍为：{{bigSum}}</h3>
    <h3>我在{{school}}，学习{{subject}}</h3>
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
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: "Count",
  data(){
    return{
      n:1,//用户选择的数字
    }
  },
  computed:{
    //...mapState({sum:'sum', school:'school', subject:'subject'}),
    ...mapState(['sum', 'school', 'subject']),
    //...mapGetters({bigSum:'bigSum'}),
    ...mapGetters(["bigSum"])
  },
  methods:{
    //对象写法
    ...mapMutations({increment:'JIA', decrement:'JIAN'}),
    //数组写法
    //...mapMutations(['JIA', 'JIAN']),

    ...mapActions({incrementOdd:'jiaOdd', incrementWait:'jiaWait'})
    //...mapActions(['jiaOdd', 'jiaWait'])
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>