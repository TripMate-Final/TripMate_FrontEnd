<template>
  <div class="sidebar-plan-list-wrapper">
    <side-bar-plan-nav></side-bar-plan-nav>
    <side-bar-plan-top></side-bar-plan-top>
   </div>
</template>
<script>


import SideBarPlanNav from "@/components/plan/SideBarPlanNav.vue";
import SideBarPlanTop from "@/components/plan/SideBarPlanTop.vue";

export default {
    name:'SideBarPlanList',
    components:{
      SideBarPlanTop,
      SideBarPlanNav
    },
    data(){
        return {

        }
    },
    methods:{
    }
}

</script>
<style scoped>
.sidebar-plan-list-wrapper {
  position: relative;
  z-index: 1;
  top: 0;
  left: 0;
  display: block;
  overflow-y: hidden;
}

</style>