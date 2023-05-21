<template>
  <div class="side-bar-wrapper">
    <button class="openbtn" id="openbtn" @click="openNav">목록보기</button>
    <div id="mySidebar" class="sidebar">
      <div>
        <a href="javascript:void(0)" class="closebtn" @click="closeNav">×</a>
      </div>
      <side-bar-list-top></side-bar-list-top>
      <side-bar-list-tab></side-bar-list-tab>
      <side-bar-attraction-list></side-bar-attraction-list>
    </div>

  </div>
</template>
<script>
import SideBarListTop from "@/components/map/SideBarListTop.vue";
import SideBarListTab from "@/components/map/SideBarListTab.vue";
import SideBarAttractionList from "@/components/map/SideBarAttractionList.vue";
export default {
    name:'SideBarList',
    components:{
      SideBarListTab,
      SideBarListTop,
      SideBarAttractionList,
    },
    data(){
        return {
            attractionList: ["11", "11", "11", "11", 1, 1, 1, 1, 1, 1, 1],
        }
    },
    methods:{
      openNav() {
        console.log("open")
        document.getElementById("mySidebar").style.width = "400px";
        document.getElementById("openbtn").style.zIndex=1;
      },
      closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("openbtn").style.zIndex=2;
      }
    }
}

</script>
<style scoped>
.side-bar-wrapper{
  position: relative;
  z-index: 1;
  top:0;
  left: 0;
  height: auto;
  width:100%;
  display:block;
  overflow-y:hidden;
}
.sidebar {
  position: absolute;
  z-index:2;
  width: 0;
  background-color: #fff;
  display: block;
  transition: 0.5s;
  border: 1px solid #444444;
  border-left: 0px;
  height: 100%;
  overflow-x: hidden;
  overflow-y:hidden
}

.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
  text-align:right;
}

.sidebar a:hover {
  color: #f1f1f1;
}
.sidebar .closebtn {
  font-size: 36px;
}
.openbtn {
  left:0px;
  margin: 10px 20px;
  position: absolute;
  height: 35px;
  weight: 120px;
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

.openbtn:hover {
  background-color: #444;
}

</style>