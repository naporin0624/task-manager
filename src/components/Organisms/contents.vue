<template>
  <div>
    <task-component
      v-if="nav=='task'"
      :taskData="remainData"
      @changeStatusEvent="checkboxEvent"
      @taskInsertEvent="taskInsert"
    ></task-component>
    <done-component v-else-if="nav=='done'" :taskData="doneData" @changeStatusEvent="checkboxEvent"></done-component>
    <delete-component v-else-if="nav=='delete'" :taskData="taskData" @deleteTaskEvent="taskDelete"></delete-component>
    <setting-component v-else-if="nav=='setting'"></setting-component>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import {
  TASK_INSERT,
  TASK_UPDATE,
  TASK_DELETE
} from "../../store/mutation-types.js";
import { REMAIN_TASK, DONE_TASK } from "../../store/getters-types.js";

import taskcomponent from "../Molecules/task";
import donecomponent from "../Molecules/done";
import deletecomponent from "../Molecules/delete";
import settingconponent from "../Molecules/setting";

export default {
  name: "ContentConponent",
  data() {
    return {};
  },
  components: {
    "task-component": taskcomponent,
    "done-component": donecomponent,
    "delete-component": deletecomponent,
    "setting-component": settingconponent
  },
  props: {
    nav: String
  },
  methods: {
    ...mapMutations({
      TASK_INSERT,
      TASK_UPDATE,
      TASK_DELETE
    }),
    checkboxEvent(task) {
      console.log("checkboxEvent");
      this.TASK_UPDATE(task);
    },
    taskInsert(taskText) {
      this.TASK_INSERT({ text: taskText });
    },
    taskDelete(task) {
      this.TASK_DELETE(task);
    }
  },
  computed: {
    ...mapGetters({ remainData: REMAIN_TASK }),
    ...mapGetters({ doneData: DONE_TASK }),
    ...mapState({ taskData: "taskData" })
  }
};
</script>
