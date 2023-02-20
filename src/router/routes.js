import {createWebHistory, createRouter} from 'vue-router'

import HelloWorldVue from '@/components/HelloWorld.vue';
// import LoginPage from '../components/LoginPage.vue';
import RegisterPage from '../components/Register.vue'
import ProfilePage from '../components/ProfilePage.vue';
import GridPage from '../components/GridPage.vue';
import NotFound from '../components/error/NotFound.vue';
import NotAuthorized from '../components/error/NotAuthorized.vue';
import LoginComponent from '../components/Login.vue';

const routes= [
  {
    name : "default",
    path : "/",
    component : HelloWorldVue
  },
  {
    name : "home",
    path : "/home",
    component : HelloWorldVue
  },
  {
    name:'login',
    path: '/login',
    component: LoginComponent
  },
  {
    name:'register',
    path: '/register',
    component: RegisterPage
  },
  {
    name:'profile',
    path: '/profile',
    component: ProfilePage
  },
  {
    name:'admin',
    path: '/admin',
    component: GridPage
  },  
  {
    name:'404',
    path: '/404',
    component: NotFound
  },  
  {
    name:'401',
    path: '/401',
    component: NotAuthorized
  },
  //otherwise, unknown page
  {
    path : "/:catchAll(.*)",
    redirect: "/404"
  }
]

const router=createRouter({
  history:createWebHistory(),
  routes
}
)

export default router;