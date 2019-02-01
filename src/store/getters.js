import * as types from "./getters-types"

export const getters = {
    [types.REMAIN_TASK](state) {
        console.log("remain_task")
        return state.taskData.filter(item => item.status == false)
    },
    [types.DONE_TASK](state) {
        console.log("done_task")
        return state.taskData.filter(item => item.status == true)
    }
}