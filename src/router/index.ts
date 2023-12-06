import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

// 静态路由表
const routes: Array<RouteRecordRaw> = [
  // {
  //   // 路由重定向配置
  //   path: '/',
  //   redirect: '/',
  // },
  {
    path: '/',
    meta: {
      title: '首页',
      keepAlive: false,
    },
    component: () => import('../views/home/index.vue'),
  },
  {
    path: '/about',
    meta: {
      title: '关于我们',
      keepAlive: false,
    },
    component: () => import('../views/about/index.vue'),
  },
];

// 路由对象
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to: any) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
