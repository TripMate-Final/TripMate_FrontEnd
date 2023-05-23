<script src="../router/index.js"></script>
<template>
  <div class="container-fluid" id="map-view">
    <TheKakaoMap class="kakao-map"/>
    <SideBarList class="sidebar-list"/>
    <SideBarDetail class="sidebar-detail"/>
    <SideBarPlanList class="sidebar-plan-list"/>
  </div>

</template>

<script>
import TheKakaoMap from "@/components/map/TheKakaoMap.vue";
import SideBarList from "@/components/map/SideBarList.vue";
import SideBarDetail from "@/components/map/SideBarDetail.vue";
import SideBarPlanList from "@/components/plan/SideBarPlanList.vue";
export default {
    name:"MapView",
    components: {
      TheKakaoMap,
      SideBarList,
      SideBarDetail,
      SideBarPlanList,
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
    z-index:99
}
.sidebar-detail{
  z-index:98
}
</style>