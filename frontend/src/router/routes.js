
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/FirstPage.vue') },
      { path: '/second', component: () => import('pages/SecondPage.vue') }
    ]
  },
  {
    path: '/yts',
    component: () => import('layouts/MoviesLayout.vue'),
    children: [
      { path: '/yts', component: () => import('pages/Movie-Landing.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
