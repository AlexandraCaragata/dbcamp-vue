import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/sign-up",
    name: "SignUp",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignUp.vue"),
  },
  {
    path: "/my-account",
    name: "MyAccount",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MyAccount.vue"),
  },
  {
    path: "/topics",
    name: "Topics",
    // route level code-splitting
    // this generates a separate chunk (welcome.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Welcome" */ "../views/Welcome.vue"),
  },
  {
    path: "/learn-relational-database",
    name: "relationalDatabase",
    // route level code-splitting
    // this generates a separate chunk (.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "" */ "../views/topics/RelationalDB.vue"),
  },
  {
    path: "/learn-database-normalisation",
    name: "dbNormalization",
    // route level code-splitting
    // this generates a separate chunk (.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "" */ "../views/topics/db-normalisation.vue"),
  },
  {
    path: "/learn-entity-diagram",
    name: "entityDiagram",
    // route level code-splitting
    // this generates a separate chunk (.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "" */ "../views/topics/entity-diagram.vue"),
  },
  {
    path: "/learn-sql",
    name: "sql",
    // route level code-splitting
    // this generates a separate chunk (.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "" */ "../views/topics/SQL.vue"),
  },
  {
    path: "/learn-how-to-install-a-relational-database",
    name: "installRelationalDatabase",
    // route level code-splitting
    // this generates a separate chunk (.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "" */ "../views/topics/InstallRelationalDB.vue"),
  },
  {
    path: "/learn-web-front-end",
    name: "webFrontEnd",
    // route level code-splitting
    // this generates a separate chunk (.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "" */ "../views/topics/web-front-end.vue"),
  },
  {
    path: "/quiz/:quizId",
    name: "quiz",
    // route level code-splitting
    // this generates a separate chunk (.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "" */ "../views/Quiz.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
  {
    path: "/forum",
    name: "Forum",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Forum.vue"),
  },
  {
    path: "/chat",
    name: "Chat",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Chat.vue"),
  },
  {
  path: "/test",
  name: "test",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "../views/animation-test.vue"),
}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
