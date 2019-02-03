<template>
  <div>
    <v-bottom-nav :active.sync="navLocal" :value="footerValue" fixed height="70">
      <v-btn color="pink" flat value="task">
        <span>Task</span>
        <v-icon>description</v-icon>
      </v-btn>

      <v-btn color="pink" flat value="done">
        <span>Done</span>
        <v-icon>done</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
export default {
  name: "footer-component",
  props: {
    footerValue: Boolean,
    nav: String
  },
  data() {
    return {};
  },
  computed: {
    navLocal: {
      get() {
        return this.nav;
      },
      set(val) {
        this.$emit("update:nav", val);
      }
    }
  }
};
</script>
