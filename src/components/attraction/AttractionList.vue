<template>
  <div>
    <attraction-tag-nav></attraction-tag-nav>
    <attraction-card
      onclick=""
      v-for="(tag, index) in attractionList"
      :key="index"
      :title="tag"
      remove="false"
    >
    </attraction-card>
  </div>
</template>

<script>
import AttractionCard from "./item/AttractionCard.vue";
import AttractionTagNav from "./item/AttractionTagNav.vue";
// import http from "@/util/http-common";
export default {
  name: "AttractionList",
  components: {
    AttractionCard,
    AttractionTagNav,
  },

  data() {
    return {
      modalCheck: false,
      attractionList: [1, 1, 1, 1, 1, 1, 1],
    };
  },
  methods: {
    modalOpen() {
      this.modalCheck = !this.modalCheck;
    },
  },

  // created() {
  //   http.get(`/attraction/list`).then(({ data }) => {
  //     console.log(data);
  //     this.attractionList = data;
  //   });
  // },
};
</script>

<style scoped></style>
