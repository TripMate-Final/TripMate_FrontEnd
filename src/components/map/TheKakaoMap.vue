<template>
    <div>
        <div id="map">
        </div>
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
            planList :[],
            latitude:0,
            longitude:0,
            categoryList: [
              {"categoryCode":10,"categoryName":"전체"},
              {"categoryCode":12,"categoryName":"관광지"},
              {"categoryCode":14,"categoryName":"문화시설"},
              {"categoryCode":15,"categoryName":"축제공연행사"},
              {"categoryCode":25,"categoryName":"여행코스"},
              {"categoryCode":28,"categoryName":"레포츠"},
              {"categoryCode":32,"categoryName":"숙박"},
              {"categoryCode":38,"categoryName":"쇼핑"},
              {"categoryCode":39,"categoryName":"음식점"},
              {"categoryCode":77,"categoryName":"좋아요"}
            ]
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
    created() {
        this.planList = this.getPlanData;
    },
    computed:{
        getDetailData(){
            return this.$store.getters["mapStore/getDetailData"]
        },
        getPlanData(){
          return this.$store.state.mapStore.planList;
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
                          var categorycode = this.findCategoryCode(this.categoryList,this.planList[key]['elements'][element]['categoryName']);
                          var imageSrc = require(`@/assets/img/map/category/${categorycode}.png`),
                              imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
                              imageOption = {offset: new kakao.maps.Point(27, 69)};
                          var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
                          tmpMarker.push(new kakao.maps.Marker({
                            position:new kakao.maps.LatLng(this.planList[key]['elements'][element]['latitude'],this.planList[key]['elements'][element]['longitude']),
                            image:markerImage
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
            if(this.planList.length != 0){
              var markerList = [];
              for(const key in this.planList){
                if(this.planList[key]['elements'].length != 0){
                  var tmpMarker = [];
                  for(const element in this.planList[key]['elements']){
                    var categorycode = this.findCategoryCode(this.categoryList,this.planList[key]['elements'][element]['categoryName']);
                    var imageSrc = require(`@/assets/img/map/category/${categorycode}.png`),
                        imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
                        imageOption = {offset: new kakao.maps.Point(27, 69)};
                    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
                    tmpMarker.push(new kakao.maps.Marker({
                      position:new kakao.maps.LatLng(this.planList[key]['elements'][element]['latitude'],this.planList[key]['elements'][element]['longitude']),
                      image:markerImage
                    }));
                  }
                  markerList.push(tmpMarker);
                }
              }
              if(markerList.length != 0){
                this.markers = markerList;
                this.displayMarkers();
              }
            }
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
          var imageSrc = require(`@/assets/img/map/location.png`),
              imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
              imageOption = {offset: new kakao.maps.Point(27, 69)};
          var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
          const markerPosition = new kakao.maps.LatLng(this.latitude, this.longitude);
            const marker = new kakao.maps.Marker({
                position:markerPosition,
              image:markerImage
            });
            this.marker = marker;
            marker.setMap(this.map);
            this.map.setCenter(markerPosition);
            this.map.setLevel(2);
        },
        displayMarkers() {
          console.log("displayMarkers")
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
                strokeColor: '#3b3e51',
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
      findCategoryCode(categoryList, categoryName) {
        for (let i = 0; i < categoryList.length; i++) {
          if (categoryList[i].categoryName === categoryName) {
            return categoryList[i].categoryCode;
          }
        }
        return null;
      }
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
