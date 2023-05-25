<template>
  <div>
    <b-button id="show-plan-btn" v-b-toggle.sidebar-plan>계획 확인</b-button>
    <b-sidebar id="sidebar-plan" width="400px" right shadow visible>
      <show-plan-top :planTitle="planTitle"></show-plan-top>
        <div class="plan-list">
          <div v-for="dayItem in filteredList" :key="dayItem.day">
            {{dayItem.day}}일차
            <show-plan-card v-for="(item,index) in dayItem.elements" :key="index" :attraction="item" :day=dayItem.day :index=index remove="false">
            </show-plan-card>
          </div>
        </div>
        </b-sidebar>
  </div>
</template>
<script>
import ShowPlanTop from "@/components/plan/ShowPlanTop.vue";
import ShowPlanCard from "@/components/plan/ShowPlanCard.vue";
import http from "@/util/http-common";
import {mapState} from "vuex";

export default {
  name: 'ShowPlanList',
  components: {
    ShowPlanTop,
    ShowPlanCard,
  },
  data() {
    return {
      planId:0,
      planTitle:'',
      planList: []
    }
  },
  created() {
    this.planId = this.$route.params.planId;
    console.log(this.planId);
    http
        .get(`/plan/${this.planId}`)
        .then(({data}) => {
          this.planList = data.planList;
          this.planTitle = data.planTitle;
        });
  },
  computed:{
    ...mapState('mapStore', {
      selectedDay: state => state.selectedDay,
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
<style scoped lang="scss">
::v-deep {
  #show-plan-btn{
    float: right;
    height: 35px;
    z-index: 3;
    margin: 20px;
    padding: 0px 10px;
    background-color: #EFECEC;
    border: 1px solid #0d172a;
    border-radius: 1.5rem;
    color: #0d172a;
    font-size: 15px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
  }
  #show-plan-btn:hover{
    background-color: #569A64;
    color: #fff;
    border: 0px;
  }
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
</style>