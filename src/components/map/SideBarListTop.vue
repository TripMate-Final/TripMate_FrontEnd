<template>
    <div class="sidebar-list-top">
        <strong class="top-title">{{ this.$store.state.mapStore.address }}</strong>
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
<style scoped>
.sidebar-list-top{
  height: 30px;
  margin:5px 10px;
  margin-bottom: 20px;
  display: block;
}
.plan-button{
  float: right;
  height: 35px;
  z-index: 3;
  margin-bottom: 10px;
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
.plan-button:hover{
  background-color: #569A64;
  color: #fff;
  border: 0px;
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