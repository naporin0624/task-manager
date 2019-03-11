<template lang="pug">
  div.wrapper
    div.text-xs-center.filter-bar
      v-btn(flat icon @click.end="indexDecrement")
        v-icon navigate_before
      span.now-status {{ viewContentList[btnIndex] }}
      v-btn(flat icon @click.end="indexIncrement")
        v-icon navigate_next
    div.task-box
      task-list-view(
        v-if="isMobile"
        :btnIndex="btnIndex"
        @infoclickend="clickEvent"
      )
    v-text-field(
      v-if="isMobile"
      v-model="inputText"
      background-color="#FAFAFA"
      single-line
      label='タスクを入力'
      box
      clearable
      append-icon="send"
      @click:append="pushTaskData"
      @keyup.enter="pushTaskData"
      @keypress="sendPreparation"
    )
</template>

<script>
import { mapMutations } from 'vuex'
import { TASK_INSERT } from '@/store/mutation-types.js'

import TaskListView from '@/components/Organisms/TaskListView'
export default {
  name: "TaskView",
  data () {
    return {
      inputText: '',
      sendPreparationFlag: false, 
      btnIndex: 0,
      viewContentList: ['全て', '未完', '進行', '完了'],
    }
  },
  components: {
    TaskListView
  },
  computed: {
    isMobile () {
      return this.$vuetify.breakpoint.smAndDown
    }
  },
  methods: {
    ...mapMutations([
      TASK_INSERT
    ]),
    clickEvent (uid) {
      this.$router.push({
        path: `/task/${uid}`,
      })
    },
    indexIncrement () {
      this.btnIndex = (this.btnIndex + 1) % 4
    },
    indexDecrement () {
      if (this.btnIndex == 0) {
        this.btnIndex = 3
      } else {
        this.btnIndex--
      }
    },
    sendPreparation () {
      this.sendPreparationFlag = true
    },
    pushTaskData () {
      if (this.inputText.length>0 && this.sendPreparationFlag) {
        this.TASK_INSERT(this.inputText)
        this.inputText = ''
        this.sendPreparationFlag = false
      }
    }
  }
};
</script>

<style scoped>
.wrapper {
  position: relative;
  height: 100%;
}
.task-box {
  padding-top: 32px;
  margin-bottom: 48px;
}
.filter-bar {
  position: fixed;
  width: 100%;
  z-index: 999;
  background-color: #FAFAFA;
}
.v-text-field{
	position: fixed;
	bottom: 32px;
  width: 90%;
  margin-left: 5%;
}
</style>
