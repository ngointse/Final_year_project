import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [

  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  } ,
  {
    path: '/',
    name: 'home',
    component: HomeView
  } ,
  {
    path: '/AirQuality',
    name: 'AirQuality',
    component: () => import('../views/AirQuality.vue')
  } ,
  {
    path: '/features',
    name: 'features',
    component: () => import('../views/Features.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
