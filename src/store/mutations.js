import Vue from 'vue';
import * as types from './mutation-types';

import myAxios from './modules/myAxios'

const generateUID = () => {
  const uniqueDateString = new Date().getTime().toString(16)
  const randomString = Math.floor(1000 * Math.random()).toString(16)
  return uniqueDateString + randomString
}

export const state = {
  taskList: [{
    uid: generateUID(),
    status: 0,
    display: 'はじめのたすく',
    start: new Date().getTime(),
  }, {
    uid: generateUID(),
    status: 1,
    display: '少し進んだたすく',
    start: new Date('2018/1/22').getTime(),
  }, {
    uid: generateUID(),
    status: 2,
    display: '終わったたすく',
    start: new Date('2018/12/22').getTime(),
  }, {
    uid: generateUID(),
    status: 0,
    display: 'ネストされたたすく',
    start: new Date('2018/11/22').getTime(),
  }],
  doneAudioList: [],
  redoAudioList: [],
}

export const mutations = {
  [types.TASK_INSERT] (state, text) {
    const newTask = {
      uid: generateUID(),
      status: 0,
      display: text,
      start: new Date().getTime(),
    }
    state.taskList.push(newTask)
  },
  [types.TASK_UPDATE] (state, payload) {
    // uidからインデックスを検索
    const index = state.taskList.findIndex(item => {
      return item.uid === payload.uid
    })
    // statusを１つ進める
    payload.status = (payload.status + 1) % 3
    if (payload.status % 3 == 0) {
      payload.start = new Date().getTime()
      payload.end = undefined
    }else if (payload.status % 3 == 2) {
      payload.end = new Date().getTime()
    } else {
      payload.end = undefined
    }
    Vue.set(state.taskList, index, payload)
  }
}
