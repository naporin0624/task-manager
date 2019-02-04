<template>
  <div>
    <h1>タスク一覧</h1>
    <v-container grid-list-xs v-for="task in taskData" :key="task.id">
      <v-layout row wrap>
        <v-flex xs2>
          <v-btn fab dark small color="green" @click="updateTaskStatus(task)">
            <v-icon dark>done</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs10>
          <p>{{task.text}}</p>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container text-xs-center class="input-task">
      <v-text-field
        append-outer-icon="send"
        prepend-icon="description"
        placeholder="タスクを入力"
        clearable
        v-model="taskText"
        @input="enterFlag=0"
        @click:append-outer="addTask"
        @keyup.enter="addTask"
      ></v-text-field>
    </v-container>
  </div>
</template>

<script>
import sanaAudio from "../modules/audio-modules.js";
import timestamp from "../modules/timestamp.js";
import device from "../modules/device.js";
import { mapMutations, mapGetters } from "vuex";
import { TASK_INSERT, TASK_UPDATE } from "../../store/mutation-types.js";
import { REMAIN_TASK } from "../../store/getters-types.js";

export default {
  name: "taskPage",
  data() {
    return {
      taskText: "",
      enterFlag: 0
    };
  },
  methods: {
    ...mapMutations({ TASK_INSERT, TASK_UPDATE }),
    updateTaskStatus(task) {
      console.log("pushChange id: " + task.id);
      if (!task.status) sanaAudio.donePlay();
      this.TASK_UPDATE({ id: task.id });
    },
    timestamp2string(timestamp) {
      return timestamp.toString(timestamp);
    },
    addTask() {
      if (this.taskText.length > 0 && this.taskText != "") {
        if (device.isPC()) {
          this.enterFlag += 1;
          if (this.enterFlag > 1) {
            this.TASK_INSERT({ text: this.taskText });
            this.taskText = "";
            this.enterFlag = 0;
          }
        } else {
          this.TASK_INSERT({ text: this.taskText });
          this.taskText = "";
        }
      }
    }
  },
  computed: {
    ...mapGetters({ taskData: REMAIN_TASK })
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

