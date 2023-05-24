<template>
  <span class="card" @click="handleClick">
    <b-card overlay :img-src="displayedImage" img-alt="Card Image" text-variant="black" class="img">
      <b-card-text class="text">
        <h2>{{ attraction.title }}</h2>
      </b-card-text>
    </b-card>
  </span>
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

<style scoped>
.card {
  display: inline-block; /* 인라인 블록 요소로 설정하여 가로 공간을 차지하도록 함 */
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  margin-right: 10px;
}
</style>
