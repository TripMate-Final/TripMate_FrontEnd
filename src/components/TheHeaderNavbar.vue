<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand href="#">
        <img class="logo" src="../assets/img/navbar/logo.png" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
            <router-link :to="{ name: 'main' }" class="link"> 메인 </router-link>
            <router-link :to="{ name: 'attraction' }" class="m-2 link"> 여행정보 </router-link>
            <router-link :to="{ name: 'map' }" class="m-2 link"> 여행지도 </router-link>
          </b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
          <b-button v-b-modal.loginmodal v-if="userinfo == null">로그인</b-button>
          <login-modal></login-modal>

          <b-nav-item-dropdown right v-if="userinfo != null">
            <template #button-content>
              <img src="../assets/img/navbar/logo.png" class="UserPerson" />
            </template>
            <b-dropdown-item href="#" @click="login">Profile</b-dropdown-item>
            <b-dropdown-item href="#" @click="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    {{ userinfo }}
  </div>
</template>

<script>
import LoginModal from "./user/LoginModal.vue";
export default {
  name: "TheHeaderNavbar",
  components: {
    LoginModal,
  },
  created() {
    this.userinfo = this.$session.get("userinfo");
  },

  data() {
    return {
      userinfo: null,
    };
  },
  methods: {
    moveSelect() {
      this.$router.push({ name: "attraction" });
    },
    login() {
      this.userinfo = this.$session.get("userinfo");
    },
    logout() {
      this.$session.clear();
      window.location.reload(true);
    },
  },
};
</script>

<style scoped>
.logo {
  height: 70px;
}
</style>
