<template>
  <div>
    <v-bottom-nav :active.sync="navLocal" :value="footerValue" fixed height="70">
      <v-btn color="pink" flat value="task">
        <span>
          <!-- <a href="/taskPage">Task</a> -->
          <router-link to="/">Task</router-link>
        </span>
        <v-icon>description</v-icon>
      </v-btn>

      <v-btn color="pink" flat value="done">
        <span>
          <!-- <a href="/donePage">Done</a> -->
          <router-link to="/done">Done</router-link>
        </span>
        <v-icon>done</v-icon>
      </v-btn>

      <v-btn color="pink" flat value="delete">
        <span>
          <router-link to="/delete">Delete</router-link>
          <!-- <a href="#/delPage">delete</a> -->
        </span>
        <v-icon>clear</v-icon>
      </v-btn>

      <v-btn color="pink" flat value="setting">
        <span>
          <!-- <a href="/settingPage">setting</a> -->
          <router-link to="/setting">Setting</router-link>
        </span>
        <v-icon>build</v-icon>
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
