<template>
    <div class="sidebar-list-top">
        <strong class="top-title">서울특별시 강남구</strong>
        <button class="plan-button" id="show-modal" @click="showModal = true">계획짜기</button>
        <PlanModal class="plan-modal" v-if="showModal" @close="showModal = false">
          <h3 slot="header">custom header</h3>
        </PlanModal>
    </div>
</template>

<script>
import PlanModal from "@/components/plan/PlanModal.vue";

export default {
  name:'SideBarListTop',
  components: {PlanModal},
  data: function () {
    return {
      showModal: false
    }
  },
  methods:{

  }
}

</script>
<style lang="scss" scoped>
.sidebar-list-top{
  height: 30px;
  margin:5px 10px;
  margin-bottom: 20px;
  display: block;
}
.plan-button{
  float: right;
  height: 35px;
  margin-bottom: 10px;
  z-index: 3;
  background-color: #569A64;
  border-radius: 20%;
  color: white;
  border: none;
  font-family: NanumSquareOTF;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
}
.sidebar-list-top .top-title{
    float: left;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -1.2px;
    line-height: 26px;
    color: #000;
    margin:0px;
}
</style>