import Vue from 'vue';
import Router from 'vue-router';

import MoviesList from './components/MoviesList.vue';
import MoviesDetail from '@/components/MovieDetail';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Movies List',
            component: MoviesList
        }, {
            path: '/movie/:id',
            name: 'Movies Detail',
            component: MoviesDetail
        }
    ]
});