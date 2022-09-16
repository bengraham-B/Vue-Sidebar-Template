import {createRouter, createWebHistory} from 'vue-router'
import Home from '../Views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: () => import('../Views/About.vue')
        }
    ]
})

export default router