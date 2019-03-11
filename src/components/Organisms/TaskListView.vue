<template lang="pug">
  div.wrapper
    v-container(grid-list-xs text-xs-center)
      transition-group(name="list" mode="in-out")
        task-bar.list-item(
          v-for="taskObj in TASK_DATA"
          :key="taskObj.uid"
          :status="taskObj.status" 
          :display="taskObj.display"
          @statclickend="statEvent(taskObj)"
          @infoclickend="infoEvent(taskObj.uid)"
        )
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import { TASK_UPDATE } from '@/store/mutation-types.js'
import { ALL_TASK, INCOMPLETE_TASK, PROGRESS_TASK, COMPLETED_TASK } from '@/store/getters-types.js'

import TaskBar from '@/components/Molecules/TaskBar'

export default {
  name: 'TaskListView',
  props:{
    btnIndex: {
      type: Number,
      required: true,
      default: 0
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
    infoEvent (uid) {
      this.$emit('infoclickend', uid)
    },
  },
}
</script>

<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}

.list-item {
  transition: all 1s;
  display: block;
  margin-right: 0px;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.list-leave-active {
  position: absolute;
}
</style>
