import Vue from 'vue'
import Router from 'vue-router'
// import main from '@/components/Pages/main'
import taskPage from "@/components/Pages/task"
import donePage from "@/components/Pages/done"
import delPage from "@/components/Pages/delete"
import settingPage from "@/components/Pages/setting"


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: "task",
            component: taskPage
        },
        {
            path: '/done',
            name: "done",
            component: donePage
        }, {
            path: '/delete',
            name: "delete",
            components: delPage
        }, {
            path: '/setting',
            name: "setting",
            components: settingPage
        }
    ]
})