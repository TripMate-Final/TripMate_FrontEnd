<template>
  <div class="sidebar-tab">
      <div v-for="i in 3" :key="i">
        <category-icon onclick=""
                       v-for="tag in categoryList.slice((i-1)*4,(i-1)*4+4)"
                       :key="tag"
                       :title="tag"
                       remove="false"
        ></category-icon>
      </div>
    </div>
</template>

<script>
import CategoryIcon from "@/components/map/CategoryIcon.vue";
export default {
    name:'SideBarListTag',
    components:{
        CategoryIcon,
    },
    data(){
        return {
          categoryList:[1,2,3,4,5,6,7,8,9,10],
        }
    },
    methods:{

    }
}
</script>

<style scoped>
.sidebar-tab{
  height: 300px;
  margin:10px;
  background-color: #42b983;
}
</style>