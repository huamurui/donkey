import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getRouts } from '../services/get-routes-mock'
import { usePermissionStore } from '@/stores/permission'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next()
  } else {
    const { permission, putPermission } = usePermissionStore()
    if (permission.length === 0) {
      getRouts().then(routes => {
        routes.forEach(route => {
          router.addRoute(route)
        })
        putPermission(routes)
        console.log('permission adding')
        next({ path: to.path })
      })
    } else {
      console.log('permission already added')
      next()
    }
  }
})

export default router
