<template>
  <div class="sidebar-detail-top">
    <div class="image-box">
      <img class="image-thumbnail" src="@/assets/img/sample/test1.png">
    </div>
    <div class="content-box">
      <div class="content-title">
        <strong>멀티캠퍼스 역삼</strong>
      </div>
      <div class="content-addr">
        <span>서울특별시 강남구 역삼동</span>
      </div>
    </div>
    <div class="tag-box">
      <attraction-tag></attraction-tag>
    </div>
  </div>
</template>
<script>
import AttractionTag from "@/components/attraction/item/AttractionTag.vue";

export default {
  name:'SideBarDetailTop',
  components: {AttractionTag},
  data(){
    return {

    }
  },
  methods:{

  }
}

</script>
<style scoped>
.sidebar-detail-top{
  /*margin-top:-70px;*/
  margin:10px;
  height: 500px;
}
.sidebar-detail-top .image-box {
  height:250px;
  overflow:hidden;
  margin:0 auto;
}

.sidebar-detail-top .image-thumbnail {
  width:100%;
  height:100%;
  object-fit:cover;
}
.sidebar-detail-top .content-box{
  width:400px;
  height: 100px;
}
.sidebar-detail-top .content-title{
  margin-bottom: 10px;
  height: 25px;
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -1.2px;
  line-height: 26px;
  color: #000;
  padding:10px 20px;
}
.sidebar-detail-top .content-addr{
  margin-bottom: 10px;
  height: 25px;
  font-size: 18px;
  letter-spacing: -1.2px;
  line-height: 26px;
  color: #000;
  padding:10px 20px;
  float:left;
}
.sidebar-detail-top .tag-box{
  height: 150px;
  width: 100%;
  /*background-color: #569A64;*/
}
</style>