<template lang="pug">
  div.wrapper
    p.title {{viewData.display}}
    div.delete-btn
      v-btn(
        color='red'
        block
        dark
        large
        outline
        bottom
        @click.stop="deleteClick"
      ) このタスクを削除
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import { TASK_UPDATE, TASK_DELETE } from "@/store/mutation-types.js";
import { FIND_ITEM } from "@/store/getters-types.js";

export default {
  name: "TaskDetial",
  data() {
    return {
      uid: this.$route.params.uid
    };
  },
  computed: {
    ...mapGetters([FIND_ITEM]),
    viewData() {
      return this.FIND_ITEM(this.uid);
    }
  },
  methods: {
    ...mapMutations([TASK_DELETE]),
    deleteClick() {
      this.$router.push({ path: "/task" });
      console.log("clickEvent");
      this.TASK_DELETE(this.uid)
    }
  }
};
</script>

<style scoped>
.delete-btn {
  margin-left: 5%;
  width: 90%;
}
</style>
