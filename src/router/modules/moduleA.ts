export default [
  {
    path: '/',
    name: 'moduleA',
    component: (): any => import('@/views/moduleA/index.vue')
  }
];
