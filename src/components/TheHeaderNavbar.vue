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
            <router-link :to="{ name: 'attraction' }" class="m-2 link"> 여행정보 </router-link>
            <router-link :to="{ name: 'map' }" class="m-2 link" @click.native="forceReload">
              여행지도
            </router-link>
            <router-link :to="{ name: 'board' }" class="m-2 link"> 게시판 </router-link>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav>
          <b-nav-form>
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
            <b-dropdown-item href="#" v-b-modal.loginmodal v-if="userinfo == null"
              >Login</b-dropdown-item
            >
            <b-dropdown-item href="#" v-if="userinfo != null">Profile</b-dropdown-item>
            <b-dropdown-item href="#" v-if="userinfo != null" @click="logout"
              >Sign Out</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <login-modal></login-modal>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import loginModal from "@/components/user/LoginModal.vue";
export default {
  name: "TheHeaderNavbar",
  components: {
    loginModal,
  },

  data() {
    return {
      userinfo: null,
      keyword: "fqfq",
      categoryCode: "eeeee",
    };
  },

  created() {
    this.userinfo = this.$session.get("userinfo");
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
    selectKeyword(event) {
      event.preventDefault();
      this.$router.push({
        name: "attractionlist",
        query: { keyword: this.keyword, categoryCode: this.categoryCode },
      });
      // this.$router.push(`/attraction/list/${this.keyword}`);
    },
    forceReload() {
      window.location.reload();
    },
  },
};
</script>

<style scoped lang="scss">
.logo {
  height: 70px;
}
::v-deep {
  .navbar-nav a {
    color: #0d172a;
    font-family: "NanumSquareOTF", "RocGrotesk-Wide";
    font-size: 18px;
  }
  .navbar-nav a:hover {
    color: #569a64;
  }
  a .router-link-exact-active {
    color: #569a64;
  }
}
</style>
