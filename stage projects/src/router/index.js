import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import About from "../views/about.vue";
import services from "../views/services.vue";
import Contact from "../views/contact.vue";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name:'about',
     component: About,
  },
  {
    path: '/services',
    name:'services',
     component: services,
  },
  {
    path: '/contact',
    name:'contact',
     component: Contact,
  },
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router