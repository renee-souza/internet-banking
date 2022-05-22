import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "../views/Home.vue";
import Transferencias from "../views/Transferencias.vue";

import PaginaNaoEncontrada from "../views/PaginaNaoEncontrada.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/transferencias",
    name: "Transferências",
    component: Transferencias,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Página não encontrada",
    component: PaginaNaoEncontrada,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
