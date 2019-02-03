import Vue from 'vue';
import * as types from './mutation-types';

import axios_t from './modules/axios-templates'

export const state = {
    taskData: [],
    doneAudioList: [],
    redoAudioList: [],
}

export const mutations = {
    [types.TASK_INSERT](state, payload) {
        let maxId = 0;
        if (state.taskData.length > 0) {
            maxId = Math.max.apply(null, state.taskData.map(item => {
                return item.id
            }))
        }
        payload.id = maxId + 1
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
    [types.TASK_DELETE](state, payload) {
        let index = state.taskData.findIndex(item => {
            item.id === payload.id
        })
        state.taskData.splice(index, 1)
    }
}