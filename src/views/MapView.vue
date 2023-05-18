<template>
    <b-container-fluid>
        <the-kakao-map></the-kakao-map>
<!--        <b-row class="mt-0">-->
<!--            <b-col cols="3" style="background-color: #2c3e50;">-->
<!--                <p>목록</p>-->
<!--            </b-col>-->
<!--            <b-col cols="3" style="background-color: #42b983"><p>상세</p></b-col>-->
<!--        </b-row>-->
    </b-container-fluid>
</template>

<script>
import TheKakaoMap from "@/components/TheKakaoMap.vue";

export default {
    name:"MapView",
    components:{
        TheKakaoMap,
    }
}
</script>

<style scoped>

</style>