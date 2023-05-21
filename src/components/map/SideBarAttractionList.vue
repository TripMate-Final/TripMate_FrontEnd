<template>
  <div class="sidebar-attraction-list">
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
import AttractionCard from "@/components/attraction/item/AttractionCard.vue";
export default {
  name: "SideBarAttractionList",
  components:{
    AttractionCard,
  },
  data(){
    return {
      attractionList: ["11", "11", "11", "11", 1, 1, 1, 1, 1, 1, 1],
    }
  },
}
</script>

<style scoped>
.sidebar-attraction-list{
  height: calc(100% - 350px);
  margin:10px;
  background-color: violet;
  overflow-y: scroll;
}
</style>