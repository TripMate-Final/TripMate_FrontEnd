<script src="../router/index.js"></script>
<template>
  <div class="container-fluid" id="map-view">
    <TheKakaoMap class="kakao-map"/>
    <ShowPlanList class="show-plan-list"/>
    <SideBarDetail class="sidebar-detail"/>
  </div>

</template>

<script>
import TheKakaoMap from "@/components/map/TheKakaoMap.vue";
import ShowPlanList from "@/components/plan/ShowPlanList.vue";
import SideBarDetail from "@/components/plan/SideBarDetail.vue";
export default {
    name:"PlanView",
    components: {
      TheKakaoMap,
      ShowPlanList,
      SideBarDetail
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
.show-plan-list{
  z-index:98;
}
.sidebar-detail {
    z-index:99;
}
</style>