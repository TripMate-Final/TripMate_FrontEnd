import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import MapView from '../views/MapView.vue'
import AttractionView from "@/views/AttractionView.vue";
import AttractionList from "@/components/attraction/AttractionList.vue";
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
    redirect: '/attraction/list/서울',
    children:[
      {
        path: 'list/:keyword',
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
        path: "detail/:boardId",
        name: "boardDetail",
        component: () => import(/* webpackChunkName: "board" */ "@/components/board/BoardDetail"),
      },
      {
        path: "modify/:boardId",
        name: "boardmodify",
        component: () => import(/* webpackChunkName: "board" */ "@/components/board/BoardModify"),
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
