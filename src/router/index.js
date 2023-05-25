import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "../views/MainView.vue";
import MapView from "../views/MapView.vue";
import AttractionView from "@/views/AttractionView.vue";
import BoardView from "@/views/BoardView.vue";
import UserView from "@/views/UserView.vue";
import AttrationList from "@/components/attraction/AttractionList.vue";
import AttractionDetail from "@/components/attraction/AttractionDetail.vue";
import PlanView from "@/views/PlanView.vue";

import store from "@/store";

Vue.use(VueRouter);

const onlyAuthUser = async (to, from, next) => {
  const checkUserInfo = store.getters["userrStore/checkUserInfo"];
  const checkToken = store.getters["userStore/checkToken"];
  let token = sessionStorage.getItem("access-token");
  console.log("로그인 처리 전", checkUserInfo, token);

  if (checkUserInfo != null && token) {
    console.log("토큰 유효성 체크하러 가자!!!!");
    await store.dispatch("userStore/getUserInfo", token);
  }
  if (!checkToken || checkUserInfo === null) {
    alert("로그인이 필요한 페이지입니다..");
    // next({ name: "login" });
    router.push({ name: "userlogin" });
  } else {
    console.log("로그인 했다!!!!!!!!!!!!!.");
    next();
  }
};
const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/attraction",
    name: "attraction",
    component: AttractionView,

    children: [
      {
        path: "list",
        name: "attractionlist",
        component: AttrationList,
        // component: () => import(/* webpackChunkName: "about" */ '@/components/attraction/AttractionList.vue')
      },

      {
        path: "detail/:contentId",
        name: "attractiondetail",
        component: AttractionDetail,
        // component: () => import(/* webpackChunkName: "about" */ '../components/attraction/AttractionDetail.vue')
      },
    ],
  },

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/map",
    name: "map",
    component: MapView,
    children: [
      {
        path: "detail/:contentId",
        name: "detail",
        component: () =>
          import(/* webpackChunkName: "about" */ "../components/map/SideBarDetail.vue"),
      },
    ],

  },
  {
    path:'/plan',
    name:'plan',
    component: PlanView,
    children:[
      {
        path: 'detail/:planId',
        name: 'planDetail',
        component: () => import(/* webpackChunkName: "about" */ '../components/plan/ShowPlanList.vue')
      },
    ]
  },


  {
    path: "/board",
    name: "board",
    component: BoardView,
    redirect: "/board/list",

    children: [
      {
        path: "list",
        name: "boardlist",
        component: () => import(/* webpackChunkName: "board" */ "@/components/board/BoardList"),
      },
      {
        path: "write",
        name: "boardwrite",
        beforeEnter: onlyAuthUser,
        component: () => import(/* webpackChunkName: "board" */ "@/components/board/BoardWrite"),
      },
      {
        path: "detail/:boardId",
        name: "boardDetail",
        component: () => import(/* webpackChunkName: "board" */ "@/components/board/BoardDetail"),
      },
      {
        path: "modify/:boardId",
        name: "boardmodify",
        beforeEnter: onlyAuthUser,
        component: () => import(/* webpackChunkName: "board" */ "@/components/board/BoardModify"),
      },
    ],
  },

  {
    path: "/user",
    name: "user",
    component: UserView,
    children: [
      {
        path: "login",
        name: "userlogin",
        component: () => import(/* webpackChunkName: "board" */ "@/components/user/UserLogin"),
      },

      {
        path: "mypage",
        name: "usermypage",
        component: () => import(/* webpackChunkName: "board" */ "@/components/user/UserMyPage"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
