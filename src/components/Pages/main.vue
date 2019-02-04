<template>
  <div>
    <header-component></header-component>
    <v-card-text style="height: 10vh;"></v-card-text>
    <contents-component :nav="nav"></contents-component>
    <v-card-text style="height: 60px;"></v-card-text>
    <footer-component :footerValue="footerShowFlag" :nav.sync="nav"></footer-component>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { CONTENTS_UPDATE } from "../../store/mutation-types.js";
import axios_t from "../../store/modules/axios-templates.js";

import headercomponent from "../Organisms/header";
import footercomponent from "../Organisms/footer";
import contentscomponent from "../Organisms/contents";

export default {
  name: "StartPage",
  data() {
    return {
      footerShowFlag: true
    };
  },
  components: {
    "header-component": headercomponent,
    "footer-component": footercomponent,
    "contents-component": contentscomponent
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


<style scoped>
contets-component {
  height: auto;
  overflow: auto;
}
</style>
