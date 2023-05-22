<template>
  <b-card
      no-body
      :img-src="detailData.firstImage"
      img-alt="Image"
      img-top
  >
    <template #header>
      <h4 class="mb-0">{{ detailData.title }}</h4>
    </template>

    <b-card-body>
      <b-card-title>{{detailData.addr1}}</b-card-title>
      <b-card-sub-title class="mb-2">우편번호 : {{detailData.zipCode}}</b-card-sub-title>
      <b-card-text>
        {{detailData.overview}}
      </b-card-text>
      <attraction-tag></attraction-tag>
    </b-card-body>
  </b-card>

</template>
<script>
import AttractionTag from "@/components/attraction/item/AttractionTag.vue";

export default {
  name:'SideBarDetailTop',
  components: {AttractionTag},
  props:{
    detailData:{
      type:Object,
      required:true
    }
  },
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