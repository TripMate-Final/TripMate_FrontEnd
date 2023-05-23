<template>
  <div class="write" id="writeComment">
    <b-row class="text-center">
      <b-col><img class="usericon" src="@/assets/img/usericon.png" width="60px" /></b-col>
      <b-col cols="11">
        <div class="form">
          <form name="tform" id="tform">
            <span class="writeForm">
              <textarea class="formtext" placeholder="여기 댓글 내용 들어감 들어감 들어감">
              </textarea>
            </span>
            <div class="btn-container">
              <span>
                <div>
                  <span class="username">이름이름</span>|
                  <span class="date">2023-05-05</span>
                </div>

                <button class="btn-write">댓글 쓰기</button>
              </span>
              <!-- <div class="button_base b01_simple_rollover">01_Button</div> -->
            </div>
          </form>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "AttractionComment2",
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
  background-color: rgb(246, 250, 249);
}

.form {
  width: 100%;
}
.formtext {
  margin-top: 30px;
  width: 95%;
  box-sizing: border-box;
  background-color: rgb(246, 250, 249);
  border: none;
}
.btn-container {
  text-align: right;
  margin-right: 10px;
  margin-bottom: 10px;
}

.btn-write {
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.btn-write:hover {
  color: #ffffff;
  cursor: pointer;
}

.usericon {
  margin-left: 40%;
  margin-top: 50%;
}

.username {
  margin-right: 2%;
}

.date {
  margin-right: 78%;
  margin-left: 2%;
}
</style>
