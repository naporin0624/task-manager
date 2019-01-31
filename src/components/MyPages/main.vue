<template>
  <div>
    <header-component></header-component>
    <transition>
      <contents-component :nav="nav"></contents-component>
    </transition>
    <footer-component :footerValue="footerShowFlag" :nav.sync="nav"></footer-component>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { MESSAGE_UPDATE } from "../../store/mutation-types.js";
import axios_t from "../../store/modules/axios-templates.js";

import headercomponent from "../Organisms/header";
import footercomponent from "../Organisms/footer";
import contentscomponent from "../Organisms/contents";

export default {
  name: "StartPage",
  data() {
    return {
      nav: "task",
      footerShowFlag: true,
      taskMessage: "",
      textdialog: false
    };
  },
  components: {
    "header-component": headercomponent,
    "footer-component": footercomponent,
    "contents-component": contentscomponent
  },
  methods: {
    addClick() {
      console.log("addClick");
      this.textdialog = !this.textdialog;
      console.log(this.textdialog);
    }
  }
};
</script>


<style scoped>
.container {
  /* width: 100%; */
  /* margin-top: 10px; */
  /* margin-bottom: 80px; */
  height: auto;
  overflow: auto;
}
/* 1秒かけて透明度を遷移 */
.v-enter-active,
.v-leave-active {
  transition: opacity 1s;
}
/* 見えなくなるときの透明度 */
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
