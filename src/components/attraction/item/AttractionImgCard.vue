<template>
  <div>
      <b-card class="img card w-100 h-100"
              overlay
              text-variant="black"
              @click="handleClick"
              :img-src="displayedImage"
              footer-tag="header">
          <template #header>
              <h6 class="mb-0" id="title">{{ attraction.title }}</h6>
          </template>
      </b-card>
  </div>
</template>

<script>
export default {
  name: "AttractionImgCard",
  props: {
    attraction: {},
  },
  components: {},
  data() {
    return {
      message: "",
    };
  },
  created() {},
  methods: {
    handleClick() {
      this.$router.push({
        name: "attractiondetail",
        params: {
          contentId: this.attraction.contentId,
        },
      });
      window.location.reload(true);
      window.scrollTo(0, 0);
    },
  },
  computed: {
    displayedImage() {
      // console.log(this.attraction.firstImage);
      if (this.attraction.firstImage != "") {
        return this.attraction.firstImage; // 이미지가 있는 경우 실제 이미지 출력
      } else {
        // return "../../src/assets/img/noimg.png";
        return require("@/assets/img/noimg.png"); // 이미지가 없는 경우 예시 이미지 출력
      }
    },
  },
};
</script>

<style lang="scss" scoped>


::v-deep{
  .card {
    display: inline-block; /* 인라인 블록 요소로 설정하여 가로 공간을 차지하도록 함 */
  }
  .card-img {
    height: 300px;
    width: 100%;
    object-fit: cover;
    object-position: center;
    margin-right: 10px;
    top: 0;
  }
  h2 {
    margin-top: 50px;
    text-align: left;
  }
  #title{
    font-size: 25px;
    color: #070707;
  }
}


</style>
