import {createWebHistory, createRouter} from 'vue-router'
import LoginPage from './components/LoginPage.vue';
import ProfilePage from './components/ProfilePage.vue';

const routes= [
  {
    name:'LoginPage',
    path: '/',
    component: LoginPage
  },
    {
    name:'ProfilePage',
    path: '/profile',
    component: ProfilePage
  }
]

const router=createRouter({
  history:createWebHistory(),
  routes
}
)

export default router;