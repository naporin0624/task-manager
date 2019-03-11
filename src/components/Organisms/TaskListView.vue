<template lang="pug">
  div.wrapper
    v-container(grid-list-xs text-xs-center)
      v-btn(flat icon @click.end="indexDecrement")
        v-icon navigate_before
      span.now-status {{ viewContentList[btnIndex] }}
      v-btn(flat icon @click.end="indexIncrement")
        v-icon navigate_next
      transition-group(name="list" mode="in-out")
        task-bar(
          v-for="taskObj in TASK_DATA"
          :key="taskObj.uid"
          :status="taskObj.status" 
          :display="taskObj.display"
          @statclickend="statEvent(taskObj)"
          @infoclickend="infoEvent(taskObj)"
        )
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import { TASK_UPDATE } from '@/store/mutation-types.js'
import { ALL_TASK, INCOMPLETE_TASK, PROGRESS_TASK, COMPLETED_TASK } from '@/store/getters-types.js'

import TaskBar from '@/components/Molecules/TaskBar'

export default {
  name: 'TaskListView',
  data () {
    return {
      btnIndex: 0,
      viewContentList: ['全て', '未完', '進行', '完了'],
    }
  },
  components: {
    TaskBar
  },
  computed: {
    ...mapGetters([
      ALL_TASK,
      INCOMPLETE_TASK,
      PROGRESS_TASK,
      COMPLETED_TASK,
    ]),
    TASK_DATA () {
      switch (this.btnIndex) {
        case 0:
          // return '#424242'
          return this.ALL_TASK
          break
        case 1:
          // return 'blue'
          return this.INCOMPLETE_TASK
          break
        case 2:
          // return 'red'
          return this.PROGRESS_TASK
          break
        case 3:
          // return 'green'
          return this.COMPLETED_TASK
          break
        default:
          return ALL_TASK
      }
    }
  },
  methods: {
    ...mapMutations({
      TASK_UPDATE
    }),
    statEvent (taskObj) {
      this.TASK_UPDATE(taskObj)
    },
    infoEvent (key) {
      console.log('event', key)
    },
    indexIncrement () {
      this.btnIndex = (this.btnIndex + 1) % 3
      // const targetSize = this.viewContentList.length - 1
      // if (this.btnIndex == targetSize) {
      //   this.btnIndex = 0
      // } else {
      //   this.btnIndex++
      // }
    },
    indexDecrement () {
      if (this.btnIndex == 0) {
        this.btnIndex = 3
      } else {
        this.btnIndex--
      }
    }
  },
}
</script>

<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(100px);
}
</style>
