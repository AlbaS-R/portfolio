import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/loading.vue'
import HomeCorp from '../pages/HomePageCorp.vue'
import HomeCreate from '../pages/HomePageCreat.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/homeCorp', component: HomeCorp },
  { path: '/homeCreate', component: HomeCreate },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
