import { createRouter, createWebHistory } from "vue-router"

import Home from "../views/Home.vue"
import About from "../views/about.vue"
import Services from "../views/services.vue"
import Contact from "../views/contact.vue"
import Login from "../views/login.vue"
import Register from "../views/register.vue"
import dashboard from "@/views/dashboard.vue"

import NorthernProvince from "../views/provinces/NorthernProvince.vue"
import SouthernProvince from "../views/provinces/SouthernProvince.vue"
import EasternProvince from "../views/provinces/EasternProvince.vue"
import WesternProvince from "../views/provinces/WesternProvince.vue"


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },

  {
    path: "/register",
    name: "Register",
    component: Register
  },

  {
    path: "/about",
    name: "About",
    component: About
  },

  {
    path: "/services",
    name: "Services",
    component: Services
  },

  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },

  {
    path: "/login",
    name: "Login",
    component: Login
  },

  {
    path: "/provinces/north",
    name: "NorthernProvince",
    component: NorthernProvince
  },
  {
    path: "/provinces/east",
    name: "EasternProvince",
    component: EasternProvince
  },
  {
    path: "/provinces/south",
    name: "SouthernProvince",
    component: SouthernProvince
  },
  {
    path: "/provinces/west",
    name: "WesternProvince",
    component: WesternProvince
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: dashboard
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router