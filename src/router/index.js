import { createRouter, createWebHistory } from "vue-router"
import HomeMenu from "@/components/forMenu/HomeMenu.vue";
import HomeComponent from "@/components/HomeComponent.vue"
import LoginMenu from "@/components/forMenu/LoginMenu.vue";
import LoginComponent from "@/components/LoginComponent.vue"
import CartMenu from "@/components/forMenu/CartMenu.vue";
import CartComponent from "@/components/CartComponent.vue";
import NotFoundComponent from "@/components/NotFoundComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path: "/",
      name: "home-view",
      components: {
        menu: HomeMenu,
        content : HomeComponent
      }
    },
    {
      path: "/login",
      name: "login-view",
      components: {
        menu: LoginMenu,
        content : LoginComponent
      }
    },
    {
      path: "/admin",
      name: "admin-view",
      components: {
        menu: () => import('@/components/forMenu/AdminMenu.vue'),
        content: () => import('@/components/AdminComponent.vue')
      },
      children:[
        {
          path: "categories",
          component: () => import('@/components/forManagement/Categories.vue')
        },
        {
          path: "events",
          component: () => import('@/components/forManagement/Events.vue')
        }
      ]
    },
    {
      path: "/cart",
      name: "cart-view",
      components: {
        menu: CartMenu,
        content : CartComponent
      }
    },
    {
      path: "/:catchall(.*)*",
      name: "not-found",
      components: {
        menu: () => import('@/components/forMenu/NotFoundMenu.vue'),
        content: NotFoundComponent
      }
    }
  ]
})

export default router
