<template>
    <div id="map_container"></div>
</template>

<script>

export default {
    data() {
        return {
            // map: null
        }
    },
    mounted() {
        let that = this
        var map = new BMap.Map('map_container', {enableMapClick: false});
        map.setMapStyle({
            style: 'midnight'
        });
        map.centerAndZoom(new BMap.Point(106.563777, 29.578285), 13); // 初始化地图,设置中心点坐标和地图级别
        map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放

        var view = new mapvgl.View({mapType: 'bmap', map: map});
        fetch('../static/car.csv').then(function (rs) {
            return rs.text();
        }).then(function (csvstr) {

            that.test(csvstr);
        })
    },
    methods: {
        test(csvstr) {
            var dataSet = mapv.csv.getDataSet(csvstr);
            var data = dataSet.get();
            dataSet.transferCoordinate(data, function (coord) {
                var projection = map.getMapType().getProjection();
                var point = projection.lngLatToPoint(new BMap.Point(coord[0], coord[1]));
                return [point.x, point.y];
            }, 'coordinates', 'coordinates');
            var newData = [];
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                var coordinates = item.geometry.coordinates;
                for (var j = 0; j < coordinates.length; j++) {
                    newData.push({
                        geometry: {
                            type: 'POINT',
                            coordinates: coordinates[j]
                        }
                    });
                }
            }
            console.log(coordinates);

            var pointLayer = new mapvgl.PointLayer({
                blend: 'lighter',
                mapType: 'bmap',
                color: 'rgba(255, 255, 50, 0.8)',
                size: 2
            });
            view.addLayer(pointLayer);
            pointLayer.setData(newData);
        }
    }

}

</script>
<style scoped>
    html,
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    #map_container {
        width: 100%;
        height: 500px;
        margin: 0;
    }
</style>