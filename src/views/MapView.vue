<script src="../router/index.js"></script>
<template>
    <div id="map-view">
        <TheKakaoMap class="kakao-map"/>
        <SideBarList class="sidebar-list"/>
    </div>
</template>

<script>
import TheKakaoMap from "@/components/map/TheKakaoMap.vue";
import SideBarList from "@/components/map/SideBarList.vue";
export default {
    name:"MapView",
    components:{
        TheKakaoMap,
        SideBarList
    }
}
</script>

<style scoped>
#map-view {width:100%; position:relative; float:left;}

.kakao-map {width:100%;height:100%; position:absolute; top:0px; left:0px; z-index:1}

.sidebar-list{
    position:absolute;
    width:600px;
    height:100%;
    z-index:99
}
</style>