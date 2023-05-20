<template>
    <b-row>
        <b-row class="row-tab">
            <b-col>
               <b-avatar src=""></b-avatar>
                <span>전체</span>
            </b-col>
            <b-col>
                <b-avatar src=""></b-avatar>
                <span>관광지</span>
            </b-col>
            <b-col>
                <b-avatar src=""></b-avatar>
                <span >문화시설</span>
            </b-col>
            <b-col>
            <b-avatar src=""></b-avatar>
            <span >축제공연행사</span>
            </b-col><b-col>
            <b-avatar src=""></b-avatar>
            <span>여행코스</span>
            </b-col>
        </b-row>
        <b-row class="row-tab">
            <b-col>
                <b-avatar src=""></b-avatar>
                <span>전체</span>
            </b-col>
            <b-col>
                <b-avatar src=""></b-avatar>
                <span>관광지</span>
            </b-col>
            <b-col>
                <b-avatar src=""></b-avatar>
                <span >문화시설</span>
            </b-col>
            <b-col>
                <b-avatar src=""></b-avatar>
                <span >축제공연행사</span>
            </b-col><b-col>
            <b-avatar src=""></b-avatar>
            <span>여행코스</span>
        </b-col>
        </b-row>
    </b-row>
</template>

<script>
export default {
    name:'SideBarListTab',
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>

<style scoped>
.row-tab{
    margin: 10px 5px;
    height: 50px;
}
.col{
    margin-bottom: 10px;
    width: 60px;
    font-size: 1px;
}

</style>