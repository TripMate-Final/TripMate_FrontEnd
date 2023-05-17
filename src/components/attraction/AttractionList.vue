<template>
    <div>
        <attraction-card v-for="tag in attractionList" :key="tag" :title="tag" remove="false">

        </attraction-card>
    </div>
</template>

<script>
import AttractionCard from "@/components/attraction/AttractionCard.vue";
export default {
    name: "AttractionList",

    components:{
        AttractionCard,
    },

    data() {
        return {
            attractionList: ['11', '11', '11' , '11' ]
        }
    }
}

</script>

<style scoped>

</style>