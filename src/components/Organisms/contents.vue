<template>
  <div>
    <task-component v-show="nav=='task'"></task-component>
    <done-component v-show="nav=='done'"></done-component>
    <add-component v-show="nav=='add'"></add-component>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import { TASK_INSERT, TASK_UPDATE } from "../../store/mutation-types.js";
import { REMAIN_TASK } from "../../store/getters-types.js";

import taskcomponent from "../Molecules/task";
import addcomponent from "../Organisms/add";
import donecomponent from "../Organisms/done";

export default {
  name: "ContentConponent",
  data() {
    return {};
  },
  components: {
    "task-component": taskcomponent,
    "done-component": donecomponent,
    "add-component": addcomponent
  },
  props: {
    nav: String
  },
  computed: {
    ...mapGetters({ taskData: REMAIN_TASK })
  }
};
</script>
