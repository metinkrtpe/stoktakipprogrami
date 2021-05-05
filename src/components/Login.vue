<template>
  <form @submit.prevent="handleSubmit">
    <error v-if="error" :error="error" />
    <h3>Giris Yap</h3>
    <div class="form-group">
      <label>Email</label>
      <input
        type="email"
        class="form-control"
        v-model="email"
        placeholder="Email"
      />
    </div>
    <div class="form-group">
      <label>Parola</label>
      <input
        type="password"
        class="form-control"
        v-model="password"
        placeholder="Parola"
      />
    </div>
    <button class="btn btn-primary btn-block">Giris Yap</button>
    <p class="forgot-password text-right">
      <router-link to="forgot">Sifrenizi mi unuttunuz ?</router-link>
    </p>
  </form>
</template>

<script>
//import axios from 'axios'
import Error from "./Error.vue";
console.log(localStorage.getItem("token"));

export default {
  name: "Login",
  components: {
    Error,
  },
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    handleSubmit() {
      localStorage.setItem("token", "deger");
      this.$router.push("/");
      this.$store.dispatch("user", []);
    },
  },
  mounted() {
    if (localStorage.getItem("token")) {
      this.$router.push("/");
    }
  },
};
</script>
<style></style>
