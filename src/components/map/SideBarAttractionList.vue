<template>
  <div class="sidebar-attraction-list">
    <attraction-card
        v-for="tag in attractionList"
        :key="tag"
        :title="tag"
        remove="false"
    ></attraction-card>
  </div>
</template>

<script>
import AttractionCard from "@/components/map/AttractionCard.vue";

export default {

  name: "SideBarAttractionList",
  components:{
    AttractionCard
  },
  data(){
    return {
      attractionList: [125266,125405],
    }
  },
  methods: {
    showDetail() {
    }
  }
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