<template>
  <div>
    <b-sidebar id="sidebar-plan" width="400px" right shadow>
      <side-bar-plan-top></side-bar-plan-top>
      <side-bar-plan-card v-for="item in dummyData"
                          :key="item.id"
                          :title="item.title" :content="item.content"
                          remove="false">

      </side-bar-plan-card>
    </b-sidebar>
  </div>
</template>
<script>

import SideBarPlanTop from "@/components/plan/SideBarPlanTop.vue";
import SideBarPlanCard from "@/components/plan/SideBarPlanCard.vue";
export default {
  name: 'SideBarPlanList',
  components: {
    SideBarPlanTop,
    SideBarPlanCard
  },
  data() {
    return {
      dummyData: [
        {
          id: 1,
          title: '1일차',
          content: '1일차입니다..',
        },
        {
          id: 2,
          title: '2일차',
          content: '2일차입니당',
        },
        {
          id: 3,
          title: '3일차',
          content: '3일차입니당',
        },
        // 더 많은 더미 데이터를 추가할 수 있습니다.
      ],
    }
  },
}

</script>
<style scoped>

</style>