import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home/Home.vue"),
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: () => import("../views/detail/Detail.vue"),
  },
  {
    path: "/search-result",
    name: "Search Result",
    component: () => import("../views/search/View.vue"),
  },
  {
    path: "/summary",
    name: "Summary",
    component: () => import("../views/summary/Summary.vue"),
    children: [
      {
        path: "basket",
        name: "Basket",
        component: () => import("../views/summary/children/Basket.vue"),
      },
      {
        path: "payment",
        name: "Payment",
        component: () => import("../views/summary/children/Payment.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
