import Vue from 'vue';
import * as types from './mutation-types';

import axios_t from './modules/axios-templates'
const api_url = "http://localhost:5000"

export const state = {
    message: 'Hello',
    taskData: [{
        id: 1,
        createDate: (new Date("2019/1/31").getTime() / 1000) + 60 * 60 * 9,
        finishDate: null,
        text: "横のボタンをクリックしてね",
        status: false,
    }, ]
}

export const mutations = {
    [types.TASK_INSERT](state, payload) {
        let maxId = Math.max.apply(null, state.taskData.map(item => {
            return item.id
        }))
        payload.id = maxId + 1
        console.log(maxId)
        payload.createDate = new Date().getTime() / 1000 + 60 * 60 * 9
        payload.status = false
        payload.finishDate = null
        state.taskData.push(payload)
    },
    [types.TASK_UPDATE](state, payload) {
        payload.status = !payload.status
        let index = state.taskData.findIndex(item => {
            item.id === payload.id
        })
        if (payload.status) payload.finishDate = (new Date().getTime() / 1000) + 60 * 60 * 9
        else payload.finishDate = null

        Vue.set(state.taskData, index, payload)
    },
}