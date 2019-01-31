import * as types from "./getters-types"

export const getters = {
    [types.REMAIN_TASK](state) {
        console.log("remain_task_getter")
        return state.taskData
    }
}