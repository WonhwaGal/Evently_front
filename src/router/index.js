import { createRouter, createWebHistory } from "vue-router"
import HomeComponent from "@/components/HomeComponent.vue"
import LoginComponent from "@/components/LoginComponent.vue"
import CartComponent from "@/components/CartComponent.vue";
import NotFoundComponent from "@/components/NotFoundComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path: "/",
      name: "home-view",
      component: HomeComponent //() => import('@/components/HomeComponent.vue')
    },
    {
      path: "/login",
      name: "login-view",
      component: LoginComponent
    },
    {
      path: "/admin",
      name: "admin-view",
      component: () => import('@/components/AdminComponent.vue'),
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
      component: CartComponent
    },
    {
      path: "/:catchall(.*)*",
      name: "not-found",
      component: NotFoundComponent
    }
  ]
})

export default router
