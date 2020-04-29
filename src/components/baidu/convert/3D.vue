<template>
    <div class="drawer">
        <div id="allmap" style="width:100%; height:500px;"></div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {},
    data() {
        return {
            open: false,
            isActive: false,
            isClose: false,
            map: null
        }
    },
    mounted() {
        // GL版命名空间为BMapGL
        // 按住鼠标右键，修改倾斜角和角度
        this.map = new BMapGL.Map('allmap');    // 创建Map实例
        this.map.centerAndZoom(new BMapGL.Point(116.280190, 40.049191), 19);  // 初始化地图,设置中心点坐标和地图级别
        this.map.enableScrollWheelZoom(true);     // 开启鼠标滚轮缩放
        this.map.setHeading(64.5);
        this.map.setTilt(73);

        // var marker = new BMapGL.Marker(new BMapGL.Point(116.280190, 40.049191)) // 创建点
        // map.addOverlay(marker)
        // map.addOverlay()
        this.test();
    },

    methods: {
        test() {
            var marker = new BMapGL.Marker(new BMapGL.Point(116.280190, 40.049191)); // 创建点
            this.map.addOverlay(marker);
        }
    }
}
</script>
<style>
</style>

