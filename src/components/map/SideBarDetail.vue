<template>
  <div>
    <b-sidebar width="400px" id="sidebar-detail" shadow>
      <div class="px-3 py-2">
        <button class="add-plan-button" v-if="selectedDay != 0" @click="addPlan">일정 추가</button>
      </div>
      <div class="px-3 py-5">
        <side-bar-detail-top :detailData="detailData"></side-bar-detail-top>
      </div>
      <attraction-comment :contentId="detailData.contentId"></attraction-comment>
      <attraction-comment2 :commentsList="commentsList"></attraction-comment2>
    </b-sidebar>
  </div>
</template>

<script>
import AttractionComment from "@/components/attraction/item/AttractionComment.vue";
import AttractionComment2 from "../attraction/item/AttractionComment2.vue";
import SideBarDetailTop from "@/components/map/SideBarDetailTop.vue";
import http from "@/util/http-common";
import { mapActions, mapState } from "vuex";
export default {
  name: "SideBarDetail",
  components: {
    SideBarDetailTop,
    AttractionComment,
    AttractionComment2,
  },
  computed: {
    ...mapState("mapStore", {
      detailData: (state) => state.detailData,
      selectedDay: (state) => state.selectedDay,
    }),
  },
  data() {
    return {
      commentsList: {},
    };
  },
  methods: {
    ...mapActions(["mapStore/addPlan"]),
    addPlan() {
      this["mapStore/addPlan"](this.detailData);
    },
  },
  created() {
    http.get(`/comment/${this.detailData.contentId}`).then(({ data }) => {
      this.commentsList = data;
    });
  },
};
</script>

<style scoped lang="scss">
::v-deep {
  #sidebar-detail {
    left: 500px;
    .b-sidebar-body {
      overflow-x: hidden;
    }
  }
}
.add-plan-button {
  float: right;
  height: 35px;
  z-index: 3;
  padding: 2px 12px;
  background-color: #efecec;
  border: 1px solid #0d172a;
  border-radius: 1.5rem;
  color: #0d172a;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
}
.add-plan-button:hover {
  background-color: #569a64;
  color: #fff;
  border: 0px;
}
</style>
