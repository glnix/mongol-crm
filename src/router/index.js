import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Login.vue'
import Task from '../views/Task.vue'
import Profile from '../views/Profile.vue'
import History from "../views/History";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/tasks',
        name: 'Task',
        component: Task
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/history',
        name: 'History',
        component: History
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
