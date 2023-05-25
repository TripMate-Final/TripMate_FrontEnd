<template>
  <div>
    <h4>댓글입니다</h4>
    <div class="mt-4" v-for="(item, index) in commentsList" :key="index">
      <b-card
        img-src="https://placekitten.com/300/300"
        img-alt="Card image"
        img-left
        class="mb-3"
        img-width="100px"
      >
        <b-card-text
          ><div class="name">
            이름 : {{ item.userName }} <span class="date">날짜 : {{ item.commentDate }}</span>
          </div>
          <div class="name">내용 : {{ item.commentContent }}</div>
        </b-card-text>
      </b-card>
    </div>
  </div>
  <!-- <div class="write" id="writeComment">
    {{ commentsList }}
    <b-row class="text-center">
      <b-col><img class="usericon" src="@/assets/img/usericon.png" width="60px" /></b-col>
      <b-col cols="11">
        <div class="form">
          <form name="tform" id="tform">
            <span class="writeForm">
              <textarea class="formtext" placeholder="내내내내내ㅐ낸요요요요요요요용"> </textarea>
            </span>
            <div class="btn-container">
              <span>
                <div>
                  <span class="username">이름이</span>|
                  <span class="date">2023-05-05</span>
                </div>
              </span>
            </div>
          </form>
        </div>
      </b-col>
    </b-row>
  </div> -->
</template>

<script>
export default {
  name: "AttractionComment2",
  props: {
    commentsList: [],
  },
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
  margin-left: 10%;
}

.name {
  text-align: left;
  margin-right: 60px;
  margin-bottom: 10px;
}
</style>
