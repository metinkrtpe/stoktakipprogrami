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
    async handleSubmit() {
      this.$router.push("/");
    localStorage.setItem("token", "randomdasklşdaklşdklasdkladklşakldalkds");
      this.$store.dispatch("user", []);

    },
  },
};
</script>
<style></style>
