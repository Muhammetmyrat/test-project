const Module = () => import('./Module.vue')

const Home = () => import('./pages/HomeView.vue')

const moduleRoute = {
  path: '/',
  component: Module,
  children: [
    {
      path: '',
      name: 'HOME',
      component: Home
    }
  ]
}

export default (router: any) => {
  router.addRoute(moduleRoute)
}
