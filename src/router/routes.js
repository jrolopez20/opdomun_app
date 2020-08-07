
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'casas-en-venta', component: () => import('pages/Properties.vue') },
      { path: 'oficinas', component: () => import('pages/Offices.vue') },
      { path: 'blog', component: () => import('pages/Blog.vue') },
      { path: 'quienes-somos', component: () => import('pages/About.vue') },
      { path: 'preguntas-frecuentes', component: () => import('pages/Faq.vue') },
      { path: 'suscribirse', component: () => import('pages/Subscription.vue') }
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
