import Vue from 'vue'
import Router from 'vue-router';
import Welcome from './components/Welcome.vue';
import Login from './components/Login.vue';
import CreateAccount from './components/CreateAccount.vue';
import Home from './components/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/', redirect: '/welcome'},
        { path: '/welcome', name: 'welcome', component: Welcome},
        { path: '/login', name: 'login', component: Login},
        { path: '/createaccount', name: 'createaccount', component: CreateAccount},
        { path: '/home', name: 'home', component: Home}
      ]

})
