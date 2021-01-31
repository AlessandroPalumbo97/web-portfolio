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
        component: 'home/Home',
      },
      {
        path: '/salvinification',
        component: 'salvinification/Salvinification',
      },
    ]
  },
];
