<template>
  <div class="sidebar-attraction-list" ref="scrollContainer" @scroll="handleScroll">
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
import {mapGetters, mapState} from "vuex";

const userStore = "userStore";
export default {

    name: "SideBarAttractionList",
    components: {
        AttractionCard,
    },
    props:['list','word','code'],

    data() {
        return {
          attractionList :[],
          keyword:"",
          categoryCode:10,
          isScrolledToBottom: false,
          pageNum: 0,
        }
    },
    computed:{
        ...mapState(userStore, ["isLogin", "userInfo"]),
        ...mapGetters(["checkUserInfo"]),
        category(){
            return this.$store.getters["mapStore/getCategoryCode"]
        }
    },
    watch:{
        category(value){
            this.categoryCode = value;
            this.pageNum = 0;
            this.$refs.scrollContainer.scrollTo(0, 0);
            if(this.userInfo == null){
                http
                    .get(`/attraction/select?keyword=${this.keyword}&categoryCode=${this.categoryCode}&page=${this.pageNum}&userId=`)
                    .then(({data}) => {
                        this.attractionList = data;
                    });
            }else{
                http
                    .get(`/attraction/select?keyword=${this.keyword}&categoryCode=${this.categoryCode}&page=${this.pageNum}&userId=${this.userInfo.userId}`)
                    .then(({data}) => {
                        this.attractionList = data;
                    });
            }
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
        if(this.userInfo == null){
            http
                .get(`/attraction/select?keyword=${this.keyword}&categoryCode=${this.categoryCode}&page=${this.pageNum}&userId=`)
                .then(({data}) => {
                    this.attractionList = data;
                });
        }else{
            http
                .get(`/attraction/select?keyword=${this.keyword}&categoryCode=${this.categoryCode}&page=${this.pageNum}&userId=${this.userInfo.userId}`)
                .then(({data}) => {
                    this.attractionList = data;
                });
        }
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods:{
        handleScroll() {
            const scrollContainer = this.$refs.scrollContainer;
            console.log(scrollContainer)
            const scrollTop = scrollContainer.scrollTop;
            const windowHeight = scrollContainer.offsetHeight+2
            const documentHeight = scrollContainer.scrollHeight;
            console.log("top ::: " + scrollTop + "height :::" +windowHeight + " doc height :::" + documentHeight)
            console.log(scrollTop + windowHeight)
            if (scrollTop + windowHeight >= documentHeight) {
                console.log("get!!!!!!!")
                this.isScrolledToBottom = true;
                this.pageNum += 1;
                if (this.pageNum < 9999) {
                    if(this.userInfo == null){
                      http
                          .get(
                              `/attraction/select?keyword=${this.keyword}&categoryCode=${this.categoryCode}&page=${this.pageNum}&userId=`
                          )
                          .then(({ data }) => {
                              if (data.length < 2) {
                                  this.pageNum = 9999;
                              } else {
                                  this.attractionList = this.attractionList.concat(data);
                              }
                          });
                    }else{
                        http
                            .get(
                                `/attraction/select?keyword=${this.keyword}&categoryCode=${this.categoryCode}&page=${this.pageNum}&userId=${this.userInfo.userId}`
                            )
                            .then(({ data }) => {
                                if (data.length < 2) {
                                    this.pageNum = 9999;
                                } else {
                                    this.attractionList = this.attractionList.concat(data);
                                }
                            });
                    }
                }
            } else {
                this.isScrolledToBottom = false;
            }
        },
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