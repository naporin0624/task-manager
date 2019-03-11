import * as types from "./getters-types"
import Vue from 'vue';

export const getters = {
    [types.ALL_TASK] (state) {
        return state.taskList.sort((arr1, arr2) => {
            return arr1.status - arr2.status
        })
        // return state.taskList
    },
    [types.INCOMPLETE_TASK] (state, getters) {
        const retData = getters.ALL_TASK.filter(item => {
            return item.status == 0
        })
        return retData
    },
    [types.PROGRESS_TASK] (state, getters) {
        const retData = getters.ALL_TASK.filter(item => {
            return item.status == 1
        })
        return retData
    },
    [types.COMPLETED_TASK] (state, getters) {
        const retData = getters.ALL_TASK.filter(item => {
            return item.status == 2
        })
        return retData
    },
    [types.FIND_ITEM]: (state) => uid => {
        return state.taskList.find(item => {
            return item.uid === uid
        })
    },
}