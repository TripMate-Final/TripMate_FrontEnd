<template>
  <div>
    <b-sidebar id="sidebar-plan" width="400px" right shadow>
      <side-bar-plan-top></side-bar-plan-top>
      <div v-for="dayItem in filteredList" :key="dayItem.day">
        {{dayItem.day}}일차
        <attraction-card v-for="item in dayItem.elements" :key="item.id" :attraction="item" remove="false">
        </attraction-card>
      </div>
    </b-sidebar>
  </div>
</template>
<script>

import SideBarPlanTop from "@/components/plan/SideBarPlanTop.vue";
import {mapState} from "vuex";
import AttractionCard from "@/components/map/AttractionCard.vue";
export default {
  name: 'SideBarPlanList',
  components: {
    AttractionCard,
    SideBarPlanTop,
  },
  data() {
    return {

    }
  },
  computed:{
    ...mapState('mapStore', {
      planList: state => state.planList,
      selectedDay: state => state.selectedDay
    }),
    filteredList(){
      if(this.selectedDay == 0){
        return this.planList.slice().sort((a, b) => a.day - b.day);
      }else{
        return this.planList.filter((dayItem) => dayItem.day === this.selectedDay);
      }
    }
  }
}

</script>
<style scoped>

</style>