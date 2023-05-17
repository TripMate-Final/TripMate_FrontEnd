<template>
    <div>
        <attraction-tag-nav></attraction-tag-nav>
        <attraction-list></attraction-list>
    </div>
</template>

<script>

import AttractionTagNav from "@/components/attraction/AttractionTagNav.vue";
import AttractionList from "@/components/attraction/AttractionList.vue";
export default {
    name: "AttractionListView",
    components:{
        AttractionTagNav,
        AttractionList,
    }
}

</script>


<style scoped>

</style>