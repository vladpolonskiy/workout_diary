import Vue from 'vue';
import Router from 'vue-router';
import Exercises from '@/components/Exercises';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Exercises',
      component: Exercises,
    },
  ],
});
