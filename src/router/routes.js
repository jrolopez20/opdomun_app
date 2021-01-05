
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'casas-en-venta', component: () => import('pages/Properties.vue') },
      { path: 'casas-en-venta/:id', component: () => import('pages/PropertyDetail.vue') },
      { path: 'nuevo-anuncio-de-venta', component: () => import('pages/AddFreePost.vue') },
      { path: 'compro-casa', component: () => import('pages/PurchaseAnnouncements.vue') },
      { path: 'oficinas', component: () => import('pages/Offices.vue') },
      { path: 'calcular-impuesto', component: () => import('pages/TaxCalculator.vue') },
      { path: 'blog', component: () => import('pages/Blog.vue') },
      { path: 'articulo/:id', component: () => import('pages/ArticleDetail.vue') },
      { path: 'quienes-somos', component: () => import('pages/About.vue') },
      { path: 'preguntas-frecuentes', component: () => import('pages/Faq.vue') },
      { path: 'suscribirse', component: () => import('pages/Subscription.vue') },
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'politicas-de-privacidad', component: () => import('pages/legals/PrivacyPolice.vue') },
      { path: 'condiciones-de-uso', component: () => import('pages/legals/Terms.vue') },
      { path: 'profile', component: () => import('pages/MyProfile.vue') }
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
