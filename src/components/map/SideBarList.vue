<template>
  <div class="side-bar-wrapper">
      <div class="side-bar">
          <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
          <b-sidebar id="sidebar-1" shadow>
              <div class="sidebar-top">
                  <side-bar-list-top></side-bar-list-top>
                  <side-bar-list-tab></side-bar-list-tab>
              </div>
              <div class="sidebar-list">
                  <attraction-card
                      onclick=""
                      v-for="tag in attractionList"
                      :key="tag"
                      :title="tag"
                      remove="false"
                  >
                  </attraction-card>
              </div>
          </b-sidebar>
      </div>
  </div>
</template>
<script>
import SideBarListTop from "@/components/map/SideBarListTop.vue";
import SideBarListTab from "@/components/map/SideBarListTab.vue";
import AttractionCard from "@/components/attraction/item/AttractionCard.vue";
export default {
    name:'SideBarList',
    components:{
        SideBarListTop,
        SideBarListTab,
        AttractionCard
    },
    data(){
        return {
            attractionList: ["11", "11", "11", "11", 1, 1, 1, 1, 1, 1, 1],
        }
    },
    methods:{

    }
}

</script>
<style lang="scss" scoped>
::v-deep{
    .b-sidebar{
        background-color: #fff !important;
        height: 100%;
    }
    .sidebar-list{
        background-color: #62B273;
    }
}
.sidebar-top{
  padding: 10px 15px;
  position: relative;
}
</style>