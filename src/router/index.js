import { createRouter, createWebHistory } from 'vue-router'
import HomeView     from '@/views/HomeView.vue'
import NotFound     from '@/components/common/NotFound.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },   
  {
    path: "/:catchAll(.*)",
    component: NotFound
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import('@/views/PostsView.vue')
  },
  // user 경로 추가 : start
  {
    path: '/users/',
    name: 'users',
    component: () => import('@/views/user/UserListView.vue')
  }, 
  {
    path: '/users/:id',
    name: 'user',
    component: () => import('@/views/user/UserDetailView.vue')
  }, // user 경로 추가 : end    
  { 
    path: "/example",  
    component: () => import('@/views/example/ExampleHome.vue'), 
    children: [
        { path: 'inputForm', component: () => import('@/views/example/InputForm.vue') },
        { path: 'conditionNumber', component: () => import('@/views/example/ConditionNumber.vue') }      
    ]
  } ,
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
