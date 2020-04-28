<template>
    <div><label>关键词：<input v-model="keyword"></label>
        <label>地区：<input v-model="location"></label>
        <baidu-map :scroll-wheel-zoom="true">
            <bm-view class="map"></bm-view>
            <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
            <bm-local-search :keyword="keyword" :auto-viewport="true" :location="location"></bm-local-search>
        </baidu-map>
    </div>

</template>

<script>
export default {
    data() {
        return {
            location: '北京',
            keyword: '百度'
        }
    }
}
</script>
<style scoped>
    .map {
        height: 900px;
    }
</style>