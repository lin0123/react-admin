/**
 * 路由配置集成文件
 */
import { RouteChildren } from '@/router/interface';

const config: RouteChildren[] = [
  {
    path: '/login',
    component: () => import('@/pages/Login'),
  },
  {
    path: '/',
    layout: () => import('@/layout/admin-layout/Index'),
    login: true,
    children: [
      {
        path: 'css',
        component: () => import('@/pages/admin-views/cssStyle'),
      },
      /**
       * 异常页面, 必须放到最后
       */
    ],
  },
];

export default config;
