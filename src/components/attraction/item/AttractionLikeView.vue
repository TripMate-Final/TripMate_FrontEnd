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
import { mapState, mapGetters } from "vuex";

const userStore = "userStore";
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
      message: "",
      islike: 1,
    };
  },
  created() {},
  methods: {
    setLike() {
      if (this.userInfo == null) {
        alert("로그인하세요!!");
      } else if (this.islike == 1) {
        alert("이미 좋아요 눌렀어요!!");
      } else {
        http
          .post(`/user/like`, {
            userId: this.userInfo.userId,
            contentId: this.contentId,
          })
          .then(function (response) {
            console.log(response.status);
            window.location.reload();
          });
      }
    },
  },
  computed: {
    ...mapState(userStore, ["isLogin", "userInfo"]),
    ...mapGetters(["checkUserInfo"]),
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
