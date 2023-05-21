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
    name:'SideBarListTab',
    components:{
        CategoryIcon,
    },
    data(){
        return {
          categoryList:["11", "11", "11", "11", 1, 1, 1, 1, 1, 1, 1],
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