<template>
    <div>
        <div id="map">
        </div>
        <!--        <div class="button-group">-->
        <!--            <button @click="displayMarker(markerPositions1)">marker set 1</button>-->
        <!--            <button @click="displayMarker(markerPositions2)">marker set 2</button>-->
        <!--            <button @click="displayMarker([])">marker set 3 (empty)</button>-->
        <!--            <button @click="displayInfoWindow">infowindow</button>-->
        <!--        </div>-->
    </div>
</template>

<script>

export default {
    name: "KakaoMap",
    data() {
        return {
            polyline : null,
            marker : null,
            map : null,
            markers: [],
            linePath : [],
            latitude:0,
            longitude:0,
        };
    },
    props: ['lat','lng'],
    mounted() {
        if (window.kakao && window.kakao.maps) {
            this.initMap();
            this.displayMarker();
        } else {
            this.loadScript();
        }
    },
    computed:{
        getDetailData(){
            return this.$store.getters["mapStore/getDetailData"]
        },
        getPlanData(){
            return this.$store.getters["mapStore/getPlanData"]
        },
    },
    watch:{
        getDetailData(detailData){
            this.latitude = detailData.latitude;
            this.longitude = detailData.longitude;
            this.displayMarker();
        },
        getPlanData: {
            handler(planList){
                var markerList = [];
                for(const key in planList){
                    if(planList[key]['elements'].length != 0){
                        var tmpMarker = [];
                        for(const element in planList[key]['elements']){
                            tmpMarker.push(new kakao.maps.Marker({
                                position:new kakao.maps.LatLng(planList[key]['elements'][element]['latitude'],planList[key]['elements'][element]['longitude'])
                            }));
                        }
                        markerList.push(tmpMarker);
                    }

                }
                this.removeMarkers();
                this.markers = markerList;
                this.displayMarkers();
            },
            immediate :true, deep:true
        },
    },
    methods: {
        loadScript(){
            const script = document.createElement("script");
            /* global kakao */
            script.onload = () => kakao.maps.load(this.initMap());
            script.src =
                "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&libraries=services&appkey=" + process.env.VUE_APP_KAKAO_MAP_API_KEY;
            document.head.appendChild(script);
        },
        loadMap(){
            const container = document.getElementById("map");
            const options = {
                center: new kakao.maps.LatLng(this.latitude, this.longitude),
                level: 5,
            };
            this.map = new kakao.maps.Map(container, options);
        },
        initMap() {
           if(this.lat != null && this.lng != null){
               window.kakao.maps.load(() => {
                this.latitude = this.lat;
                this.longitude = this.lng;
                this.loadMap();
                this.displayMarker();
               });
           } else{
               window.kakao.maps.load(() => {
                   if (navigator.geolocation) {
                       navigator.geolocation.getCurrentPosition(
                           this.handleSuccess,
                           this.handleError
                       );
                   } else {
                       console.log("Geolocation is not supported by this browser.");
                   }
               });
           }
        },
        handleSuccess(position) {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;

            const geocoder = new kakao.maps.services.Geocoder();

            geocoder.coord2Address(this.longitude, this.latitude, (result, status) => {
                if (status === kakao.maps.services.Status.OK) {
                    const address = result[0].address;
                    const district = address.region_1depth_name +" "+ address.region_2depth_name+" "+ address.region_3depth_name;
                    this.$store.state.mapStore.address = district;
                } else {
                    console.log("Reverse Geocoding error:", status);
                }
            });
           this.loadMap();
        },
        displayMarker(){
            if (this.marker != null){
                this.marker.setMap(null);
            }
            const markerPosition = new kakao.maps.LatLng(this.latitude, this.longitude);
            const marker = new kakao.maps.Marker({
                position:markerPosition
            });
            this.marker = marker;
            marker.setMap(this.map);
            this.map.setCenter(markerPosition);
            this.map.setLevel(2);
        },
        displayMarkers() {
           for(let day in this.markers) {
               if(this.markers[day].length != 0){
                   for(let idx in this.markers[day]) {
                        this.markers[day][idx].setMap(this.map);
                    }
               }
           }
           this.addLine();
        },
        addLine(){
            console.log("add line");
            if(this.linePath.length != 0){
                this.polyline.setMap(null);
            }
            this.linePath = [];
            var pathBounds = new kakao.maps.LatLngBounds();
            for(let day in this.markers) {
                if(this.markers[day].length != 0){
                    for(let idx in this.markers[day]) {
                        this.linePath.push(this.markers[day][idx].getPosition());
                        pathBounds.extend(this.markers[day][idx].getPosition());
                    }
                }
            }

            // 선 생성
            this.polyline = new kakao.maps.Polyline({
                path: this.linePath,
                strokeWeight: 5,
                strokeColor: '#00973c',
                strokeOpacity: 0.7,
                strokeStyle: 'solid'
            });

            this.polyline.setMap(this.map);
            this.map.setBounds(pathBounds);
        },
        removeMarkers(){
            if(this.markers.length != 0){
                for(let day = 0; day < this.markers.length; day++){
                    for(let idx = 0;idx < this.markers[day].length; idx++){
                        this.markers[day][idx].setMap(null);
                    }
                }
            }
        },
        displayInfoWindow() {
            if (this.infowindow && this.infowindow.getMap()) {
                //이미 생성한 인포윈도우가 있기 때문에 지도 중심좌표를 인포윈도우 좌표로 이동시킨다.
                this.map.setCenter(this.infowindow.getPosition());
                return;
            }

            var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                iwPosition = new kakao.maps.LatLng(33.450701, 126.570667), //인포윈도우 표시 위치입니다
                iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

            this.infowindow = new kakao.maps.InfoWindow({
                map: this.map, // 인포윈도우가 표시될 지도
                position: iwPosition,
                content: iwContent,
                removable: iwRemoveable,
            });

            this.map.setCenter(iwPosition);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map{
    weight:100%;
    height: 1140px;
}
.button-group {
    margin: 10px 0px;
}

button {
    margin: 0 3px;
}
</style>
