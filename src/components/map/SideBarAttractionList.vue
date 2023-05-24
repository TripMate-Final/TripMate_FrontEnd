<template>
  <div class="sidebar-attraction-list">
    <attraction-card
            class="attraction-card"
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
        AttractionCard,
    },
    props:['list','word','code'],

    data() {
        return {
          attractionList :[],
          keyword:'',
          categoryCode:10
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
        this.keyword = this.$route.query.keyword;
        this.categoryCode = this.$route.query.categoryCode;
        if(this.keyword == undefined){
            this.keyword = '';
        }
        if(this.categoryCode == undefined){
            this.categoryCode = 10;
        }
        http
            .get(`/attraction/select?keyword=${this.keyword}&categoryCode=${this.categoryCode}`)
            .then(({data}) => {
                this.attractionList = data;
            });
    }
}
</script>

<style scoped>
.sidebar-attraction-list{
  height: calc(100% - 350px);
  margin:10px;
  overflow-y: scroll;
}
</style>