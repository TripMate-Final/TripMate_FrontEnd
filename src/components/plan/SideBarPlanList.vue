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
import {mapGetters, mapState} from "vuex";
import http from "@/util/http-common";

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
    ...mapGetters(["checkUserInfo"]),
    ...mapState({
      isLogin: state => state.userStore.isLogin,
      userInfo: state => state.userStore.userInfo,
      planTitle: state => state.mapStore.planTitle,
      planList: state => state.mapStore.planList,
      selectedDay: state => state.mapStore.selectedDay
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
          var vm = this;
          http
              .post(`/plan/regist`, {
                  planList: this.planList,
                  planLength: this.planList.length,
                  planTitle: this.planTitle,
                  userId : this.userInfo.userId,
              })
              .then(function (response) {
                  if (response.status == 200) {
                      alert("계획 등록 성공");
                  } else {
                      alert("계획 등록 실패");
                  }
                  vm.$router.push("/");
              });
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