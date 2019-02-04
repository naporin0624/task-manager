<template>
  <div>
    <v-bottom-nav :active.sync="navLocal" :value="footerValue" fixed height="70">
      <v-btn color="pink" flat value="task">
        <span>
          <router-link to="/">Task</router-link>
        </span>
        <v-icon>description</v-icon>
      </v-btn>

      <v-btn color="pink" flat value="done">
        <span>
          <router-link to="/done">Done</router-link>
        </span>
        <v-icon>done</v-icon>
      </v-btn>

      <v-btn color="pink" flat value="delete">
        <router-link to="/delete">
          <!-- <span>Delete</span> -->
          <v-icon>clear</v-icon>
        </router-link>
      </v-btn>

      <v-btn color="pink" flat value="setting">
        <router-link to="/setting">
          <!-- <span>Setting</span> -->
          <v-icon>build</v-icon>
        </router-link>
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
