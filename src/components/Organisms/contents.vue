<template>
  <div>
    <task-component
      v-if="nav=='task'"
      :taskData="remainData"
      @changeStatusEvent="checkboxEvent"
      @taskInsertEvent="taskInsert"
    ></task-component>
    <done-component v-else-if="nav=='done'" :taskData="doneData" @changeStatusEvent="checkboxEvent"></done-component>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import { TASK_INSERT, TASK_UPDATE } from "../../store/mutation-types.js";
import { REMAIN_TASK, DONE_TASK } from "../../store/getters-types.js";

import taskcomponent from "../Molecules/task";
import donecomponent from "../Molecules/done";

export default {
  name: "ContentConponent",
  data() {
    return {};
  },
  components: {
    "task-component": taskcomponent,
    "done-component": donecomponent
  },
  props: {
    nav: String
  },
  methods: {
    ...mapMutations({
      TASK_INSERT,
      TASK_UPDATE
    }),
    checkboxEvent(task) {
      console.log("checkboxEvent");
      this.TASK_UPDATE(task);
    },
    taskInsert(taskText) {
      this.TASK_INSERT({ text: taskText });
    }
  },
  computed: {
    ...mapGetters({ remainData: REMAIN_TASK }),
    ...mapGetters({ doneData: DONE_TASK })
  }
};
</script>
