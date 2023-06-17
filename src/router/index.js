import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../components/db_Home.vue')
  },
  {
    path: '/me',
    component: () => import('../components/db_Me.vue')
  },
  {
    path: '/movie',
    component: () => import('../components/db_Movie.vue')
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
