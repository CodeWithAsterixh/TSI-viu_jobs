import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import JobsPage from '@/views/JobsPage.vue'
import NotFound from '@/views/NotFound.vue'
import JobDetailsPage from '@/views/JobDetailsPage.vue'
import AddJobPage from '@/views/AddJobPage.vue'
import EditJobPage from '@/views/EditJobPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: JobsPage,
    },
    {
      path: '/jobs/:id',
      name: 'Job',
      component: JobDetailsPage,
    },
    {
      path: '/jobs/add',
      name: 'Add Job',
      component: AddJobPage,
    },
    {
      path: '/jobs/edit/:id',
      name: 'Edit Job',
      component: EditJobPage,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFound,
    },
  ],
})

export default router
