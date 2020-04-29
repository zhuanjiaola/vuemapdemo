import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../components/baidu/HelloWorld.vue'
import Overlay from '../components/baidu/Overlay.vue'
import MyOverlayView from '../views/MyOverlayView.vue'
import D from '../components/baidu/convert/3D.vue'
import GL from '../components/baidu/GL.vue'
import APITest from '../components/baidu/convert/APITest.vue'
import BeatPointer from '../components/baidu/convert/BeatPointer.vue'
import DrawLine from '../components/baidu/convert/DrawLine.vue'
import BmView from '../components/baidu/BmView.vue'

import Hello2 from '../components/gaode/Hello.vue'

import Hello3 from '../components/echarts/Hello.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/hello'},
    // 百度地图
    {path: '/hello', component: Hello},
    {path: '/overlay', component: Overlay},
    {path: '/myOverlayView', component: MyOverlayView},
    {path: '/3d', component: D},
    {path: '/gl', component: GL},
    {path: '/apitest', component: APITest},
    {path: '/beatpointer', component: BeatPointer},
    {path: '/drawline', component: DrawLine},
    {path: '/bmview', component: BmView},

    // 高德地图
    {path: 'hello2', component: Hello2},

    // Echarts
    {path:'hello3',component:Hello3}

]

const router = new VueRouter({
    routes
})

export default router
