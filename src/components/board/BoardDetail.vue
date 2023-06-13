<template>
  <div>
    <b-row>
      <b-col>
        <b-alert show><h3 class="board-title">글상세</h3></b-alert>
      </b-col>
    </b-row>
    <b-row class="my-3 mx-2">
    <span class="text-left">
      <h3>Title<input class="write" v-model="boardTitle" :disabled="true" /></h3>
    </span>
    </b-row>
      <quill-editor
          class="editor"
          ref="myTextEditor"
          :disabled="true"
          :value="content"
          :options="editorOption"
          @change="onEditorChange"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)"
      />
    <b-row class="my-3">
      <b-row class="mb-1 mx-1">
      <span v-if="userInfo != null">
        <b-col class="text-right" v-if="userInfo.userId === board.userId">
          <b-button id="modify-btn" size="sm" @click="boardModify" class="mr-2"
          >글수정</b-button
          >
          <b-button variant="outline-danger" size="sm" @click="boardDelete">글삭제</b-button>
        </b-col>
      </span>
      </b-row>
      <b-col class="text-right">
        <b-button id="list-btn" @click="moveList">목록</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

const userStore = "userStore";
import http from "@/util/http-common";
import hljs from "highlight.js";
import debounce from "lodash/debounce";
import { quillEditor } from "vue-quill-editor";
import "highlight.js/styles/tomorrow.css";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";

export default {
  name: "BoardDetail",
  components: { quillEditor },
  data() {
    return {
      editorOption: {
        placeholder: "place holder test",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"], // <strong>, <em>, <u>, <s>
            ["blockquote", "code-block"], // <blockquote>, <pre class="ql-syntax" spellcheck="false">
            [{ header: 1 }, { header: 2 }], // <h1>, <h2>
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }], // <sub>, <sup>
            [{ indent: "-1" }, { indent: "+1" }], // class제어
            [{ direction: "rtl" }], //class 제어
            [{ size: ["small", false, "large", "huge"] }], //class 제어 - html로 되도록 확인
            [{ header: [1, 2, 3, 4, 5, 6, false] }], // <h1>, <h2>, <h3>, <h4>, <h5>, <h6>, normal
            [{ font: [] }], // 글꼴 class로 제어
            [{ color: [] }, { background: [] }], //style="color: rgb(230, 0, 0);", style="background-color: rgb(230, 0, 0);"
            [{ align: [] }], // class
            // ["clean"],
            ["link", "image", "video"],
          ],
          syntax: {
            highlight: (text) => hljs.highlightAuto(text).value,
          },
        },
      },
      content: "",
      boardTitle: "",
      board: {},
    };
  },
  created() {
    http.get(`/board/${this.$route.params.boardId}`).then(({ data }) => {
      this.board = data;
      this.boardTitle = this.board.boardTitle;
      this.content = this.board.boardContent;
      console.log(data);
    });
  },
  methods: {
    moveList() {
      this.$router.push("/board/list");
    },
    boardModify() {
      this.$router.push(`../modify/${this.board.boardId}`);
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
    onEditorChange: debounce(function (value) {
      this.content = value.html;
    }, 466),
    onEditorBlur(editor) {
      console.log("editor blur!", editor);
    },
    onEditorFocus(editor) {
      console.log("editor focus!", editor);
    },
    onEditorReady(editor) {
      console.log("editor ready!", editor);
    },
  },
  computed: {
    ...mapState(userStore, ["isLogin", "userInfo"]),
    ...mapGetters(["checkUserInfo"]),
    editor() {
      return this.$refs.myTextEditor.quill;
    },
    contentCode() {
      return hljs.highlightAuto(this.content).value;
    },
  },
  mounted() {
    console.log("this is Quill instance:", this.editor);
  },
};
</script>

<style scoped lang="scss">
::v-deep{
  .alert-info{
    background-color: #efececb5;
    border: white;
    color: #2c3e50;
    width: 700px;
    margin:auto;
  }
  #modify-btn{
    background-color: #EFECEC;
    border-color: #0d172a;
    color:#0d172a;
  }
  #modify-btn:hover{
    background-color: #569a64ad;
    border-color:#ffffff;
    color: white;
  }
  #list-btn{
    background-color: #EFECEC;
    border-color: #0d172a;
    color:#0d172a;
  }
  #list-btn:hover{
    background-color: #569a64ad;
    border-color:#ffffff;
    color: white;
  }
}
.write {
  margin-left: 20px;
}
</style>
