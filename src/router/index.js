import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Exercises from '@/components/Exercises';
import Day from '@/components/Day';
import Note from '@/components/Note';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/exercises',
      name: 'Exercises',
      component: Exercises,
    },
    {
      path: '/day/:date',
      name: 'Day',
      component: Day,
      children: [
        {
          path: 'note',
          component: Note,
        },
      ],
    },
  ],
});
