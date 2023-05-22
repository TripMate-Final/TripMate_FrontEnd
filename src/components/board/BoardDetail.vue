<template>
  <div>
    <b-row>
      <b-col>
        <b-alert show><h3>글상세</h3></b-alert>
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col class="text-left">
        <b-button variant="outline-primary" @click="moveList">목록</b-button>
      </b-col>
      <b-col class="text-right" v-if="userInfo.userId === board.userId">
        <b-button variant="outline-info" size="sm" @click="boardModify" class="mr-2"
          >글수정</b-button
        >
        <b-button variant="outline-danger" size="sm" @click="boardDelete">글삭제</b-button>
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col>
        <b-card
          :header-html="`<h3>${board.boardId}.
          ${board.boardTitle} [${board.hit}]</h3><div><h6>${board.boardContent}</div><div>${board.boardDate}</h6></div>`"
          class="mb-2"
          border-variant="dark"
          no-body
        >
          <b-card-body class="text-left">
            <div v-html="message"></div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
    <div>{{ board }}</div>
    <div>{{ userInfo }}</div>
  </div>
</template>

<script>
import http from "@/util/http-common";
export default {
  name: "BoardDetail",
  components: {},
  data() {
    return {
      message: "",
      board: {},
      userInfo: {},
    };
  },
  created() {
    this.userInfo = this.$session.get("userinfo");
    http.get(`/board/${this.$route.params.boardId}`).then(({ data }) => {
      this.board = data;
    });
  },
  methods: {
    moveList() {
      this.$router.push("/board/list");
    },
    boardModify() {
      this.$router.push("/board/list");
    },
    boardDelete() {
      var vm = this;
      http.delete(`/board/${this.$route.params.boardId}`).then(function (response) {
        if (response.status == 200) {
          alert("삭제 완료");
        } else {
          alert("삭제 실패!!!");
        }
        vm.$router.push("/board/list");
      });
    },
  },
};
</script>

<style scoped></style>
