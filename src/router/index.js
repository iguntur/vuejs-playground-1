import {createRouter, createWebHistory} from 'vue-router';
import Welcome from '@/views/Welcome.vue';

const AuthRoutes = [
    {
        path: '/auth/login',
        name: 'Login',
        component: () => import('@/views/Auth/Login.vue'),
    },
    {
        path: '/auth/register',
        name: 'Register',
        component: () => import('@/views/Auth/Register.vue'),
    },
];

const DashboardRoutes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard/Dashboard.vue'),
    },
];

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Welcome,
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About/About.vue'),
    },
    ...AuthRoutes,
    ...DashboardRoutes,
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
