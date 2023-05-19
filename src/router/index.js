import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import MapView from '../views/MapView.vue'
import AttractionView from "@/views/AttractionView.vue";

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
        component: () => import(/* webpackChunkName: "about" */ '../components/attraction/AttractionList.vue')
      },

      {
        path: 'detail',
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
    component: MapView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
