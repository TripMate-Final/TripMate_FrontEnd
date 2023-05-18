<template>
  <div id="title">
    <h2>여행지 제목</h2>
  </div>
</template>

<script>
export default {
  name: "AttractionTitle",
  components: {},
  data() {
    return {
      message: "",
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
#title {
  margin-top: 20px; /* 원하는 마진 값을 설정하세요 */
  position: relative;
  top: 0;
  margin: 35px;
}

h2 {
  font-family: NotoSansKR, NotoSansJP, "돋움", Dotum, AppleGothic, Tahoma, Sans-serif;
  padding: 6px 0 0;
}

.titleType .post_area {
  position: relative;
}

/* .post_area .btn_good.on .ico {
  background: url(../images/sub/ico_post01_on.png) no-repeat;
} */
</style>
