import { createRouter, createWebHashHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import HomePage from '@/views/HomePage.vue'
import { useGeneralStore } from '@/stores/data'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          name: 'Home',
          path: '',
          component: HomePage,
          meta: {
            title: 'Chloe Chang'
          }
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'OOPS!',
      component: () => import('@/views/NotFound.vue'),
      meta: {
        title: 'OOPS!'
      }
    }
  ]
})
router.beforeEach(() => {
  const site = useGeneralStore()
  site.isLoading = true
})

router.afterEach((to) => {
  document.title = to.meta.title
})
export default router
