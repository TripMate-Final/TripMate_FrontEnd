<template>
  <draggable div class="sidebar-attraction-list" v-model="attractionList" draggable=".attraction-card">
    <attraction-card
            class="attraction-card"
            v-for="(tag, index) in attractionList"
            :key="index"
            :attraction="tag"
            remove="false"
    ></attraction-card>
  </draggable>
</template>

<script>
import AttractionCard from "@/components/map/AttractionCard.vue";
import http from "@/util/http-common";
import draggable from 'vuedraggable'
export default {

    name: "SideBarAttractionList",
    components: {
        AttractionCard,
        draggable,
    },

    data() {
        return {
            attractionList: [],
            keyword: "제주도",
            categoryCode:12,
        }
    },
    computed:{
        category(){
            return this.$store.getters["mapStore/getCategoryCode"]
        }
    },
    watch:{
        category(value){
            this.categoryCode = value;
            http.get(`/attraction/select?keyword=${this.keyword}&categoryCode=${this.categoryCode}`).then(({ data }) => {
                this.attractionList = data;
            });
        }
    },
    created() {
        console.log(this.categoryCode)
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