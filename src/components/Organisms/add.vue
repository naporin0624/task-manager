<template>
  <div>
    <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="First name" required></v-text-field>
  </div>
</template>

<script>
export default {
  name: "AddWindow",
  data() {
    return {
      valid: false,
      firstname: "",
      lastname: "",
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 10 || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    };
  }
};
</script>

<style scoped>
</style>
