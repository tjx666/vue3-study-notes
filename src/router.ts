import { createRouter, createWebHistory } from 'vue-router';
import { Content, CompositionApi } from './pages';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Content,
        },
        {
            path: '/composition-api',
            component: CompositionApi,
        },
    ],
});

export default router;
