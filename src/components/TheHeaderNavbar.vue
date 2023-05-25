<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <router-link :to="{ name: 'main' }" class="b-navbar-brand">
          <img class="logo" src="../assets/img/navbar/logo.png" />
        </router-link>

        <b-navbar-nav class="mx-auto">
          <b-nav-item href="#">
            <router-link :to="{ name: 'main' }" class="m-2 link"> 메인 </router-link>
            <router-link
              :to="{ name: 'attractionlist', query: { keyword: '', categoryCode: 10 } }"
              class="m-2 link"
              >여행정보</router-link
            >
            <router-link :to="{ name: 'map' }" class="m-2 link" @click.native="forceReload">
              여행지도
            </router-link>
            <router-link :to="{ name: 'board' }" class="m-2 link"> 게시판 </router-link>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav id="navbar-middle">
          <b-nav-form v-if="isMapPage">
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
              v-model="keyword"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit" @click="selectMapKeyword($event)"
              >Search</b-button
            >
          </b-nav-form>
          <b-nav-form v-else>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
              v-model="keyword"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit" @click="selectKeyword($event)"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown right>
            <template #button-content>
              <img src="../assets/img/navbar/user-person.png" class="UserPerson" />
            </template>
            <b-dropdown-item v-if="userInfo == null" @click="loginPage" v-b-modal.loginmodal
              >Login</b-dropdown-item
            >
            <b-dropdown-item v-if="userInfo" @click="myPage">Profile</b-dropdown-item>
            <b-dropdown-item v-if="userInfo" @click="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
          <!-- <login-modal></login-modal> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
// import loginModal from "@/components/user/LoginModal.vue";
const userStore = "userStore";
export default {
  name: "TheHeaderNavbar",
  components: {
    // loginModal,
  },

  data() {
    return {
      keyword: "",
      categoryCode: 10,
    };
  },

  created() {},
  computed: {
    ...mapState(userStore, ["isLogin", "userInfo"]),
    ...mapGetters(["checkUserInfo"]),
    isMapPage() {
      return this.$route.path === "/map";
    },
  },
  methods: {
    ...mapActions(userStore, ["userLogout"]),
    loginPage() {
      this.$router.push({
        name: "userlogin",
      });
    },

    myPage() {
      this.$router.push({
        name: "usermypage",
      });
    },

    moveSelect() {
      this.$router.push({ name: "attraction" });
    },
    logout() {
      // this.SET_IS_LOGIN(false);
      // this.SET_USER_INFO(null);
      // sessionStorage.removeItem("access-token");
      // if (this.$route.path != "/") this.$router.push({ name: "main" });
      console.log(this.userInfo.userId);
      //vuex actions에서 userLogout 실행(Backend에 저장 된 리프레시 토큰 없애기
      //+ satate에 isLogin, userInfo 정보 변경)
      // this.$store.dispatch("userLogout", this.userInfo.userid);
      this.userLogout(this.userInfo.userId);
      sessionStorage.removeItem("access-token"); //저장된 토큰 없애기
      sessionStorage.removeItem("refresh-token"); //저장된 토큰 없애기
      if (this.$route.path != "/") this.$router.push({ name: "main" });
    },
    selectKeyword(event) {
      event.preventDefault();
      this.$router.push({
        name: "attractionlist",
        query: { keyword: this.keyword, categoryCode: this.categoryCode },
      });
      this.forceReload();
    },
    selectMapKeyword(event) {
      event.preventDefault();
      this.$router.push({
        name: "map",
        query: { keyword: this.keyword, categoryCode: this.categoryCode },
      });
      this.forceReload();
    },
    forceReload() {
      window.location.reload();
    },
  },
};
</script>

<style scoped lang="scss">
.logo {
  height: 60px;
  margin-bottom: 5px;
  margin-left: 10px;
}
::v-deep {
  .navbar-nav{
    margin:20px;
  }
  .navbar-nav a {
    color: #0d172a;
    font-size: 25px;
  }
  .navbar-nav a:hover {
    color: #569a64;
  }
  a .router-link-exact-active {
    color: #569a64;
  }
}
</style>
