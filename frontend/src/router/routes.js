
const routes = [
  {
    path: '/',
    component: () => import('layouts/MoviesLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Movie-Landing.vue')}
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
