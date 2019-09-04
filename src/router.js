import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Login from './views/Login.vue'
import ForgotPassword from './views/ForgotPassword.vue'
import Register from './views/Register.vue'
import Settings from './views/Settings.vue'
import Spelling from "./views/Spelling";
import Vocabulary from "./views/Vocabulary";
import Shop from "./views/Shop";
import NotFound from "./components/NotFound";
import Test from "./views/Spelling/unit/Test";
import UnitDetails from "./views/Spelling/unit-details";
import UnitReport from "./views/Spelling/unit/Report";
import UnitRoot from "./views/Spelling/unit/Root";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/forgot-password',
      name: 'ForgotPassword',
      component: ForgotPassword
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/spelling',
      name: 'spelling',
      component: Spelling
    },
    {
      path: '/spelling/unit/test',
      name: 'test',
      component: Test
    },
    {
      path: '/spelling/unit-details/:id/:unitId',
      name: 'unit-details',
      component: UnitDetails
    },
    {
      path: '/spelling/unit/report',
      name: 'report',
      component: UnitReport
    },
    {
      path: '/spelling/unit/root',
      name: 'root',
      component: UnitRoot
    },
    {
      path: '/vocabulary',
      name: 'vocabulary',
      component: Vocabulary
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    },
  ]
})
