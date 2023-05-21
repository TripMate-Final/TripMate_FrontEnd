<template>
    <div class="sidebar-list-top">
        <strong class="top-title">서울특별시 강남구</strong>
        <button class="plan-button">계획짜기</button>
    </div>
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
  height: 30px;
  margin:5px 10px;
  margin-bottom: 20px;
  display: block;
}
.col{
    padding:0px;
}

.plan-button{
  float: right;
  height: 35px;
  margin-bottom: 10px;
  z-index: 3;
  background-color: #569A64;
  border-radius: 20%;
  color: white;
  border: none;
  font-family: NanumSquareOTF;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
}
.sidebar-list-top .top-title{
    float: left;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -1.2px;
    line-height: 26px;
    color: #000;
    margin:0px;
}
</style>