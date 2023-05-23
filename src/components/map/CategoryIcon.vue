<template>
  <div class="category-icon">
    <img class="icon-img" :src="require(`@/assets/img/map/category/${this.categoryData.categoryCode}.png`)" height="25"/>
    <span>{{ categoryData.categoryName }}</span>
  </div>
</template>

<script>
export default {
  name: "TagItem",
  props:{
    categoryData:{
      type:Object
    }
  },
}
</script>

<style scoped>
.category-icon{
  float: left;
  width: 85px;
  height: 70px;
  margin:5px;
  text-align: center;
}
.icon-img{
  display: inline-block;
  text-align: center;
  width: 60px;
  height: 60px;
  background-color: #fff;
 }
.category-icon span{
  display: block;
  text-align: center;
  font-family: NanumSquare;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #3b3e51;
}
</style>