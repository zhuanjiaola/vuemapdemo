<template>
    <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15" :mapClick="false" :scroll-wheel-zoom="true">
        <my-overlay
                :position="{lng: 116.404, lat: 39.915}"
                text="点击我"
                :active="active"
                @mouseover.native="active = true"
                @mouseleave.native="active = false">
        </my-overlay>
    </baidu-map>
</template>

<script>
import MyOverlay from '../components/baidu/MyOverlay.vue'
export default {
    data () {
        return {
            active: false
        }
    },
    components: {
        MyOverlay
    }
}
</script>