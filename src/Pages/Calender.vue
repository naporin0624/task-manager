<template lang="pug">
  v-date-picker.calender(
    ref='calendar'
    color='primary'
  )
</template>

<script>
export default {
  name: "Calender"
};
</script>

<style scoped>
.calender {
  padding: 10px;
}
</style>
