import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Miniscrolls from "../views/Miniscrolls.vue";
import Minicheats from "../views/Minicheats.vue";
import Manual from "../views/Manual.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/miniscrolls",
    name: "Miniscrolls",
    component: Miniscrolls
  },
  {
    path: "/minicheats",
    name: "Minicheats",
    component: Minicheats
  },
  {
    path: "/manual",
    name: "Manual",
    component: Manual
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
