import Vue from 'vue';
import * as types from './mutation-types';

import axios_t from './modules/axios-templates'
const api_url = "http://localhost:5000"

export const state = {
    message: 'Hello',
    taskData: [{
        id: 1,
        text: "今日はタスク管理表を作る",
        status: false
    }, {
        id: 2,
        text: "今日はVueの勉強も兼ねてやる",
        status: true
    }]
}

export const mutations = {
    [types.TASK_INSERT](state, payload) {
        let maxId = Math.max.apply(state.taskData(item => {
            return item.id
        }))
        payload.id = maxId
        state.taskData.push(payload)
    },
    [types.TASK_UPDATE](state, payload) {
        console.log("update")
        payload.status = !payload.status
        let index = state.taskData.findIndex(item => {
            item.id == payload.id
        })
        Vue.set(state.taskData, index, payload)
        console.log(state.taskData)
    }
}