<template>
  <div class="sidebar-attraction-list">
    <attraction-card
            v-for="(tag, index) in attractionList"
            :key="index"
            :attraction="tag"
            remove="false"
    ></attraction-card>
  </div>
</template>

<script>
import AttractionCard from "@/components/map/AttractionCard.vue";
import http from "@/util/http-common";

export default {

    name: "SideBarAttractionList",
    components: {
        AttractionCard
    },

    data() {
        return {
            attractionList: [],
            keyword: "광화문",
            categoryCode:10,
        }
    },
    created() {
        http.get(`/attraction/select?keyword=${this.keyword}&categoryCode=${this.categoryCode}`).then(({ data }) => {
            this.attractionList = data;
        });
    },
}
</script>

<style scoped>
.sidebar-attraction-list{
  height: calc(100% - 350px);
  margin:10px;
  overflow-y: scroll;
}
</style>