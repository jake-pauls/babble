import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Start from '../views/Start.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/start',
    name: 'Start',
    component: Start,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
