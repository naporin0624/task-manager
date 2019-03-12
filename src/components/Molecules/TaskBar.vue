<template lang="pug">
  div.wrapper
    v-layout(align-center justify-space-around row fill-height)
      v-flex(xs2)
        v-chip.cursor(
          :color="chipData[status].color"
          text-color="white"
          @click.stop="statClickEvent"
        ) {{chipData[status].name}}
      v-flex(
        xs8
        @click.stop="textClickEvent"
      )
        span.title {{display}}
      v-flex(xs2)
        v-btn(
          flat 
          icon 
          @click.stop="infoClickEvent"
        )
          v-icon more_horiz
</template>

<script>
export default {
  name: "TaskBar",
  props: {
    display: {
      type: String,
      required: true,
      default: "入力されていません"
    },
    status: {
      type: Number,
      required: true,
      default: 0
    },
    chipData: {
      type: Array,
      required: false,
      default: () => [
        {
          name: "TODO",
          color: "blue"
        },
        {
          name: "WIP",
          color: "red"
        },
        {
          name: "DONE",
          color: "green"
        }
      ]
    }
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    }
  },
  methods: {
    statClickEvent() {
      this.$emit("statclickend");
    },
    textClickEvent() {
      if (!this.isMobile) {
        this.$emit("textclickend");
      }
    },
    infoClickEvent() {
      this.$emit("infoclickend");
    }
  }
};
</script>

<style scoped>
.cursor {
  cursor: pointer;
  cursor: hand;
}
</style>
