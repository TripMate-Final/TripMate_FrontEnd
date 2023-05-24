<template>
    <div>
      <b-sidebar width="400px" id="sidebar-detail" shadow>
        <div class="px-3 py-3">
                <side-bar-detail-top :detailData="detailData"></side-bar-detail-top>
            </div>
            <attraction-comment></attraction-comment>
        </b-sidebar>
    </div>

</template>

<script>
import AttractionComment from "@/components/attraction/item/AttractionComment.vue";
import SideBarDetailTop from "@/components/map/SideBarDetailTop.vue";
import {mapState} from "vuex";

export default {
  name: "SideBarDetail",
  components:{
    SideBarDetailTop,
    AttractionComment,
  },
    computed: {
      ...mapState('mapStore', {
        detailData: state => state.detailData,
      }),
    },
  methods: {

  }
}
</script>

<style scoped lang="scss">
::v-deep {
    #sidebar-detail{
        left: 0px;
        .b-sidebar-body{
            overflow-x: hidden;
        }
    }
}
.add-plan-button{
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
.add-plan-button:hover{
  background-color: #569A64;
  color: #fff;
  border: 0px;
}
</style>
