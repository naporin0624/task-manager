<template lang="pug">
  div.wrapper
    v-layout(align-center justify-space-around row fill-height)
      v-flex(xs2)
        v-chip.cursor(
          :color="chipColor"
          text-color="white"
          @click.stop="statClickEvent"
        ) {{chipStatus}}
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
          v-icon info
</template>

<script>
  export default {
    name: 'TaskBar',
    props: {
      display: {
        type: String,
        required: true,
        default: '入力されていません'
      },
      status: {
        type: Number,
        required: true,
        default: 0,
      }
    },
    computed: {
      isMobile () {
        return this.$vuetify.breakpoint.smAndDown;
      },
      chipStatus () {
        const statusCode = this.status % 3
        if (statusCode == 0) {
          return '未完'
        } else if (statusCode == 1) {
          return '進行'
        } else if (statusCode == 2) {
          return '完了'
        }
      },
      chipColor () {
        const statusCode = this.status % 3
        if (statusCode == 0) {
          return 'blue'
        } else if (statusCode == 1) {
          return 'red'
        } else if (statusCode == 2) {
          return 'green'
        }
      }
    },
    methods: {
      statClickEvent () {
        this.$emit('statclickend')
      },
      textClickEvent () {
        if (!this.isMobile) {
          this.$emit('textclickend')
        }
      },
      infoClickEvent () {
        this.$emit('infoclickend')
      }
    }
  }
</script>

<style scoped>
.cursor {
  cursor: pointer;
  cursor: hand;
}
</style>
