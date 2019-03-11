import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Pages/Home'
import TaskView from '@/Pages/TaskView'
import TaskDetial from '@/Pages/TaskDetial'
import Calender from '@/Pages/Calender'
import Setting from '@/Pages/Setting'
import Infomation from '@/Pages/Infomation'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/task',
    name: 'task',
    component: TaskView
  }, {
    path: '/task/:uid',
    name: 'taskDetial',
    component: TaskDetial
  },{
    path: '/calender',
    name: 'calender',
    component: Calender
  }, {
    path: '/setting',
    name: 'setting',
    component: Setting
  }, {
    path: '/infomation',
    name: 'info',
    component: Infomation
  }]
})
