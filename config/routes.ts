export default [
  {
    path: '/',
    component: '@/layouts/main',
    routes: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        component: 'home',
      },
      {
        path: '/salvinification',
        component: 'salvinification',
      },
      {
        path: '/about',
        component: 'about',
      },
    ],
  },
];
