<template>
    <div>
        <b-button id="show-list-btn" v-b-toggle.sidebar-list>목록보기</b-button>
        <b-sidebar width="400px" id="sidebar-list"  shadow>
            <div class="px-3 py-2">
                <side-bar-list-top></side-bar-list-top>
            </div>
            <side-bar-list-tag></side-bar-list-tag>
            <side-bar-attraction-list></side-bar-attraction-list>
        </b-sidebar>
    </div>
</template>
<script>
import SideBarListTop from "@/components/map/SideBarListTop.vue";
import SideBarListTag from "@/components/map/SideBarListTag.vue";
import SideBarAttractionList from "@/components/map/SideBarAttractionList.vue";
export default {
    name:'SideBarList',
    components:{
        SideBarListTop,
        SideBarListTag,
        SideBarAttractionList,
    },
}

</script>
<style scoped lang="scss">
::v-deep {
    #show-list-btn{
      float: right;
      height: 35px;
      z-index: 3;
      margin: 20px;
      padding: 0px 10px;
      background-color: #EFECEC;
      border: 1px solid #0d172a;
      border-radius: 1.5rem;
      color: #0d172a;
      font-family: "NanumSquareOTF", "RocGrotesk-Wide";
      font-size: 15px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: left;
    }
    #show-list-btn:hover{
        background-color: #569A64;
        color: #fff;
        border: 0px;
    }
    #sidebar-list{
        .b-sidebar-body{
            overflow-y: hidden;
        }
    }
}
</style>