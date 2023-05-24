<template>
  <div class="write" id="writeComment">
    <div class="form">
      <form name="tform" id="tform">
        <span class="writeForm">
          <textarea class="formtext" placeholder="댓글 작성해주세요"> </textarea>
        </span>
        <div class="btn-container">
          <span>
            <button class="btn-write">댓글 쓰기</button>
          </span>
          <!-- <div class="button_base b01_simple_rollover">01_Button</div> -->
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
