import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import error from '@/components/error'

Vue.use(Router)

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Layout',
            component: Layout
        }, {
            path: '/404',
            name: 'error',
            component: error
        },
        {
            path: '*',
            redirect: '/404',
        }
    ]
})
