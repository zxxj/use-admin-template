export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
  },
  {
    path: '/layout',
    component: () => import('@/views/layout/index.vue'),
    name: 'layout',
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/notFound/404.vue'),
    name: 'notFound',
  },
];
