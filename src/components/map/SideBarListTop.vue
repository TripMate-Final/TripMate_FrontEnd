<template>
    <b-row class="sidebar-list-top">
        <b-col>
           <strong class="top-title">서울특별시 강남구</strong>
        </b-col>
        <b-col>
            <b-button pill>계획짜기</b-button>
        </b-col>
    </b-row>
</template>
<script>
export default {
    name:'SideBarListTop',
    data(){
        return {

        }
    },
    methods:{

    }
}

</script>
<style lang="scss" scoped>
.sidebar-list-top{
    margin:10px;
}
.col{
    padding:0px;
}
.sidebar-list-top .top-title{
    display: block;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -1.2px;
    line-height: 26px;
    color: #000;
    margin:0px;
}
</style>