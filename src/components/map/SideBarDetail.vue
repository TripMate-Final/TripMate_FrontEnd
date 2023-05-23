<template>
    <div>
        <b-sidebar width="400px" id="sidebar-detail" shadow>
            <div class="px-3 py-2">
                <b-button @click="addPlan">일정 추가</b-button>
                <side-bar-detail-top :detailData="detailData"></side-bar-detail-top>
            </div>
            <attraction-comment></attraction-comment>
        </b-sidebar>
    </div>

</template>

<script>
import AttractionComment from "@/components/attraction/item/AttractionComment.vue";
import SideBarDetailTop from "@/components/map/SideBarDetailTop.vue";
import {mapActions, mapState} from "vuex";
export default {
  name: "SideBarDetail",
  components:{
    SideBarDetailTop,
    AttractionComment,
  },
    computed: {
      ...mapState('mapStore', {
        detailData: state => state.detailData
      }),
    },
  methods: {
    ...mapActions(['mapStore/addPlan']),
      addPlan(){
        console.log("addContent!!!")
        this["mapStore/addPlan"](this.detailData);
      }
  }
}
</script>

<style scoped lang="scss">
::v-deep {
    #sidebar-detail{
        left: 400px;
        .b-sidebar-body{
            overflow-x: hidden;
        }
    }
}
</style>
