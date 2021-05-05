<template>
  <form @submit.prevent="handleSubmit">
    <error v-if="error" :error="error" />
    <h3>Kayıt Ol</h3>

    <div class="form-group">
      <label>İsim</label>
      <input
        type="text"
        class="form-control"
        v-model="first_name"
        placeholder="İsim"
      />
    </div>
    <div class="form-group">
      <label>Soy isim</label>
      <input
        type="text"
        class="form-control"
        v-model="last_name"
        placeholder="Soy isim"
      />
    </div>
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

    <div class="form-group">
      <label>Parolayı Tekrar Giriniz</label>
      <input
        type="password"
        class="form-control"
        v-model="password_confirm"
        placeholder="Parolayı tekrar giriniz"
      />
    </div>
    <button class="btn btn-primary btn-clock">Kayıt Ol</button>
  </form>
</template>
<script>
import axios from "axios";
import Error from "./Error.vue";
export default {
  name: "Register",
  components: {
    Error,
  },
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirm: "",
      error: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        await axios.post("register", {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          password_confirm: this.password_confirm,
        });

        this.$router.push("/login");
      } catch (e) {
        this.error = "Error occured!";
      }
    },
  },
};
</script>
