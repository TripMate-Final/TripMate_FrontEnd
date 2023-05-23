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
    };
  },
  methods: {
    modalOpen() {
      this.modalCheck = !this.modalCheck;
    },
  },

  created() {
    this.keyword = this.$route.query.keyword;
    this.categoryCode = this.$route.query.categoryCode;
    http
      .get(`/attraction/select?keyword=${this.keyword}&categoryCode=${this.categoryCode}`)
      .then(({ data }) => {
        this.attractionList = data;
      });
    // window.location.reload(true);
  },
};
</script>

<style scoped></style>
