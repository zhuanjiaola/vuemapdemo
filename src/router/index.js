import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../components/Hello.vue'
import Hello2 from '../components/Hello2.vue'
import Hello3 from '../components/Hello3.vue'


Vue.use(VueRouter)

  const routes = [
      {path:'/hello',component:Hello},
      {path:'/hello2',component:Hello2},
      {path:'/hello3',component:Hello3}

]

const router = new VueRouter({
  routes
})

export default router
