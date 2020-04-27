import Vue from 'vue'
import { Button } from 'element-ui'
import BaiduMap from 'vue-baidu-map'
import vueJsonp from 'vue-jsonp'

Vue.use(Button)
Vue.use(BaiduMap, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: 'DCCk7iXtHvPHLMcwY89rPmbs05dRxpwv'
})
Vue.use(vueJsonp)
