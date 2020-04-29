import Vue from 'vue'
import { Button } from 'element-ui'
import BaiduMap from 'vue-baidu-map'
import VueAMap from 'vue-amap';
import vueJsonp from 'vue-jsonp'

Vue.use(Button)
Vue.use(BaiduMap, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: 'DCCk7iXtHvPHLMcwY89rPmbs05dRxpwv'
})
Vue.use(vueJsonp)
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
    key: 'b1a77fd4fd0b77922087d41168e27c2c',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.4'
});
