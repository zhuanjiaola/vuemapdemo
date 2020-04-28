import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import mapv from 'mapv';
import mapvgl from 'mapvgl';

Vue.config.productionTip = false
// Vue.use(mapv)
// Vue.use(mapvgl)

new Vue({
    router,
    store,
    mapvgl,
    mapv,
    render: h => h(App)
}).$mount('#app')
