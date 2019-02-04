<template>
  <div>
    <h1>完了タスク一覧</h1>
    <v-container grid-list-xs v-for="task in taskData" :key="task.id">
      <v-layout row wrap>
        <v-flex xs2>
          <v-btn fab dark small color="blue" @click="updateTaskStatus(task)">
            <v-icon dark>undo</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs10>
          <p>{{task.text}}</p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import sanaAudio from "../modules/audio-modules.js";
import { mapMutations, mapGetters } from "vuex";
import { DONE_TASK } from "../../store/getters-types.js";
import { TASK_UPDATE } from "../../store/mutation-types.js";
export default {
  name: "DoneWindow",
  props: {
    // taskData: Array
  },
  data() {
    return {
      taskText: ""
    };
  },
  methods: {
    ...mapMutations({ TASK_UPDATE }),
    updateTaskStatus(task) {
      // console.log("pushChange id: " + task.id);
      // this.$emit("changeStatusEvent", task.id);
      if (!task.status) sanaAudio.redoPlay();
      this.TASK_UPDATE({ id: task.id });
    }
  },
  computed: {
    ...mapGetters({ taskData: DONE_TASK })
  }
};
</script>

<style scoped>
p {
  font-size: 1.2em;
  letter-spacing: 0.2em;
  border-bottom: solid 1px gray;
  padding: 0.4em;
}
</style>
