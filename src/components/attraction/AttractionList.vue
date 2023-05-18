<template>
  <div>
    <attraction-tag-nav></attraction-tag-nav>
    <attraction-card
      onclick=""
      v-for="tag in attractionList"
      :key="tag"
      :title="tag"
      remove="false"
    >
    </attraction-card>
  </div>
</template>

<script>
import AttractionCard from "./item/AttractionCard.vue";
import AttractionTagNav from "./item/AttractionTagNav.vue";
export default {
  name: "AttractionList",
  components: {
    AttractionCard,
    AttractionTagNav,
  },

  data() {
    return {
      attractionList: ["11", "11", "11", "11", 1, 1, 1, 1, 1, 1, 1],
    };
  },
};
</script>

<style scoped></style>
