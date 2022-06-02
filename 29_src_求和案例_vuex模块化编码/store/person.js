//人员管理相关配置
export default {
    namespaced: true,
    actions:{
        addPersonWang(context, value){
            if (value.name.indexOf('王') === 0){
                context.commit("ADD", value)
            }
        }
    },
    mutations:{
        ADD(state, value){
            state.persons.unshift(value)
        }
    },
    state:{
        persons:[
            {id:'001', name: '张三'},
        ],
    },
    getters:{
        firstPersonName(state){
            return state.persons[0].name
        }
    }
}