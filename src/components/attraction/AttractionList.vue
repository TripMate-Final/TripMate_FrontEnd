<template>
  <div>
    <attraction-tag-nav></attraction-tag-nav>
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
    };
  },
  methods: {
    modalOpen() {
      this.modalCheck = !this.modalCheck;
    },
  },

  created() {
    this.keyword = this.$route.query.keyword;
    http.get(`/attraction/select/${this.keyword}`).then(({ data }) => {
      this.attractionList = data;
    });
    // window.location.reload(true);
  },
};
</script>

<style scoped></style>
