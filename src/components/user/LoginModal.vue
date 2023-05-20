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

      <div class="links">
        <a href="" @click="flip('password', $event)">Forgot your password?</a>
      </div>

      <template #model-footer="{ ok }">
        <b-button size="sm" variant="success" @click="ok()"> ssOK </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import http from "@/util/http-common";
export default {
  name: "LoginModal",
  components: {},
  data() {
    return {
      id: "",
      password: "",
      ismodal: false,
      nameState: null,
      submittedNames: [],
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
      http
        .post(`/user/login`, {
          userId: this.id,
          userPassword: this.password,
        })
        .then(function (response) {
          if (response.status == 200) {
            alert("로그인 성공");
          } else {
            alert("틀렸습니다");
          }
        });
    },
  },
};
</script>

<style scoped></style>
