<template>
    <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" v-bind="mapConfig">
        <bm-overlay
                pane="labelPane"
                :class="{sample: true, active}"
                @draw="draw"
                @mouseover.native="active = true"
                @mouseleave.native="active = false">
            <div>{{words}}</div>
        </bm-overlay>
    </baidu-map>
</template>


<script>
export default {
    data() {
        return {
            active: false,
            words: "我爱北京天安门",
            mapConfig: {
                // ak: 'LqPUNQwV9kDlkA9zElFK0FBw',
                // center: '苏州',
                zoom: 15,
                mapClick: false,
                scrollWheelZoom: true
            }
        }
    },
    methods: {
        draw({el, BMap, map}) {
            const pixel = map.pointToOverlayPixel(new BMap.Point(116.404, 39.915))
            el.style.left = pixel.x - 60 + 'px'
            el.style.top = pixel.y - 20 + 'px'
        }
    }
}
</script>

<style>
    .sample {
        width: 120px;
        height: 40px;
        line-height: 40px;
        background: rgba(0, 0, 0, 0.5);
        overflow: hidden;
        box-shadow: 0 0 5px #000;
        color: #fff;
        text-align: center;
        padding: 10px;
        position: absolute;
    }

    .sample.active {
        background: rgba(0, 0, 0, 0.75);
        color: #fff;
    }
</style>