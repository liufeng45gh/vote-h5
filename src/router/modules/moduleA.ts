export default [
  {
    path: '/',
    name: 'moduleA',
    component: (): any => import('@/views/moduleA/index.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: (): any => import('@/views/moduleA/category.vue')
  },
  {
    path: '/appreciate/by-category',
    name: 'appreciateList',
    component: (): any => import('@/views/moduleA/appreciateList.vue')
  },
  {
    path: '/appreciate/detail',
    name: 'appreciateDetail',
    component: (): any => import('@/views/moduleA/appreciateDetail.vue')
  }
];
