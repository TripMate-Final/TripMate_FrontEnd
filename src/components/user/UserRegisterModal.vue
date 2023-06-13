<template>
  <div>
    <b-modal id="modal-regist" size="sm" title="회원가입" ok-only>
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
            label="Password"
            label-for="password-input"
            invalid-feedback="Name is required"
            :state="nameState"
          >
            <b-form-input
              id="name-input"
              type="password"
              v-model="password"
              :state="nameState"
              required
            ></b-form-input>
          </b-form-group>
        </form>
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group
            label="name"
            label-for="id-input"
            invalid-feedback="Id is required"
            :state="nameState"
          >
            <b-form-input id="name-input" v-model="name" :state="nameState" required></b-form-input>
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
      <b-button class="btn-regist" size="sm" variant="success" @click="regist">
        회원가입하기
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
  name: "UserRegisterModal",
  components: {},
  data() {
    return {
      id: null,
      password: null,
      email: null,
      name: null,
      nameState: null,
      submittedNames: [],
    };
  },
  created() {},
  methods: {
    regist() {
      http
        .post(`/user/regist`, {
          userId: this.id,
          userPassword: this.password,
          userEmail: this.email,
          userName: this.name,
          userPosition: "0",
        })
        .then(function (response) {
          if (response.status == 200) {
            alert("가입 성공");
            window.location.reload(true);
          } else {
            alert("가입 실패");
          }
        });
    },
  },
};
</script>

<style scoped>
.btn-regist {
  text-align: right;
}
</style>
