import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import MapView from '../views/MapView.vue'
import AttractionView from "@/views/AttractionView.vue";
import AttractionList from "@/components/attraction/AttractionList.vue";
import PlanView from "@/views/PlanView.vue";
import BoardView from "@/views/BoardView.vue";
import UserView from "@/views/UserView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/attraction',
    name: 'attraction',
    component: AttractionView,
    redirect: '/attraction/list',
    children:[
      {
        path: 'list',
        name: 'list',
        component: AttractionList,
      },

      {
        path: 'detail/:contentId',
        name: 'detail',
        component: () => import(/* webpackChunkName: "about" */ '../components/attraction/AttractionDetail.vue')
      },
    ]
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/map',
    name:'map',
    component: MapView,
    children:[
      {
        path: 'detail/:contentId',
        name: 'detail',
        component: () => import(/* webpackChunkName: "about" */ '../components/map/SideBarDetail.vue')
      },
    ]
  },
  {
    path: '/plan',
    name: 'plan',
    component: PlanView,
  },

  {
    path: '/board',
    name: 'board',
    component: BoardView,
    redirect: '/board/list',

    children: [
      {
        path: "list",
        name: "boardlist",
        component: () => import(/* webpackChunkName: "board" */ "@/components/board/BoardList"),
      },
      {
        path: "write",
        name: "boardwrite",
        component: () => import(/* webpackChunkName: "board" */ "@/components/board/BoardWrite"),
      },
      {
        path: "detail/:boardid",
        name: "boardDetail",
        component: () => import(/* webpackChunkName: "board" */ "@/components/board/BoardDetail"),
      },
      {
        path: "modify",
        name: "boardmodify",
        component: () => import(/* webpackChunkName: "board" */ "@/components/board/BoardModify"),
      },
      {
        path: "delete/:articleno",
        name: "boarddelete",
        component: () => import(/* webpackChunkName: "board" */ "@/components/board/BoardDelete"),
      },
    ],
  },

  {
    path: '/user',
    name: 'user',
    component: UserView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
