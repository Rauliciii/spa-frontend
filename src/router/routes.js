import {createWebHistory, createRouter} from 'vue-router'

import HomeView from '@/components/views/HomeView.vue'
import RegisterView from '../components/views/RegisterView.vue'
import ProfileView from '../components/views/ProfileView.vue';
import SubmissionsView from '../components/views/SubmissionsView.vue';
import NotFound from '../components/error/NotFound.vue';
import NotAuthorized from '../components/error/NotAuthorized.vue';
import LoginView from '../components/views/LoginView.vue';
import Role from '@/models/role';
import { useUserStore } from '@/store/user.store';

const routes= [
  {
    name : "default",
    path : "/",
    component : HomeView
  },
  {
    name : "home",
    path : "/home",
    component : HomeView
  },
  {
    name:'login',
    path: '/login',
    component: LoginView
  },
  {
    name:'register',
    path: '/register',
    component: RegisterView
  },
  {
    name:'profile',
    path: '/profile',
    component: ProfileView,
    meta: { roles: [Role.ADMIN, Role.USER] }
  },
  {
    name:'submissions',
    path: '/submissions',
    component: SubmissionsView,
    meta: { roles: [Role.ADMIN, Role.USER] }
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

router.beforeEach((to, from, next) => {
  const {roles} = to.meta;
  const currentUser = useUserStore().currentUser;

  if (roles?.length) {
    if (!currentUser) {
      return next({path : "/login"});
    }

    if (!roles.includes(currentUser.role)) {
      return next({path: "/401"});
    }
  }
  next();
})


export default router;