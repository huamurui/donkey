
export const getRouts = async () => {
  await new Promise(resolve => setTimeout(resolve, 200))
  console.log('got routes')
  return [
    {
      name: 'Home',
      path  : '/',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      name: 'About',
      path  : '/about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      name: 'Contact',
      path  : '/contact',
      component: () => import('@/views/ContactView.vue'),
    },
    {
      name: '404',
      path  : '/:pathMatch(.*)',
      component: ()=> import('@/views/404.vue')
    }
  ]
}
