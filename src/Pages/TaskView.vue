<template lang="pug">
  v-touch.wrapper(
    v-on:swiperight="onSwipeRight"
    v-on:swipeleft="onSwipeLeft"
    :swipe-options="{ direction: 'horizontal', threshold: 100 }"
  )
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
        :class="{'default-mode':!textFieldIsActive}"
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
      :class="{'default-mode':!textFieldIsActive}"
    )
    //- @keypress="sendPreparation"
</template>

<script>
import { mapMutations } from "vuex";
import { TASK_INSERT } from "@/store/mutation-types.js";

import TaskListView from "@/components/Organisms/TaskListView";
export default {
  name: "TaskView",
  data() {
    return {
      textFieldIsActive: false,
      inputText: "",
      // sendPreparationFlag: false,
      btnIndex: 1,
      viewContentList: ["ALL", "TODO", "WIP", "DONE"]
    };
  },
  components: {
    TaskListView
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    }
  },
  methods: {
    ...mapMutations([TASK_INSERT]),
    clickEvent(uid) {
      this.$router.push({
        path: `/task/${uid}`
      });
    },
    indexIncrement() {
      this.btnIndex = (this.btnIndex + 1) % 4;
    },
    indexDecrement() {
      if (this.btnIndex == 0) {
        this.btnIndex = 3;
      } else {
        this.btnIndex--;
      }
    },
    onSwipeRight() {
      this.indexDecrement();
    },
    onSwipeLeft() {
      this.indexIncrement();
    },
    // sendPreparation() {
    //   this.sendPreparationFlag = true;
    // },
    unsetFocus() {
      // 現在アクティブな要素を取得する
      const active_element = document.activeElement;
      // フォーカスを外す
      if (active_element) {
        active_element.blur();
      }
    },
    pushTaskData() {
      // if (this.inputText.length > 0 && this.sendPreparationFlag) {
      if (this.inputText.length > 0) {
        this.TASK_INSERT(this.inputText);
        this.inputText = "";
        this.unsetFocus();
        // this.sendPreparationFlag = false;
      }
    }
  }
};
</script>

<style scoped>
/*FIXME: フォーカス時のv-text-fieldのbottomの調整*/
.wrapper {
  position: relative;
  height: 100%;
}
.task-box {
  padding-top: 32px;
}
.task-box .default-mode {
  margin-bottom: 48px;
  padding-bottom: 56px;
}
.filter-bar {
  position: fixed;
  width: 100%;
  z-index: 999;
  background-color: #fafafa;
}
.v-text-field {
  width: 100%;
}
.v-text-field.default-mode {
  position: fixed;
  bottom: 32px;
}
</style>
