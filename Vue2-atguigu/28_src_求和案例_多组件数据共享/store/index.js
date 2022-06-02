//该文件用于创建vuex中最为核心的store


import Vue from 'vue';
//引入Vuex
import Vuex from "vuex";
//应用Vuex插件
Vue.use(Vuex)

//准备Actions--用于响应组件中的动作
const actions = {
    jiaOdd(context, value){
        if (context.state.sum % 2){
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value){
        setTimeout(()=>{
            context.commit('JIA', value)
        }, 2000)
    }
}
//准备Mutations--用于操作数据（state）
const mutations = {
    JIA(state, value){
        state.sum += value
    },
    JIAN(state, value){
        state.sum -= value
    },
    ADD(state, value){
        state.persons.unshift(value)
    }
}
//准备State--用于存储数据
const state = {
    sum:0,
    school:'尚硅谷',
    subject:'前端',
    persons:[
        {id:'001', name: '张三'},
    ],
}

//准备getters--用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}

//创建并暴露store
export default new Vuex.Store({actions,mutations,state,getters})

