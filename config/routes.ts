export default [
  {
    path: '/projects',
    component: '@/layouts/detail',
    routes: [
      {
        path: '/projects/aurora',
        component: 'aurora',
      },
    ],
  },
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
