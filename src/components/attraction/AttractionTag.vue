<template>
    <div>
<!--        <label for="tags-remove-on-delete"></label>-->
        <b-tag v-for="tag in tags" :key="tag" :title="tag" remove="false">
        </b-tag>
<!--        <p>Value: {{ value }}</p>-->
    </div>
</template>

<script>
export default {
    name: "AttractionTag",
    data() {
        return {
            tags: ['#서울', '#TAG', '#휴양지' ]
        }
    }
};
</script>

<style scoped>

</style>