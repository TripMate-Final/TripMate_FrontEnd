<template>
  <div>
    <attraction-tag-nav :keyword="keyword"></attraction-tag-nav>
    <attraction-card
      onclick=""
      v-for="(tag, index) in attractionList"
      :key="index"
      :attraction="tag"
      remove="false"
    >
    </attraction-card>
  </div>
</template>

<script>
import AttractionCard from "./item/AttractionCard.vue";
import AttractionTagNav from "./item/AttractionTagNav.vue";
import http from "@/util/http-common";
import { mapState, mapGetters } from "vuex";

const userStore = "userStore";
export default {
  name: "AttractionList",
  components: {
    AttractionCard,
    AttractionTagNav,
  },

  data() {
    return {
      modalCheck: false,
      attractionList: [],
      keyword: "",
      categoryCode: 10,
      isScrolledToBottom: false,
      pageNum: 0,
    };
  },
  methods: {
    modalOpen() {
      this.modalCheck = !this.modalCheck;
    },
    handleScroll() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop + windowHeight >= documentHeight) {
        this.isScrolledToBottom = true;
        this.pageNum += 1;
        if (this.pageNum < 9999) {
          if (this.userInfo == null) {
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
          } else {
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
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.keyword = this.$route.query.keyword;
    this.categoryCode = this.$route.query.categoryCode;
    if (this.userInfo == null) {
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
    } else {
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
    // window.location.reload(true);
  },

  computed: {
    ...mapState(userStore, ["isLogin", "userInfo"]),
    ...mapGetters(["checkUserInfo"]),
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped></style>
