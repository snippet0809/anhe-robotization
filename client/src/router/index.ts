import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      component: () => import('../views/HomeView.vue'),
      children: [
        { path: 'batch', component: () => import('../views/BatchView.vue') },
        { path: 'specification', component: () => import('../views/SpecificationView.vue') },
        { path: 'destination', component: () => import('../views/DestinationView.vue') }
      ]
    },

    { path: '/login', component: () => import('../views/LoginView.vue') },
    { path: '/about', component: () => import('../views/AboutView.vue') }
  ]
})

export default router
