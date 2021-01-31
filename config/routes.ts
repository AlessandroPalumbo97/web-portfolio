export default [
  {
    path: '/',
    component: '@/layouts/main/MainLayout',
    routes: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        component: 'home/home',
      },
      {
        path: '/test',
        component: 'test/test',
      },
    ]
  },
];
