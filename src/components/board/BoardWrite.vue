<template>
  <div class="example">
    <b-row>
      <b-col>
        <b-alert show><h3 class="board-title">글쓰기</h3></b-alert>
      </b-col>
    </b-row>
    <b-row class="my-3 mx-2">
      <span class="text-left">
      <h4>제목<input class="write" v-model="boardTitle" /></h4>
    </span>
    </b-row>

     <quill-editor
         class="editor"
         ref="myTextEditor"
         :disabled="false"
         :value="content"
         :options="editorOption"
         @change="onEditorChange"
         @blur="onEditorBlur($event)"
         @focus="onEditorFocus($event)"
         @ready="onEditorReady($event)"
     />
   <b-row class="my-3">
     <b-col class="text-left">
       <b-button id="list-btn" @click="moveList">목록</b-button>
     </b-col>
     <b-col class="text-right">
       <b-button id="write-btn" @click="write()">글쓰기</b-button>
     </b-col>
   </b-row>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

const userStore = "userStore";
import hljs from "highlight.js";
import debounce from "lodash/debounce";
import { quillEditor } from "vue-quill-editor";
import "highlight.js/styles/tomorrow.css";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import http from "@/util/http-common";
export default {
  name: "quill-example-snow",
  title: "Theme: snow",
  components: {
    quillEditor,
  },
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
    };
  },
  methods: {
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
    moveList() {
      this.$router.push("/board/list");
    },
    write() {
      var vm = this;
      http
        .post(`/board`, {
          boardContent: this.content,
          boardTitle: this.boardTitle,
          userId: this.userInfo.userId,
        })
        .then(function (response) {
          if (response.status == 200) {
            alert("글쓰기 성공");
          } else {
            alert("글쓰기 실패");
          }
          vm.$router.push("/board/list");
        });
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

  created() {
    this.userinfo = this.$session.get("userinfo");
  },
};
</script>

<style scoped lang="scss">
::v-deep{
  #write-btn{
    background-color: #EFECEC;
    border-color: #0d172a;
    color:#0d172a;
  }
  #write-btn:hover{
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
  .alert-info{
    background-color: #efececb5;
    border: white;
    color: #2c3e50;
    width: 700px;
    margin:auto;
  }
}
.write {
  margin-left: 20px;
}
</style>
