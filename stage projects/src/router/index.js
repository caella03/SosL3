import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import About from "../views/about.vue";
import services from "../views/services.vue";
import Contact from "../views/contact.vue";
import NorthernProvince from "../views/provinces/NorthernProvince.vue";
import SouthernProvince from "../views/provinces/SouthernProvince.vue";
import EasternProvince from "../views/provinces/EasternProvince.vue";
import WesternProvince from "../views/provinces/WesternProvince.vue";
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
  {
    path: '/provinces',
    name: 'provinces',
    // parent page for provinces
    component: {
      template: '<router-view />'
    }
  },
  {
    path: '/provinces/north',
    name: 'NorthernProvince',
    component: NorthernProvince,
  },
  {
    path: '/provinces/east',
    name: 'EasternProvince',
    component: EasternProvince,
  },
  {
    path: '/provinces/south',
    name: 'SouthernProvince',
    component: SouthernProvince,
  },
  {
    path: '/provinces/west',
    name: 'WesternProvince',
    component: WesternProvince,
  },
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router