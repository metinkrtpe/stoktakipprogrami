<template>
  <nav class="navbar navbar-expand navbar-light fixed-top">
    <div class="container">
      <router-link to="/" class="navbar-brand"
        >Anasayfa
        <div>{{ $route.name }}</div>
        {{ currentRouteName }}
      </router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto" v-if="!isLoggedIn()">
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Giris Yap</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Kayit Ol</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto" v-if="isLoggedIn()">
          <li class="nav-item">
            <a href="javascript:void(0)" @click="handleClick" class="nav-link"
              >Çıkış Yap</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Nav",

  methods: {
    handleClick() {
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
      this.$router.push("/login");
    },
    isLoggedIn() {
      return localStorage.getItem("token") ? true : false;
    },
  },
  computed: {
    ...mapGetters(["user"]),
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>
