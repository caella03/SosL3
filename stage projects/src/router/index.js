import { createRouter, createWebHistory } from "vue-router"

import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Services from "../views/Services.vue"
import Contact from "../views/Contact.vue"

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
    path: "/provinces",
    component: () => import("../views/ProvincesLayout.vue"),
    children: [
      {
        path: "north",
        name: "NorthernProvince",
        component: NorthernProvince
      },
      {
        path: "east",
        name: "EasternProvince",
        component: EasternProvince
      },
      {
        path: "south",
        name: "SouthernProvince",
        component: SouthernProvince
      },
      {
        path: "west",
        name: "WesternProvince",
        component: WesternProvince
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router