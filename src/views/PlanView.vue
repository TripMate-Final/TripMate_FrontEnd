<template>
  <div class="container-fluid" id="map-view">
    <TheKakaoMap class="kakao-map"/>
    <SideBarPlanList class="sidebar-plan-list"/>
  </div>
</template>

<script>
import TheKakaoMap from "@/components/map/TheKakaoMap.vue";
import SideBarPlanList from "@/components/plan/SideBarPlanList.vue";
export default {
  name: "PlanView",
  components: {
    TheKakaoMap,
    SideBarPlanList,
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

.sidebar-plan-list{
  background-color: #fff;
  width:400px;
  height: 1140px;
  z-index:99;
}
</style>