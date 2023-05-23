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
            markerPositions1: [
                [33.452278, 126.567803],
                [33.452671, 126.574792],
                [33.451744, 126.572441],
            ],
            markerPositions2: [
                [37.499590490909185, 127.0263723554437],
                [37.499427948430814, 127.02794423197847],
                [37.498553760499505, 127.02882598822454],
                [37.497625593121384, 127.02935713582038],
                [37.49629291770947, 127.02587362608637],
                [37.49754540521486, 127.02546694890695],
                [37.49646391248451, 127.02675574250912],
            ],
            markers: [],
            infowindow: null,
            latitude:0,
            longitude:0,
        };
    },

    mounted() {
        console.log(process.env.VUE_APP_KAKAO_MAP_API_KEY);
        if (window.kakao && window.kakao.maps) {
            this.initializeKakaoMap();
        } else {
            const script = document.createElement("script");
            /* global kakao */
            script.onload = () => kakao.maps.load(this.initializeKakaoMap());
            script.src =
                "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&libraries=services&appkey=" + process.env.VUE_APP_KAKAO_MAP_API_KEY;
            document.head.appendChild(script);
        }
    },
    methods: {
      initializeKakaoMap() {
        kakao.maps.load(() => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                this.handleSuccess,
                this.handleError
            );
          } else {
            console.log("Geolocation is not supported by this browser.");
          }
        });
      },
      handleSuccess(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        this.latitude = latitude;
        this.longitude = longitude;
        const geocoder = new kakao.maps.services.Geocoder();

        geocoder.coord2Address(longitude, latitude, (result, status) => {
          if (status === kakao.maps.services.Status.OK) {
            const address = result[0].address;
            const district = address.region_1depth_name +" "+ address.region_2depth_name+" "+ address.region_3depth_name;
            this.$store.state.mapStore.address = district;
            console.log("District:", this.address);
          } else {
            console.log("Reverse Geocoding error:", status);
          }
        });
        const container = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(this.latitude, this.longitude),
          level: 5,
        };
        this.map = new kakao.maps.Map(container, options);
      },

        displayMarker(markerPositions) {
            if (this.markers.length > 0) {
                this.markers.forEach((marker) => marker.setMap(null));
            }

            const positions = markerPositions.map(
                (position) => new kakao.maps.LatLng(...position)
            );

            if (positions.length > 0) {
                this.markers = positions.map(
                    (position) =>
                        new kakao.maps.Marker({
                            map: this.map,
                            position,
                        })
                );

                const bounds = positions.reduce(
                    (bounds, latlng) => bounds.extend(latlng),
                    new kakao.maps.LatLngBounds()
                );

                this.map.setBounds(bounds);
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
