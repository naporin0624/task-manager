<template lang="pug">
  div.wrapper
    p ここ最近のタスクの変更,Infoの表示など
    v-container(
      grid-list-md
      fill-height
    )
      v-layout(row wrap)
        v-flex(md4 xs12 v-for="n in 3" :key="n")
          p.display-1.font-weight-regular.text-md-center TODO
          div.card-box(v-for="i in 10" :key="i")
            //- v-card.white--text(color='blue-grey darken-2')
            //-   v-card-title(primary-title='')
            //-     div.headline Unlimited music now
            //-       span Listen to your favorite artists and albums whenever and wherever, online and offline.
            //-   v-card-actions
            //-     v-btn(flat='', dark='') Listen now
          //- v-alert(
          //-   :value='true'
          //-   color='success'
          //-   icon='check_circle'
          //-   outline
          //- ) This is a success alert.
</template>

<script>
import { mapState, mapMutations } from "vuex";
// import { CONTENTS_UPDATE } from "@/store/mutation-types.js";
// import contentscomponent from "@/components/Organisms/contents";

export default {
  name: "StartPage",
  data() {
    return {
      footerShowFlag: true
    };
  },
  components: {
    // "contents-component": contentscomponent
  },
  methods: {
    // ...mapMutations({ CONTENTS_UPDATE })
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
.card-box {
  padding-top: 2.5px;
  padding-bottom: 2.5px;
}
</style>
