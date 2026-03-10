import HomePage from '@/modules/samples/pages/HomePage.vue';
import AuthPage from '@/modules/auth/pages/AuthPage.vue';
import AppLayout from '@/shared/layouts/AppLayout.vue';
import type { RouteRecordRaw } from 'vue-router';

export const routes : RouteRecordRaw[] = [
    {
        path: '/',
        component: AppLayout,
        children:[
            {
                path: '',
                component: HomePage
            }
        ]
    },
    {
        path: '/auth',
        component: AuthPage,
        
    }
]