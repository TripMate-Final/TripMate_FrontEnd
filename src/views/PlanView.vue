<template>
  <div class="container-fluid" id="map-view">
    <TheKakaoMap class="kakao-map"/>
  </div>
</template>

<script>
import TheKakaoMap from "@/components/map/TheKakaoMap.vue";
export default {
  name: "PlanView",
  components: {
    TheKakaoMap,
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
</style>