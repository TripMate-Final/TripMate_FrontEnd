<template>
  <div class="category-icon">
    <div class="icon-img">
    </div>
    <span>Category</span>
  </div>
</template>

<script>
export default {
  name: "TagItem"
}
</script>

<style scoped>
.category-icon{
  float: left;
  width: 80px;
  height: 88px;
  margin: 5px 7px;
  padding: 10px;
  background-color: violet;
  text-align: center;
}
.icon-img{
  display: inline-block;
  text-align: center;
  width: 42px;
  height: 42px;
  border: solid 1px #707070;
  background-color: #fff;
  border-radius: 50%;
 }
.category-icon span{
  display: inline-block;
  text-align: center;
  font-family: NanumSquare;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #3b3e51;
}
</style>