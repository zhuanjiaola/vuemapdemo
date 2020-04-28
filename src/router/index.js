import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../components/HelloWorld.vue'
import Overlay from '../components/Overlay.vue'
import MyOverlayView from '../views/MyOverlayView.vue'
import D from '../components/convert/3D.vue'
import gl from '../components/gl.vue'
import APITest from '../components/convert/APITest.vue'
import BeatPointer from '../components/convert/BeatPointer.vue'


Vue.use(VueRouter)

  const routes = [
      {path:'/',redirect:'/hello'},
      {path:'/hello',component:Hello},
      {path:'/overlay',component:Overlay},
      {path:'/myOverlayView',component:MyOverlayView},
      {path:'/3d',component:D},
      {path:'/gl',component:gl},
      {path:'/apitest',component:APITest},
      {path:'/beatpointer',component:BeatPointer}

]

const router = new VueRouter({
  routes
})

export default router
