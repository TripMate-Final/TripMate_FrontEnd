<script src="../router/index.js"></script>
<template>
  <div class="container-fluid" id="map-view">
    <TheKakaoMap class="kakao-map"/>
    <SideBarList class="sidebar-list"/>

  </div>

</template>

<script>
import TheKakaoMap from "@/components/map/TheKakaoMap.vue";
import SideBarList from "@/components/map/SideBarList.vue";
export default {
    name:"MapView",
    components: {
      TheKakaoMap,
      SideBarList
    },
    methods:{

    }
}
</script>

<style scoped>
.container-fluid{
  padding:0px;
  height: 700px;
  display: flex;
  position:relative;
}

.kakao-map {width:100%;height:100%; position:absolute; top:0px; left:0px; z-index:1}

.sidebar-list{
    width:400px;
    height: 1140px;
    z-index:99
}

</style>