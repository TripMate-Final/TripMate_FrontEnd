import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "@/views/MainView";
import AttractionView from "@/views/AttractionView.vue";
import AttractionList from "@/components/attraction/AttractionList";
import AttractionDetail from "@/components/attraction/AttractionDetail";

Vue.use(VueRouter);

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
    redirect: "/attraction/list",

    children: [
      {
        path: "list",
        name: "list",
        component: AttractionList,
      },
      {
        path: "detail",
        name: "detail",
        component: AttractionDetail,
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
