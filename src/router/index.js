import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/Login';
import SinglePost from '@/components/post/SinglePost';
import MovieCreate from '@/components/panel/MovieCreate';

Vue.use(Router);

export default new Router({
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
    {
        path: '/post/1',
        name: 'SinglePost',
        component: SinglePost,
    },
    {
      path: '/panel/movie/create',
      name: 'MovieCreate',
      component: MovieCreate,
    },
  ],
});
