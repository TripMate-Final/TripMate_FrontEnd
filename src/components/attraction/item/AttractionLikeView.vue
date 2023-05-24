<template>
  <div>
    <b-button type="button" class="btn on" @click="setLike()" title="선택됨">
      <img class="img" src="@/assets/img/redheart.png" />
      <span class="num" id="conLike">{{ like }}</span>
    </b-button>
    <span class="num_view"
      ><img class="img" src="@/assets/img/view.png" /><span class="num" id="conRead">{{
        hit
      }}</span></span
    >
  </div>
</template>

<script>
import http from "@/util/http-common";
export default {
  name: "AttractionLikeView",
  props: {
    hit: Number,
    like: Number,
    contentId: Number,
  },
  components: {},
  data() {
    return {
      userinfo: null,
      message: "",
    };
  },
  created() {
    this.userinfo = this.$session.get("userinfo");
  },
  methods: {
    setLike() {
      console.log(111); //여기다가 좋아요 하기
      if (this.userinfo == null) {
        alert("로그인하세요!!");
      } else {
        http
          .post(`/user/like`, {
            userId: this.userinfo.userId,
            contentId: this.contentId,
          })
          .then(function (response) {
            if (response.status == 200) {
              alert("좋아요!");
            } else {
              alert("좋아요 실패");
            }
          });
      }
    },
  },
};
</script>

<style scoped>
.img {
  padding-right: 5px;
  width: 25px;
  height: auto;
}
.btn {
  margin-right: 10px;
  background-color: white;
  color: black;
  border: none;
}
div {
  text-align: left;
  margin-top: 15px;
  margin-bottom: 10px;
}
</style>
