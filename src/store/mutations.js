import Vue from 'vue';
import * as types from './mutation-types';

import myAxios from './modules/myAxios'

const generateUID = () => {
  const uniqueDateString = new Date().getTime().toString(16)
  const randomString = Math.floor(1000 * Math.random()).toString(16)
  return uniqueDateString + randomString
}

export const state = {
  taskViewPageIndex: 1,
  taskList: [{
    uid: generateUID(),
    status: 0,
    display: 'はじめのたすく',
    create: new Date().getTime(),
  }, {
    uid: generateUID(),
    status: 1,
    display: '少し進んだたすく',
    create: new Date('2018/1/22').getTime(),
  }, {
    uid: generateUID(),
    status: 2,
    display: '終わったたすく',
    create: new Date('2018/12/22').getTime(),
  }, {
    uid: generateUID(),
    status: 0,
    display: 'ネストされたたすく',
    create: new Date('2018/11/22').getTime(),
  }],
  doneAudioList: [],
  redoAudioList: [],
}

export const mutations = {
  [types.VIEW_INCREMENT](state) {
    state.taskViewPageIndex = (state.taskViewPageIndex + 1) % 4
  },
  [types.VIEW_DECREMENT](state) {
    if (state.taskViewPageIndex == 0) {
      state.taskViewPageIndex = 3;
    } else {
      state.taskViewPageIndex--;
    }
  },
  [types.TASK_INSERT](state, text) {
    const newTask = {
      uid: generateUID(),
      status: 0,
      display: text,
      create: new Date().getTime(),
      start: null,
      end: null
    }
    state.taskList.push(newTask)
  },
  [types.TASK_UPDATE](state, payload) {
    // uidからインデックスを検索
    const index = state.taskList.findIndex(item => {
      return item.uid === payload.uid
    })
    // statusを１つ進める
    payload.status = (payload.status + 1) % 3

    /*
     * status:0 TODO
     * status:1 WIP
     * status:2 DONE
     */
    if (payload.status == 0) {
      payload.end = null //TODO, endを初期化するにする
    } else if (payload.status == 1) {
      payload.start = new Date().getTime() //WIP, 開始時間をtimestampで記録
    } else if (payload.status == 2) {
      payload.end = new Date().getTime() //DONE, 終了時間をtimestampで記録
    }
    Vue.set(state.taskList, index, payload)
  },
  [types.TASK_DELETE] (state, uid) {
    const deleteTaskIndex = state.taskList.findIndex(Item => {
      return Item.uid === uid
    })
    state.taskList.splice(deleteTaskIndex, 1)
  }
}
