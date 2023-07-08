import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EventView from '../views/pages/Events/EventView.vue';

import Footer from '../components/Footer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/pages/Halls/HallsView.vue')

    },
    {
      path: '/create-event',
      name: 'createEvent',
      component: () => import('../views/pages/Events/createView.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: EventView
    },
    {
      path: '/edit-event',
      name: 'EditEvent',
      component: () => import('../views/pages/Events/EditView.vue')
    },
    {
      path: '/create-hall',
      name: 'CreateHall',
      component: () => import('../views/pages/Halls/CreateView.vue')
    },
    {
      path: '/edit-hall',
      name: 'EditHall',
      component: () => import('../views/pages/Halls/EditView.vue')
    },
    {
      path: '/halls',
      name: 'halls',
      component: () => import('../views/pages/Halls/HallsView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/pages/auth/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/pages/auth/RegisterView.vue')
    },
    {
      path: '/footer',
      name: 'footer',
      component: Footer
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
