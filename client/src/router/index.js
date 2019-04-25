import Router from 'vue-router';

import StateList from '@/components/StateList';
import About from '@/components/About';
import StateDetail from '@/components/StateDetail';

export default new Router({
    routes: [
        // Route to StateList component
        {
            path: '/',
            component: StateList
        },
        // Route to About component
        {
            path: '/About',
            component: About
        },
        // Route to detail component for state
        {
            path: '/detail/:state',
            name: 'detail',
            component: StateDetail
        }
    ]
});

