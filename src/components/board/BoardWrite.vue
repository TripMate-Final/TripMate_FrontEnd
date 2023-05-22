<template>
  <div>
    <b-row>
      <b-col>
        <b-alert show><h3>글쓰기</h3></b-alert>
      </b-col>
    </b-row>
    <form @submit.prevent="submitForm">
      <div>
        <label for="title">제목</label>
        <input type="text" id="title" v-model="post.title" required />
      </div>
      <div>
        <label for="content">내용</label>
        <textarea id="content" v-model="post.content" required></textarea>
      </div>
      <div>
        <button type="submit">작성 완료</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    submitForm() {
      // 폼 제출 시 실행될 로직 작성
      // this.post.title와 this.post.content를 사용하여 게시글 데이터를 처리하거나 전송할 수 있습니다.
      // 예를 들어, HTTP 요청을 보내거나 상위 컴포넌트로 데이터를 전달하는 등의 작업을 수행할 수 있습니다.
      console.log("글 작성 폼 제출:", this.post.title);

      // 폼 제출 후 폼 초기화
      this.post.title = "";
      this.post.content = "";
    },
  },
};
</script>

<style scoped>
.post-form {
  max-width: 400px;
  margin: 0 auto;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
}

input,
textarea {
  margin-bottom: 10px;
  padding: 5px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>
