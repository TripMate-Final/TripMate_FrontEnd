<template>
    <div>
        <b-sidebar width="400px" id="sidebar-detail"  shadow>
            <div class="px-3 py-2">
                <side-bar-detail-top></side-bar-detail-top>
            </div>
            <attraction-comment></attraction-comment>
        </b-sidebar>
    </div>

</template>

<script>
import AttractionComment from "@/components/attraction/item/AttractionComment.vue";
import SideBarDetailTop from "@/components/map/SideBarDetailTop.vue";
import { mapState } from "vuex";
export default {
  name: "SideBarDetail",
  components:{
    SideBarDetailTop,
    AttractionComment,
  },
    computed: {
        ...mapState(['detailData']),
    },
  methods: {

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
