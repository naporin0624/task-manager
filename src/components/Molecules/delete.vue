<template>
  <div>
    <h1>タスクを削除</h1>
    <v-container grid-list-xs v-for="task in taskData" :key="task.id">
      <v-layout row wrap>
        <v-flex xs2>
          <v-btn fab dark small color="red" @click="deleteTask(task)">
            <v-icon dark>clear</v-icon>
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
export default {
  name: "DeleteWindow",
  props: {
    taskData: Array
  },
  data() {
    return {
      taskText: ""
    };
  },
  methods: {
    deleteTask(task) {
      console.log("pushChange id: " + task.id);
      this.$emit("deleteTaskEvent", task);
      // if (!task.status) sanaAudio.redoPlay();
    }
  },
  computed: {}
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
