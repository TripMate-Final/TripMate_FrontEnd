<template>
  <div>
    <b-modal
      id="loginmodal"
      title="로그인"
      @hidden="resetModal"
      @show="resetModal"
      @ok="handleOk"
      v-model="ismodal"
    >
      <div>
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group
            label="Id"
            label-for="id-input"
            invalid-feedback="Id is required"
            :state="nameState"
          >
            <b-form-input id="name-input" v-model="id" :state="nameState" required></b-form-input>
          </b-form-group>
        </form>
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group
            label="Password"
            label-for="name-input"
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
      </div>
      <b-button v-b-modal.modal-regist size="sm">회원가입</b-button>
      <b-button v-b-modal.modal-findpassword size="sm">Forgot your password?</b-button>
      <!-- <div class="links">
        <a href="" @click="flip('password', $event)">Forgot your password?</a>
      </div> -->
      <template #modal-footer="{ ok }">
        <b-button size="sm" variant="success" @click="ok()"> OK </b-button>
      </template>
    </b-modal>
    <user-register-modal></user-register-modal>
    <find-password-modal></find-password-modal>
  </div>
</template>

<script>
import http from "@/util/http-common";
import UserRegisterModal from "./UserRegisterModal.vue";
import FindPasswordModal from "./FindPasswordModal.vue";

export default {
  name: "LoginModal",
  components: { UserRegisterModal, FindPasswordModal },
  data() {
    return {
      id: "",
      password: "",
      ismodal: false,
      nameState: null,
      submittedNames: [],
      userinfo: {},
    };
  },
  created() {},
  methods: {
    resetModal() {
      this.id = "";
      this.password = "";
    },

    handleOk(bvModalEvent) {
      bvModalEvent.preventDefault();
      var vm = this;
      http
        .post(`/user/login`, {
          userId: this.id,
          userPassword: this.password,
        })
        .then(function (response) {
          if (response.status == 200) {
            vm.userinfo = response.data;
            vm.loginok();
          } else {
            console.log(vm);
            alert("로그인 실패");
          }
        });
    },

    loginok() {
      this.$session.set("userinfo", this.userinfo);
      alert("로그인 성공");
      window.location.reload(true);
    },
  },
};
</script>

<style scoped></style>
