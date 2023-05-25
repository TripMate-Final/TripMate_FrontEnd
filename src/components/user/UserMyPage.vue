<template>
  <b-container class="mt-4" v-if="userInfo">
    <div class="nav-container my-4">
      <b-nav fill pills v-model="selectedNavItem" card-header tabs>
        <b-nav-item
          v-for="navItem in navItems"
          :key="navItem.id"
          :class="{
            active: navItem.id === selectedNavItem,
            inactive: navItem.id !== selectedNavItem,
          }"
          @click="selectNavItem(navItem.id)"
        >
          {{ navItem.title }}</b-nav-item
        >
      </b-nav>
    </div>
    <b-row>
      <b-col>
        <b-alert variant="secondary" show
          ><h3>{{ navItems[selectedNavItem - 1].title }}</h3></b-alert
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col cols="8" v-if="selectedNavItem == 1">
        <b-jumbotron>
          <template #header>My Page</template>
          <hr class="my-4" />
          <b-container class="mt-4">
            <b-row>
              <b-col cols="2"></b-col>
              <b-col cols="2" align-self="end">아이디</b-col
              ><b-col cols="4" align-self="start">{{ userInfo.userId }}</b-col>
              <b-col cols="2"></b-col>
            </b-row>
            <b-row>
              <b-col cols="2"></b-col>
              <b-col cols="2" align-self="end">이름</b-col
              ><b-col cols="4" align-self="start">{{ userInfo.userName }}</b-col>
              <b-col cols="2"></b-col>
            </b-row>
            <b-row>
              <b-col cols="2"></b-col>
              <b-col cols="2" align-self="end">이메일</b-col
              ><b-col cols="4" align-self="start">{{ userInfo.userEmail }}</b-col>
              <b-col cols="2"></b-col>
            </b-row>
          </b-container>
          <hr class="my-4" />
          <b-button variant="primary" v-b-modal.modal-modify class="mr-1">정보수정</b-button>
          <b-button variant="danger" @click="userdelete">회원탈퇴</b-button>
        </b-jumbotron>
      </b-col>
      <b-col cols="8" v-if="selectedNavItem == 2">
        <attraction-card
          v-for="(tag, index) in attractionList"
          :key="index"
          :attraction="tag"
          remove="false"
        >
        </attraction-card>
      </b-col>

      <b-col cols="8" v-if="selectedNavItem == 3">
        <show-my-plan v-for="(tag, index) in planList" :key="index" :data="tag" remove="false">
        </show-my-plan>
      </b-col>
      <b-col></b-col>
    </b-row>
    <UserModifyModal></UserModifyModal>
  </b-container>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import http from "@/util/http-common";
import AttractionCard from "../attraction/item/AttractionCard.vue";
import ShowMyPlan from "../plan/ShowMyPlan.vue";
import UserModifyModal from "./UserModifyModal.vue";
const userStore = "userStore";

export default {
  name: "UserMyPage",
  components: {
    AttractionCard,
    ShowMyPlan,
    UserModifyModal,
  },
  computed: {
    ...mapState(userStore, ["isLogin", "userInfo"]),
    ...mapGetters(["checkUserInfo"]),
    activeCard() {
      return this.cards[this.selectedNavItem];
    },
  },

  data() {
    return {
      modalCheck: false,
      attractionList: [],
      planList: [],
      keyword: "",
      isScrolledToBottom: false,
      pageNum: 0,
      selectedNavItem: 1,
      navItems: [
        { id: 1, title: "내 정보" },
        { id: 2, title: "좋아요 목록" },
        { id: 3, title: "여행 계획 목록" },
      ],
    };
  },

  methods: {
    selectNavItem(navItemId) {
      this.selectedNavItem = navItemId;
    },
    userdelete() {
      var vm = this;
      http.delete(`/user/${this.userInfo.userId}`).then(function (response) {
        if (response.status == 200) {
          alert("삭제 완료");
        } else {
          alert("삭제 실패!!!");
        }
        vm.$router.push("/main");
      });
    },

    handleScroll() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop + windowHeight >= documentHeight) {
        this.isScrolledToBottom = true;
        this.pageNum += 1;
        if (this.pageNum < 9999) {
          http
            .get(
              `/attraction/select?keyword=&categoryCode=77&page=${this.pageNum}&userId=${this.userInfo.userId}`
            )
            .then(({ data }) => {
              if (data.length < 2) {
                this.pageNum = 9999;
              } else {
                this.attractionList = this.attractionList.concat(data);
              }
            });
        }
      } else {
        this.isScrolledToBottom = false;
      }
    },

    fetchData() {
      window.addEventListener("scroll", this.handleScroll);
      http
        .get(
          `/attraction/select?keyword=&categoryCode=77&page=${this.pageNum}&userId=${this.userInfo.userId}`
        )
        .then(({ data }) => {
          if (data.length < 2) {
            this.pageNum = 9999;
          } else {
            this.attractionList = this.attractionList.concat(data);
          }
        });

      http.get(`/plan/list/${this.userInfo.userId}`).then(({ data }) => {
        if (data.length < 2) {
          this.pageNum = 9999;
        } else {
          this.planList = this.planList.concat(data);
        }
      });
    },
  },
  mounted() {
    this.fetchData();
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
.display-3{
  font-size: 50px;
}
a{
  font-size: 20px;
  color: #0d172a;
}
a:hover{
  color: #569A64;
}
</style>
