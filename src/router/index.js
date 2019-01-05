import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/Login';
import SinglePost from '@/components/post/SinglePost';
import Panel from '@/components/panel/Panel';
import MovieCreate from '@/components/panel/MovieCreate';
import MovieCreateForm from '@/components/panel/MovieCreateForm';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/post/:id',
      name: 'SinglePost',
      component: SinglePost,
    },
      //@@todo mocked data

      //panel
    {
      path: '/panel',
      name: 'Panel',
      meta: { panel: true },
      component: Panel,
    },
    {
      path: '/panel/movie/create',
      name: 'MovieCreate',
      meta: { panel: true },
      component: MovieCreate,
    },
    {
      path: '/panel/movie/create/form',
      name: 'MovieCreateForm',
      meta: { panel: true },
      component: MovieCreateForm,
    },
  ],
});
