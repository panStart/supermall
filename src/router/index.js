import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/home/home.vue')
const Category = () => import('../views/category/category.vue')
const Cart = () => import('../views/cart/cart.vue')
const Profile = () => import('../views/profile/profile.vue')

Vue.use(Router)
const routes = [
  {
    path:'',
    redirect: '/home'
  },
  { path: '/home', component: Home },
  { path: '/category', component: Category },
  { path: '/cart', component: Cart },
  { path: '/profile', component: Profile }
]
const router = new Router({
  routes,
  mode:'history'
})
export default router