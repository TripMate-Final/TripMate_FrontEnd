<template>
  <div class="write" id="writeComment">
    <div class="form">
      <div name="tform" id="tform">
        <div class="writeForm">
          <textarea class="formtext" placeholder="댓글 작성해주세요" v-model="comment"> </textarea>
        </div>
        <div class="btn-container">
          <div>
            <button class="btn-write" @click="write">댓글 쓰기</button>
          </div>
          <!-- <div class="button_base b01_simple_rollover">01_Button</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

const userStore = "userStore";
import http from "@/util/http-common";
export default {
  name: "AttractionComment",
  components: {},
  props: {
    contentId: Number,
  },
  data() {
    return {
      comment: "",
      message: "",
    };
  },
  created() {},
  methods: {
    write() {
      if (this.userInfo == null) {
        alert("로그인 해주세요");
      } else {
        http
          .post(`/comment`, {
            contentId: this.contentId,
            userId: this.userInfo.userId,
            commentContent: this.comment,
            commentNum: 0,
          })
          .then(function (response) {
            if (response.status == 200) {
              window.location.reload(true);
            }
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
.write {
  background-color: rgb(240, 240, 240);
}

.form {
  width: 100%;
}
.formtext {
  height: 80px;
  margin-top: 30px;
  width: 95%;
  box-sizing: border-box;
}
.btn-container {
  text-align: right;
  margin-right: 10px;
  margin-bottom: 10px;
}

.btn-write {
  height: 40px;
  margin-top: 0.4%;
  margin-bottom: 1%;
  margin-right: 1.7%;
}
.btn-write:hover {
  color: #ffffff;
  background-color: #363636;
  cursor: pointer;
}
</style>
