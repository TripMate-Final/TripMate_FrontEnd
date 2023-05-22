<template>
    <div>
        <b-button v-b-toggle.sidebar-list>목록보기</b-button>
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
    #sidebar-list{
        .b-sidebar-body{
            overflow-y: hidden;
        }
    }
}
</style>