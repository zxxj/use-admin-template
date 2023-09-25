import type { RouteRecordRaw } from 'vue-router';

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: '登录页',
      menuHidden: true,
    },
  },
  {
    path: '/layout',
    component: () => import('@/views/layout/index.vue'),
    name: 'layout',
    meta: {
      title: '首页',
    },
    children: [
      {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        meta: {
          title: '测试',
        },
      },
      {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        meta: {
          title: '测试2',
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/notFound/404.vue'),
    name: 'notFound',
    meta: {
      title: '404',
      menuHidden: true,
    },
  },
];
