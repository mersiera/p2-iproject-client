import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import ProductForm from "../views/ProductForm.vue";
import AuctionPage from "../views/AuctionPage.vue";
import HomeContent from "../views/HomeContent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "",
          name: "basicContent",
          component: HomeContent,
        },
        {
          path: "/auction",
          name: "auction",
          component: AuctionPage,
        },
      ],
    },
    {
      path: "/login",
      name: "loginPage",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "registerPage",
      component: RegisterPage,
    },
    {
      path: "/add",
      name: "formProduct",
      component: ProductForm,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("access_token");

  if (token && (to.name === "login" || to.name === "register")) {
    next({ name: "home" });
  } else if (!token && to.name === "home") {
    next({ name: "loginPage" });
  } else {
    next();
  }
});
export default router;
