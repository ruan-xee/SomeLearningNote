<template>
  <transition name="rz" appear>
    <li>
      <label>
        <input type="checkbox" :checked="todoObj.done" @change="handleCheck(todoObj.id)"/>
        <span v-show="!todoObj.isEdit">{{todoObj.title}}</span>
        <input
            type="text"
            :value="todoObj.title"
            v-show="todoObj.isEdit"
            @blur="handleBlur(todoObj, $event)"
            ref="inputTitle"
        >
      </label>
      <button class="btn btn-danger" @click="delItem(todoObj.id)">删除</button>
      <button class="btn btn-edit" v-show="!todoObj.isEdit" @click="handleEdit(todoObj)">编辑</button>
    </li>
  </transition>
</template>

<script>
export default {
  name: "MyItem",
  props:['todoObj'],
  methods: {
    handleCheck(id){
      this.$bus.$emit('checkTodo', id)
    },
    delItem(id){
      if(confirm('确定删除？')){
        this.$bus.$emit('delTodo', id)
      }
    },
    //编辑
    handleEdit(todoObj){
      if(!todoObj.hasOwnProperty('isEdit')){
        //直接向todoObj中添加isEdit属性
        this.$set(todoObj, 'isEdit', true)
      } else {
        todoObj.isEdit = true
      }
      //在下一次dom更新以后执行回调
      this.$nextTick(()=>{this.$refs.inputTitle.focus()})
    },
    //失焦事件
    handleBlur(todoObj, e){
      todoObj.isEdit=false
      if (!e.target.value.trim()){
        alert("输入不能为空！")
        return
      }
      //因为在点击编辑时已经存在isEdit属性，所以直接设置isEdit为false即可
      this.$bus.$emit('updateTodo', todoObj.id, e.target.value);
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  display: none;
  margin-top: 3px;
}
li:before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
li:hover {
  background: #ddd;
}
li:hover button {
  display: block;
}
.rz-enter-active{
  animation: slide 1s linear;
}
.rz-leave-active{
  animation: slide 1s linear reverse;
}

@keyframes slide {
  from{
    transform: translateX(100%);
  }
  to{
    transform: translateX(0px);
  }
}
</style>
