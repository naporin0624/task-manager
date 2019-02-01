<template>
  <div>
    <v-checkbox
      v-for="task in taskData"
      :key="task.id"
      :label="task.text"
      :input-value="task.status"
      @change="updateTaskStatus(task)"
    ></v-checkbox>
  </div>
</template>

<script>
export default {
  name: "TaskWindow",
  props: {
    taskData: Array
  },
  data() {
    return {};
  },
  methods: {
    updateTaskStatus(task) {
      console.log("pushChange id: " + task.id);
      this.$emit("changeStatusEvent", task);
    }
  },
  computed: {}
};
</script>
