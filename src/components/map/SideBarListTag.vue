<template>
  <b-card class="mb-3">
    <div v-for="categoryData in categoryList" :key="categoryData.categoryCode" @click="updateCategoryCode(categoryData.categoryCode)">
      <category-icon :categoryData="categoryData"></category-icon>
    </div>
  </b-card>
</template>

<script>
import CategoryIcon from "@/components/map/CategoryIcon.vue";
import {mapActions} from "vuex";
export default {
    name:'SideBarListTag',
    components:{
        CategoryIcon,
    },
    data(){
        return {
          categoryList: [
            {"categoryCode":10,"categoryName":"전체"},
            {"categoryCode":12,"categoryName":"관광지"},
            {"categoryCode":14,"categoryName":"문화시설"},
            {"categoryCode":15,"categoryName":"축제공연행사"},
            {"categoryCode":25,"categoryName":"여행코스"},
            {"categoryCode":28,"categoryName":"레포츠"},
            {"categoryCode":32,"categoryName":"숙박"},
            {"categoryCode":38,"categoryName":"쇼핑"},
            {"categoryCode":39,"categoryName":"음식점"},
            {"categoryCode":77,"categoryName":"좋아요"}
          ]
        }
    },
    methods:{
        ...mapActions(['mapStore/setCategoryCode']),
        updateCategoryCode(categoryCode){
            this["mapStore/setCategoryCode"](categoryCode)
        }
    }
}
</script>

<style scoped lang="scss">
::v-deep {
  .card-body{
    padding: 8px;
    padding-bottom: 15px;
  }
}
</style>