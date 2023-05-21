<template>
  <div>
    <b-modal id="modal-findpassword" size="sm" title="비밀번호찾기" ok-only>
      <div>
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group
            label="Id"
            label-for="id-input"
            invalid-feedback="Id is required"
            :state="nameState"
          >
            <b-form-input id="id-input" v-model="id" :state="nameState" required></b-form-input>
          </b-form-group>
        </form>
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group
            label="email"
            label-for="email-input"
            invalid-feedback="Id is required"
            :state="nameState"
          >
            <b-form-input
              id="email-input"
              v-model="email"
              :state="nameState"
              required
            ></b-form-input>
          </b-form-group>
        </form>
      </div>
      <b-button class="btn-regist" size="sm" variant="success" @click="find">
        비밀번호찾기
      </b-button>
      <template #modal-footer="{ ok }">
        <b-button size="sm" @click="ok()"> 뒤로가기 </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import http from "@/util/http-common";
export default {
  name: "FindPasswordModal",
  components: {},
  data() {
    return {
      message: "",
    };
  },
  created() {},
  methods: {
    find() {
      http
        .put(`/user/find`, {
          userId: this.id,
          userEmail: this.email,
        })
        .then(function (response) {
          if (response.status == 200) {
            alert("이메일로 비밀번호를 보냈습니다.");
            window.location.reload(true);
          } else {
            alert("아이디와 이메일을 확인해주세요");
          }
        });
    },
  },
};
</script>

<style scoped></style>
