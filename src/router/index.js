//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";
//创建一个路由器
const router = new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{title:'关于'}
        },
        {
            name: 'zhuye',
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            children:[
                {
                    name:'xinwen',
                    path:'news',
                    component:News,
                    meta:{isAuth:true,title:'新闻'}
                },
                {
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    meta:{isAuth:true,title:'消息'},
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            component:Detail,
                            meta:{isAuth:true,title:'详情'},
                            props($route){
                                return {id:$route.query.id, title:$route.query.title}
                            }
                        }
                    ]
                }
            ]
        },
    ]
})

// //全局前置路由守卫————初始化的时候被调用，每次路由切换之前被调用
// router.beforeEach((to, from, next)=>{
//     if (to.name === 'xiaoxi' || to.name ==='xinwen'){
//         //如果查看的是新闻或者消息的界面，就检查是否有权限
//         //...检查权限代码
//         next()
//     } else {
//         next()
//     }
// })

router.beforeEach((to, from, next)=>{
    if (to.meta.isAuth){
        //判断是否需要鉴定权限
        alert("没有权限，不让看")
    } else {
        next()
    }
})


// //全局前置路由守卫————初始化的时候被调用，每次路由切换之后被调用
router.afterEach((to, from)=>{
    document.title = to.meta.title || '我是睡'
})

export default router