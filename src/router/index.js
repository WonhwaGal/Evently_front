import { createRouter, createWebHistory } from "vue-router"
import HomeMenu from "@/components/menu/HomeMenu.vue";
import HomeComponent from "@/components/mainContent/HomeComponent.vue"
import NotFoundComponent from "@/components/mainContent/NotFoundComponent.vue";

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
        menu: () => import('@/components/menu/LoginMenu.vue'),
        content : () => import('@/components/mainContent/LoginComponent.vue')
      }
    },
    {
      path: "/admin",
      name: "admin-view",
      components: {
        menu: () => import('@/components/menu/AdminMenu.vue'),
        content: () => import('@/components/mainContent/AdminComponent.vue')
      },
      children: [
        {
          path: "",
          component: () => import('@/components/adminsContent/EmptyAdmins.vue')
        },
        {
          path: "categories/create",
          component: () => import('@/components/adminsContent/CreateCategories.vue')
        },
        {
          path: "events",
          component: () => import('@/components/adminsContent/Events.vue')
        }
      ]
    },
    {
      path: "/cart",
      name: "cart-view",
      components: {
        menu: () => import('@/components/menu/CartMenu.vue'),
        content : () => import('@/components/mainContent/CartComponent.vue')
      }
    },
    {
      path: "/:catchall(.*)*",
      name: "not-found",
      components: {
        menu: () => import('@/components/menu/NotFoundMenu.vue'),
        content: NotFoundComponent
      }
    }
  ]
})

export default router
