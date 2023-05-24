<template>
  <div>
    <b-sidebar id="sidebar-plan" width="400px" right shadow>
      <side-bar-plan-top></side-bar-plan-top>
        <div class="plan-list">
          <div v-for="dayItem in filteredList" :key="dayItem.day">
            {{dayItem.day}}일차
            <side-bar-plan-card v-for="(item,index) in dayItem.elements" :key="index" :attraction="item" :day=dayItem.day :index=index remove="false">
            </side-bar-plan-card>
          </div>
        </div>
        <button class="save-plan-button" v-if="selectedDay == 0" @click="savePlan">일정 저장</button>
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
  },methods:{
      savePlan(){

      }
    }
}

</script>
<style scoped lang="scss">
::v-deep{
  #sidebar-plan{
    .b-sidebar-body{
      overflow-y: hidden;
    }
  }
}
.plan-list{
  height: calc(100% - 260px);
  overflow-y:scroll;
}
.save-plan-button{
    right: 20px;
    bottom: 20px;
    position: fixed;
    float: right;
    height: 35px;
    z-index: 3;
    padding: 0px 10px;
    background-color:#EFECEC;
    border: 1px solid #0d172a;
    border-radius: 1.5rem;
    color: #0d172a;
    font-family: "NanumSquareOTF","RocGrotesk-Wide";
    font-size: 15px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
}
.save-plan-button:hover{
    background-color: #569A64;
    color: #fff;
    border: 0px;
}
</style>