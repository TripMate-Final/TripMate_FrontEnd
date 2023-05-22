<template>
  <div>
    <b-sidebar id="sidebar-plan" width="400px" right shadow>
      <side-bar-plan-top></side-bar-plan-top>
    </b-sidebar>
  </div>
</template>
<script>

import SideBarPlanTop from "@/components/plan/SideBarPlanTop.vue";

export default {
  name: 'SideBarPlanList',
  components: {
    SideBarPlanTop
  },
  data() {
    return {
      title: '',
    }
  },
}

</script>
<style scoped>

</style>