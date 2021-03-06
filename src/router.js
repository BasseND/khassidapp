import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Grid from "./views/Grid.vue";
import Add from "./views/Add.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/grid",
      name: "grid",
      component: Grid
    },
    {
      path: "/add",
      name: "add",
      component: Add
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
