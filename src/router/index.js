import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Show from '../views/post/Show.vue'
import Create from '../views/post/Create.vue'
import Tag from '../views/post/Tag.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/post/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/post/:id',
    name: 'Show',
    component: Show,
    props:true
  },
  {
    path: '/tag/:tag',
    name: 'Tag',
    component: Tag,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
