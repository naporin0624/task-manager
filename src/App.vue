<template>
  <div id="app">
    <header-component></header-component>
    <v-card-text style="height: 10vh;"></v-card-text>
    <main>
      <router-view></router-view>
    </main>
    <v-card-text style="height: 60px;"></v-card-text>
    <footer-component :footerValue="true" :nav.sync="nav"></footer-component>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import { CONTENTS_UPDATE } from "./store/mutation-types.js";

import headerComponent from "./components/Organisms/header";
import footerComponent from "./components/Organisms/footer";

export default {
  name: "app",
  components: {
    "header-component": headerComponent,
    "footer-component": footerComponent
  },
  methods: {
    ...mapMutations({ CONTENTS_UPDATE })
  },
  computed: {
    nav: {
      get() {
        return this.$store.state.nowContent;
      },
      set(nav) {
        this.CONTENTS_UPDATE(nav);
      }
    }
  }
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Inconsolata", monospace;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50; */
}

/* main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495e;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
} */
</style>
