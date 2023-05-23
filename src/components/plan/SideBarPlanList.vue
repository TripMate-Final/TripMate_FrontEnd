<template>
  <div>
    <b-sidebar id="sidebar-plan" width="400px" right shadow>
      <side-bar-plan-top></side-bar-plan-top>
      <div v-for="dayItem in filteredList" :key="dayItem.day">
        {{dayItem.day}}일차
        <side-bar-plan-card v-for="(item,index) in dayItem.elements" :key="index" :attraction="item" :day=dayItem.day :index=index remove="false">
        </side-bar-plan-card>
      </div>
    </b-sidebar>
  </div>
</template>
<script>
import SideBarPlanCard from "@/components/plan/SideBarPlanCard.vue";
import SideBarPlanTop from "@/components/plan/SideBarPlanTop.vue";
import {mapState} from "vuex";

export default {
  name: 'SideBarPlanList',
  components: {
    SideBarPlanCard,
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