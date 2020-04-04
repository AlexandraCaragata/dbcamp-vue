import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/sign-up",
    name: "SignUp",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignUp.vue")
  },
  {
    path: "/my-account",
    name: "MyAccount",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MyAccount.vue")
  },
  {
    path: "/welcome",
    name: "Welcome",
    // route level code-splitting
    // this generates a separate chunk (welcome.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Welcome" */ "../views/Welcome.vue")
  },
  {
    path: "/learn-sql",
    name: "SQL-page",
    // route level code-splitting
    // this generates a separate chunk (.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "" */ "../views/topics/SQL.vue")
  },
  {
    path: "/learn-rational-database",
    name: "rational-database-page",
    // route level code-splitting
    // this generates a separate chunk (.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "" */ "../views/topics/rational-db.vue")
  },
  {
    path: "/learn-database-normalisation",
    name: "db-normalisation-page",
    // route level code-splitting
    // this generates a separate chunk (.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "" */ "../views/topics/db-normalisation.vue")
  },
  {
    path: "/learn-entity-diagram",
    name: "entity-diagram-page",
    // route level code-splitting
    // this generates a separate chunk (.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "" */ "../views/topics/entity-diagram.vue")
  },
  {
    path: "/learn-web-front-end",
    name: "web-front-end-page",
    // route level code-splitting
    // this generates a separate chunk (.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "" */ "../views/topics/web-front-end.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
