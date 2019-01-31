<template>
  <div>
    <div v-for="task in taskDataLocal" :key="task.id" class="text-xs-center">
      <v-checkbox :label="task.text" v-model="task.checkbox" @click="changeChechbox(task)"></v-checkbox>
    </div>
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
  methods: {},
  computed: {
    taskDataLocal: {
      get() {
        return this.taskData;
      },
      set(val) {}
    }
  }
};
</script>
