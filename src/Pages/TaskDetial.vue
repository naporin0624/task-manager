<template lang="pug">
  div.wrapper
    p.title {{viewData.display}}
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import { TASK_UPDATE } from '@/store/mutation-types.js'
import { FIND_ITEM } from '@/store/getters-types.js'

export default {
  name: 'TaskDetial',
  data () {
    return {
      uid: this.$route.params.uid
    }
  },
  computed: {
    ...mapGetters([
      FIND_ITEM
    ]),
    viewData () {
      return this.FIND_ITEM(this.uid)
    }
  }
};
</script>
