<template>
  <div>
    <b-img :src="displayedImage" alt="Image" class="img"></b-img>
  </div>
</template>

<script>
export default {
  name: "AttractionImg",
  props: {
    image: String,
    // img: {
    //   type: String,
    //   required: true,
    // },
  },
  components: {},
  data() {
    return {
      message: "",
    };
  },
  methods: {},
  computed: {
    displayedImage() {
      // console.log(this.attraction.firstImage);
      if (this.image != "") {
        return this.image; // 이미지가 있는 경우 실제 이미지 출력
      } else {
        // return "../../src/assets/img/noimg.png";
        return require("@/assets/img/noimg.png"); // 이미지가 없는 경우 예시 이미지 출력
      }
    },
  },
};
</script>

<style scoped>
.img {
  width: 70%;
}
</style>
