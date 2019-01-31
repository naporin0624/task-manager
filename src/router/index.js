import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import main from '@/components/MyPages/main'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/hello',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/',
            name: "main",
            component: main
        }
    ]
})