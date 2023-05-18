<template>
  <div class="write" id="writeComment">
    <div class="form">
      <form name="tform" id="tform">
        <span class="writeForm">
          <textarea placeholder="댓글 작성해주세요"> </textarea>
        </span>
        <div>
          <span>
            <button>로그인</button>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AttractionComment",
  components: {},
  data() {
    return {
      message: "",
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.write {
  background-color: gray;
}

.form {
  width: 100%;
}
</style>
