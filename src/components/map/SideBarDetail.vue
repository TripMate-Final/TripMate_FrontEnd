<template>
  <div class="sidebar-wrapper">
    <button class="openbtn" id="openbtn" @click="openNav">목록보기</button>
    <div class="myDetail" id="myDetail">
      <div>
        <a href="javascript:void(0)" class="closebtn" @click="closeNav">×</a>
      </div>
      <side-bar-detail-top></side-bar-detail-top>
      <div class="comment-box">
        <attraction-comment></attraction-comment>
        <div class="comment-list">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AttractionComment from "@/components/attraction/item/AttractionComment.vue";
import SideBarDetailTop from "@/components/map/SideBarDetailTop.vue";

export default {
  name: "SideBarDetail",
  components:{
    SideBarDetailTop,
    AttractionComment,
  },
  data(){
    return {

    }
  },
  methods:{
    openNav() {
      console.log("open")
      document.getElementById("myDetail").style.width = "400px";
      document.getElementById("openbtn").style.zIndex=1;
    },
    closeNav() {
      document.getElementById("myDetail").style.width = "0";
      document.getElementById("openbtn").style.zIndex=2;
    },
  }
}
</script>

<style scoped>
.sidebar-wrapper{
  /*background-color: #569A64;*/
  position: relative;
  z-index: 1;
  top:0;
  left: 0;
  height: auto;
  width:100%;
  display:block;
  overflow-y:hidden;
}
.myDetail {
  position: absolute;
  z-index: 2;
  width: 0;
  background-color: #fff;
  display: block;
  transition: 0.5s;
  height: 100%;
  overflow-x: hidden;
  overflow-y:hidden
}
.myDetail .comment-list{
  overflow-y: scroll;
}

.myDetail a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
  text-align:right;
}

.myDetail a:hover {
  color: #f1f1f1;
}
.myDetail .closebtn {
  font-size: 36px;
}

.openbtn {
  left:0px;
  margin: 10px 20px;
  padding: 0px 10px;
  position: absolute;
  height: 35px;
  background-color:#EFECEC;
  border: 1px solid #0d172a;
  border-radius: 1.5rem;
  color: #0d172a;
  font-family: "NanumSquareOTF","RocGrotesk-Wide";
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
}

.openbtn:hover {
  background-color: #569A64;
  color: #fff;
  border: 0px;
}
</style>
