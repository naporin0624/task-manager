<template>
  <div>
    <task-component v-if="nav=='task'" :taskData="remainData" @changeStatusEvent="checkboxEvent"></task-component>
    <task-component v-else-if="nav=='done'" :taskData="doneData" @changeStatusEvent="checkboxEvent"></task-component>
    <add-component v-else-if="nav=='add'"></add-component>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import { TASK_INSERT, TASK_UPDATE } from "../../store/mutation-types.js";
import { REMAIN_TASK, DONE_TASK } from "../../store/getters-types.js";

import taskcomponent from "../Molecules/task";
import addcomponent from "../Organisms/add";

export default {
  name: "ContentConponent",
  data() {
    return {};
  },
  components: {
    "task-component": taskcomponent,
    // "done-component": donecomponent,
    "add-component": addcomponent
  },
  props: {
    nav: String
  },
  methods: {
    ...mapMutations({ TASK_INSERT, TASK_UPDATE }),
    checkboxEvent(task) {
      console.log("checkboxEvent");
      this.TASK_UPDATE(task);
    }
  },
  computed: {
    ...mapGetters({ remainData: REMAIN_TASK }),
    ...mapGetters({ doneData: DONE_TASK })
  }
};
</script>
