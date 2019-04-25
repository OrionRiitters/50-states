import Router from 'vue-router';

import StateList from '@/components/StateList';
import About from '@/components/About';
import StateDetail from '@/components/StateDetail';

export default new Router({
    routes: [
        {
            path: '/',
            component: StateList
        },
        {
            path: '/About',
            component: About
        },
        {
            path: '/detail/:state',
            name: 'detail',
            component: StateDetail
        }
    ]
});

