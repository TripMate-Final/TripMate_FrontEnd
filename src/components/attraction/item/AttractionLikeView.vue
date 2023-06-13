<template>
  <div>
    <b-button type="button" class="btn on" @click="setLike()" title="선택됨">
      <img class="img" src="@/assets/img/redheart.png" v-if="this.isLike == 1" />
      <img class="img" src="@/assets/img/heart.png" v-else />
      <span class="num" id="conLike">{{ likecnt }}</span>
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
      isLike: 0,
      likecnt: 0,
    };
  },

  beforeUpdate() {
    this.likecnt = this.like;
    http
      .get(`/user/isLike?contentId=${this.contentId}&userId=${this.userInfo.userId}`)
      .then(({ data }) => {
        this.isLike = data;
      });
  },

  methods: {
    setLike() {
      var vm = this;
      if (this.userInfo == null) {
        alert("로그인하세요!!");
      } else if (this.isLike == 1) {
        alert("이미 좋아요 눌렀어요!!");
      } else {
        http
          .post(`/user/like`, {
            userId: this.userInfo.userId,
            contentId: this.contentId,
          })
          .then(function (response) {
            console.log(response.status);
            vm.isLike = 1;
          });
      }
      this.$forceUpdate();
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
